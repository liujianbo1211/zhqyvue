<template>
  <el-row class="container">
  	 <el-col :span="24" class="header" >
  		
  		<el-col :span="17">
  			<div style="display:flex">
                    <div style="margin: 10px 0 0 36px;" >
                        <img src="../assets/images/logo.png"/>
                    </div>
                    <div style="margin-top: 5px;margin-left:25px;font-size:26px;postition:relative;line-height:50px;vertical-align:middle;color: #EC5005;">
                     		 智 慧 全 域
                    </div>
                </div>
  			<div >
  				
  			</div>

  		</el-col>
  		<el-col :span="7">
  			        <div style="color:#E9904E;font-size:15px;display:inline;top:28px;right:122px;position:absolute">
                   		 管理员
                </div>
                <div style="color:#B8B8B8;font-size:15px;display:inline;top:28px;right:78px;position:absolute;cursor:pointer" @click="logout">
                   		 退出
                </div>                
  		</el-col>
  	</el-col>
  	<!--黄色分隔横线-->
  	<el-col :span="24" class='yellow-line'>  		
  	</el-col>
  
  	<!--下半部分-->
  	
        <el-col :span="24" class="main">
            <aside :class="!isCollapse?'menu-collapsed':'menu-expanded'" >
            	          
               <el-button style="width: 100%;height: 60px;border: none;" v-show="!isCollapse" @click="isCollapse = !isCollapse" :label="false"
                           class="menu-expan-button menu-expan-button2">
                    <i class="icon iconfont icon-shouye"></i>
                </el-button>
                <el-button style="width: 100%;height: 60px;border: none;" :label="true" v-show="isCollapse" @click="isCollapse = !isCollapse" class="menu-expan-button">
                    <i class="icon iconfont icon-shouye"></i>
                </el-button>
                <el-menu
                	unique-opened
                	@select="handleselect"
                	  style="width: 100%;" class="el-menu-vertical-demo"  :collapse="isCollapse">
									  <el-submenu index="1">
								    <template slot="title" index="/data">
								      <i class="icon iconfont icon-shouye"></i>
								      <span style="margin-left: 25px;font: 18px;color: #E47816;width: 100%;" slot="title">首页</span>
								    </template>
								  
								    <el-menu-item-group>
								      <el-menu-item style="padding-left: 100px;" index="/showIndex">首页</el-menu-item>
								    </el-menu-item-group>
								  </el-submenu>
								  
									  <el-submenu index="2">
								    <template slot="title">
								      <i class="icon iconfont icon-jingqu"></i>
								      <span style="margin-left: 25px;font: 18px;color: #E47816;" slot="title">景区服务商</span>
								    </template>
								  
								    <el-menu-item-group>
								      <el-menu-item style="padding-left: 100px;" index="/scenery">景区服务商</el-menu-item>
								    </el-menu-item-group>
								  </el-submenu>
								  
								  
								  <el-submenu index="3">
								    <template slot="title">
								      <i class="icon iconfont icon-shouji"></i>
								      <span style="margin-left: 25px;font: 18px;color: #E47816;" slot="title">设备管理</span>
								    </template>
								  
								    <el-menu-item-group>
								      <el-menu-item style="padding-left: 100px;" index="/terminal_message">设备信息</el-menu-item>
	
								    </el-menu-item-group>
								  </el-submenu>
								  
								  <el-submenu index="4">
								    <template slot="title">
								      <i class="icon iconfont icon-wifi"></i>
								      <span style="margin-left: 25px;font: 18px;color: #E47816;" slot="title">发射源管理</span>
								    </template>
								  
								    <el-menu-item-group>
								      <el-menu-item style="padding-left: 100px;" index="/emissionsource_count">发射源统计</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/machinecode_count">机器码统计</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/emissionsource_log">发射源访问日志</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/emissionsource">发射源</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/positionversion">位置版</el-menu-item>
								    </el-menu-item-group>
								  </el-submenu>
								  
								  <el-submenu index="5">
								    <template slot="title">
								      <i class="icon iconfont icon-shujutongjiweixuanzhong"></i>
								      <span style="margin-left: 25px;font: 18px;color: #E47816;" slot="title">数据统计</span>
								    </template>
								  
								    <el-menu-item-group>
								      <el-menu-item style="padding-left: 100px;" index="/terminal_lease">设备租赁次数统计表</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/sos_count">SOS统计</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/passengerflow_count">客流统计</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/fence_count">电子围栏统计</el-menu-item>
								    </el-menu-item-group>
								  </el-submenu>
								  
								  <el-submenu index="6">
								    <template slot="title">
								      <i class="icon iconfont icon-shouji"></i>
								      <span style="margin-left: 25px;font: 18px;color: #E47816;" slot="title">设备升级</span>
								    </template>
								  
								    <el-menu-item-group>
								      <el-menu-item style="padding-left: 100px;" index="/upgrade_state">升级情况</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/upgrade_log">升级日志</el-menu-item>
								    </el-menu-item-group>
								  </el-submenu>
								  
								  
								  <el-submenu index="7">
								    <template slot="title">
								      <i class="icon iconfont icon-zhanghao00"></i>
								      <span style="margin-left: 25px;font: 18px;color: #E47816;" slot="title">账号分配</span>
								    </template>
								  
								    <el-menu-item-group>
								      <el-menu-item style="padding-left: 100px;" index="/user_manager">账号管理</el-menu-item>
								      <el-menu-item style="padding-left: 100px;" index="/roles_manager">角色分配</el-menu-item>
								    </el-menu-item-group>
								  </el-submenu>
									</el-menu>

								
								
								

            </aside>
            <div class="menu-line"></div>
            <!--<section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="content-wrapper">
                        <keep-alive>
                            <router-view></router-view>

                        </keep-alive>
                    </el-col>
                </div>
            </section>-->
            <div class="right-content" >
            		<router-view></router-view>
            </div>
            <div class="menu-line-right"></div>
        </el-col>
  </el-row>
</template>

<script>
	import "../assets/font/iconfont.css";
export default {
  name: 'HomeCloud',
  data () {
    return {
			isCollapse:false
    }
  },
  methods:{
  	logout(){
  		sessionStorage.removeItem('user');
  		this.$router.push({ path: "/loginCloud" });
  	},
  	handleopen() {
                //console.log('handleopen');
    },
    handleclose() {
        //console.log('handleclose');
    },
    handleselect(a,b){
    	this.$router.push(a);
    }
  }
}
</script>

<style lang="scss" src="../styles/Home.scss" scoped>
		
</style>
