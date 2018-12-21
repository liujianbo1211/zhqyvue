<template>
  <div class="login">
    <div class="w">
 
    	<div style="background: wheat;position: absolute;">
    		<img src="../assets/images/login-logo.png"/>
    	</div>

    	<div class="login-form" >
    		<div class="login-form-title">

 	  			<span>
    				<img src="../assets/images/logo.png"/>
    			</span>
    			<div>
    				智 慧 全 域 管 理 系 统
    			</div>
    		</div>
    		<div class="form">
				<el-form :label-position="labelPosition" :model="loginForm"  :rules="formRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="用 户 账 号" placeholder="请输入账号" prop="username">
				    <el-input  v-model="loginForm.username" ></el-input>
				  </el-form-item>
				  <el-form-item label="用 户 密 码" placeholder="请输入密码" prop="password">
				    <el-input type="password" v-model="loginForm.password" ></el-input>
				  </el-form-item>
				  <el-form-item class="check" label="验 证 码" placeholder="请输入验证码" prop="imageCode">
				  	<span style="position: absolute;top:3px;left: 212px;"><img :src="imageUrl" style="cursor:pointer" @click="changeImage" /></span>
				    <el-input v-model="loginForm.imageCode"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <button style="width: 100%;height: 52px;border-radius: 26px;background: #FA841A;"  @click="login" >登 录</button>
				  </el-form-item>
				</el-form>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import {path} from "../api/api"
export default {
  name: 'LoginCloud',
   data() {
      return {
      	imageUrl:path+'/sys/captcha',
      	labelPosition:"top",
        loginForm: {
          username: '',
          password: '',
          imageCode: ''
        },
        formRules: {
          username: [
	          { required: true, message: "请输入您的账号", trigger: "blur" },
	          { min: 3, max: 12, message: "长度在 3 到 12个字符", trigger: "blur" }
	        ],
	        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
	        imageCode: [
	          {
	            required: true,
	            message: "验证码错误",
	            trigger: "blur"
	          }
	        ]
        }
      };
    },
    methods: {
     	changeImage(){
     		this.imageUrl=path+"/sys/captcha?time="+new Date().getTime();
     	},
     	login(){
     		var _this = this;
     		 this.$refs.loginForm.validate((valid) => {
     		 	//表单校验成功
				if(valid){
					 _this.$axios.post(path+"/sys/login",_this.loginForm)
            .then(response => {
              console.log(response, "打印的数据是.....");
              if (response.status === 200) {
                if (response.data.resultStatus.resultCode === "0000") {
                	               

                  sessionStorage.setItem("token",response.data.value.access_token);
                  sessionStorage.setItem('user',{'username':'zhangsan'});
                    
                  
                  this.$message({
                    message: "登陆成功",
                    type: "success"
                  });
                  _this.$router.push({ path: "/showIndex" });
                } else {
                  //  登录失败的错误提示
                  this.$message({
                    message: "账号或者密码错误",
                    type: "error"
                  });
                  _this.changeImage();
                }
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
				
     		 	
     		 })
     	}
    },
    mounted() {
    	var vm = this;
    	//检测回车按键
			document.addEventListener('keydown', function (e) {
			    if (e.keyCode == 13) {
			        vm.login();
			    }
			}, false);

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
	.login .w{
		position: relative;
		width: 1652px;
		margin: 0 auto;
		
	}
	.login .login-form{
		z-index: 1000;
		height: 668px;
		width: 460px;
		margin:204px 0 0 1030px;
		border-radius: 6px;
		background: #FFFFFF;
		border: 10px solid white;
		position: absolute;
	}
	.login .login-form-title{
		width: 100%;
		height: 60px;
		margin-top: 80px;
		position: relative;
	}
	.login .login-form-title span{
		display: inline-block;
		position: absolute;
		top: 13px;
		left: 80px;
	}
	.login .login-form-title div{		
		display: inline-block;
		position: absolute;
		top: 17px;
		left: 142px;
		font-size: 24px;
      	font-weight: 500;
     	color: #EE6225;
	}
	.login .form{
		width: 340px;
		height: 385px;
		margin-top: 34px;
		margin-left:58px
	}
	.login .el-form-item__label {
      font-size: 16px;
      color: #EB9862;
      font-weight: 600;
    }
    .login .el-input__inner {
      border-radius: 26px;
      height: 52px;
    }
    .login .check .el-input__inner{
    	width: 196px;
    }
    .login .check .el-input{
    	width: 196px;
    }
    .login button{
      width: 100%;
      margin-top: 32px;
      font-size: 26px;
      background: #ff6600;
      border-radius: 20px;
      color: #fff;
      cursor:pointer
    }
</style>
