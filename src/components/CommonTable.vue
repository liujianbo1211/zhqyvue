<template>
  <section>
  	
  	 <!--主题-->
   	 <el-row style="height: 20px;margin-top: 24px;font-size: 18px;color:#919191;" v-if="title.showable">
      <span style="display:inline-block;margin-left: 13px;padding-left:7px ;border-left: 4px solid #F98319;">{{title.menuname}}</span>
      <strong style="color: #F98319;padding: 0 5px;font: 14px;">-</strong>
      <span>{{title.submenuname}}</span>
    </el-row>
    
    <!--查询组件-->   
    <Search-Tool
    			:searchitems="tableitems"
    			v-on:search="onSearch"
    			ref="searchTool"
    			></Search-Tool>
    
    <!--工具栏-->
    <el-row  style="border-bottom: 2px solid #FCD4B1;margin-top: 44px;" v-if="datadescription.showable">
      <span style="display:inline-block;margin:0 0 5px 5%;color: #FE9955;font-size: 18px;">{{datadescription.message}}{{pageTotal}}{{datadescription.unit}}</span>
    </el-row>
    
    <!--表格按钮-->
    <el-row style="height: 40px;padding-left: 90px;margin: 20px 0 20px 0;">

				<el-button round @click="addFormVisible=true">新 增</el-button>
				<el-button round @click="showDelVisible">删 除</el-button>
				<el-button round >导 入</el-button>
				<el-button round >导 出</el-button>

    </el-row>
    
    <!--表格-->
    <el-row style="margin-left: 5%;">
      <el-table
      	
        :data="tableData"
        border
        highlight-current-row
        style="width:95%;"
        height="569"
        v-loading="loading"
        id="tablearea"
        @selection-change="handleSelectionChange"
      >
        <div>
        	<el-table-column type="selection" width="55" fixed="left" ></el-table-column>
        </div>
        <div v-for="items in tableitems">
          <div v-if="items.hasSubs">
            <el-table-column :label="items.label" header-align="center" >
              <el-table-column 
                v-for="tableitem in items.subs"
                v-if="!tableitem.hidden"
                :prop="tableitem.prop"
                :label="tableitem.label"
                header-align="center"
                :align="tableitem.align"
                :sortable="!tableitem.unsortable"
                :width="tableitem.width"
                :formatter="tableitem.format"
              ></el-table-column>
            </el-table-column>
          </div>
          <div v-if="!items.hasSubs">
            <el-table-column
              v-for="tableitem in items.subs"
              v-if="!tableitem.hidden"
              :prop="tableitem.prop"
              :label="tableitem.label"
              header-align="center"
              :align="tableitem.align"
              :sortable="!tableitem.unsortable"
              :width="tableitem.width"
              :formatter="tableitem.format"
            ></el-table-column>
          </div>
        </div>

        <el-table-column label="操作" :width="200"  align="center">
          <template slot-scope="scope">
            <el-button           
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button size="mini" type="danger" @click="openDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-row>
    
    <!--分页条-->
    <el-row style="padding-right: 5%;margin-top: 24px;">
    			<div style="float: right;">
    				<el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage"
				      :page-sizes="[10, 20, 30, 40]"
				      :page-size="10"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="pageTotal">
				    </el-pagination>
    			</div>
    </el-row>
    
    <!--各种diglog-->
    
    <!--批量删除-->
    <!--删除提示框-->
    <el-dialog title="提示" :visible.sync="delVisible" width="30%" custom-class="deleteTip">
      <div class="el-message-box__status el-icon-warning" style="padding-bottom: 10px;"></div>
      <div style="margin-left:50px;vertical-align:middle;">确定删除吗?此操作不可恢复!</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="deleteByIds" size="small">确 定</el-button>
      </span>
    </el-dialog>
    
    <Add-Form
    		:addVisible="addFormVisible"
    		:additems="tableitems"
    		:addFormRules="typeof(addFormRules)=='undefined'?editFormRules:addFormRules"
    		v-on:adddialog="closeadd"
    		v-on:addselectionchange1="addselectionchange1"
    		v-on:add="onAdd"
    		ref="addref"
    		>
    		</Add-Form>
    		
    		<!--编辑-->
    		<edit-form
                :editVisible="editFormVisible"
                :editloading="editloading"
                :editFormRules="editFormRules"
                :rowdata="rowdata"
								:additems="tableitems"
								v-on:editdialog="closeedit"
                ref="editref">
        		</edit-form>
    
  </section>
</template>

<script>
	import SearchTool from './SearchTool'
	import AddForm from './AddForm'
	import EditForm from './EditForm'
	import {path} from '../api/api'
	export default {
	  name: 'CommonTable',
		  components: {
	    SearchTool,AddForm,EditForm
	  },
	  data () {
	    return {
	    		rowdata:{},
	    		editloading:false,
	    		editFormVisible:false,
	    		addFormVisible:false,
	    		addLoading:false,
					loading:false,
					tableData:[],
					currentPage:1,
					pageTotal:0,
					pageSize:10,
					multipleSelection:'',
					delVisible:false,
					delIds:'',
	    }
	  },
	  props:[
	  	'tableitems','queryapi','delapi','updateapi','addapi','title','datadescription','editFormRules','addFormRules'
	  ],
	  methods:{
	  	//编辑
	  	handleEdit(){
	  		this.editFormVisible=true;
	  	},
	  	//批量删除
	  	showDelVisible() {
	      var multipleSelection = this.multipleSelection;
	      if (multipleSelection == undefined || multipleSelection.length == 0) {
	        this.$message({
	          message: "未选中数据",
	          type: "error",
	          duration: 1200
	        });
	        return;
	      }
	      var multipleSelection = this.multipleSelection;
	      var delIds = [];
	      for (var i = 0; i < multipleSelection.length; i++) {
	        delIds.push(multipleSelection[i].id);
	      }
	      this.delIds=delIds;
	      this.delVisible = true;
	    },
	    //单个删除
	    openDelete(index, row) {
	      var delIds = [];
	      delIds.push(row.id);
	      this.delIds= delIds;
	      this.delVisible = true;
	    },
	    //请求后台删除
	    deleteByIds(){
	    	 //删除
	      var vm = this;
	      var api = this.delapi;
	      var delIds = this.delIds;
	      var dform = {};
	      dform.ids=delIds;
	      let token = sessionStorage.getItem("token");
	      //发送请求,删除id为row.id的数据
	
	      this.$axios
	        .post(path + api, dform, {
	          headers: {
	            "Content-Type": "application/json; charset=UTF-8",
	            Authorization: "Bearer " + token
	          }
	        })
	        .then(function(response) {
	          let ret = response.data;
	
	          //删除成功
	          if (ret.resultStatus.resultCode == "0000") {
	            // if (ret > 0) {
	            //删除成功
	            vm.$refs["searchTool"].query();
	            vm.$message({
	                        message: '删除成功!',
	                        type: 'success',
	                        duration: 600
	                    });
	          } else {
	            //更新失败
	            vm.$message({
	              message: "删除失败",
	              type: "error",
	              duration: 1200
	            });
	          }	
	          vm.delVisible = false;
	        })
	        .catch(function(error) {
	          setTimeout(() => {
	            vm.alertInfo("请求失败!" + error);
	          }, 150);
	        });
	
	      
	    },
	  	handleSelectionChange(val) {
	      this.multipleSelection = val;
	    },
	  	// 分页
    	handleSizeChange(val) {
	      this.currentPage = 1;
	      this.pageSize = val;
	      this.$refs["searchTool"].query();
	    },
	  	handleCurrentChange(val) {
	      this.currentPage = val;
	      this.$refs["searchTool"].query();
	    },
	    closeadd(val) {
	    	this.addFormVisible = val;
        this.addLoading = val;
      },
	  	onSearch: function (sform) {
		    //在这里得到表单项,提交查询
		    this.getTableData(sform);
     },
     alertInfo(msg) {
      this.$alert(msg, "提示", {
        confirmButtonText: "确定",
        type: "warning",
        callback: action => {
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("token");
          this.$router.push("/login");
        }
      });
    },
    closeedit: function (val) {
        this.editFormVisible = val;
        this.editloading = val;
    },
     //拉取表格数据
    getTableData(sform) {
      var vm = this;
      this.loading = true;

      var api = this.queryapi;

      sform.pageSize = this.pageSize;
      sform.pageNum = this.currentPage;

      let token = sessionStorage.getItem("token");
      this.$axios
        .post(path + api, sform, {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + token
          }
        })
        .then(function(response) {
          let ret = response;

          if (ret.status == "200") {
          	if(ret.data.resultStatus.resultCode==='0000'){
          		vm.tableData = ret.data.value.list;
	            vm.pageTotal = ret.data.value.total;
	            vm.loading = false;
	            vm.$message({
	              message: "更新成功!",
	              type: "success",
	              duration: 900
	            });
          	}           
          }
        })
        .catch(function(error) {
          setTimeout(() => {
            alert("请求失败");
          }, 150);
        });
	    },
	    addselectionchange1:function(sform){
	    	this.$emit('addselectionchange2',sform);
	    },
	    onAdd:function(aform){	  
	    	let vm = this;
	    	 this.$refs.addref.$refs.addForm.validate((valid) => {
	    	 		if(valid){    	 			               
								
								vm.addloading = true;
                let api = vm.addapi;
								var token = sessionStorage.getItem("token");
								
								vm.$axios.post(path + api, aform, {
						          headers: {
						            "Content-Type": "application/json; charset=UTF-8",
						            Authorization: "Bearer " + token
						          }
						        })
						        .then(function(response) {
						          let ret = response;
											if (ret.status == "200") {
							          	if(ret.data.resultStatus.resultCode==='0000'){

								            vm.$message({
								              message: "添加成功!",
								              type: "success",
								              duration: 900
								            });
								            vm.addFormVisible=false;
								            vm.$refs["searchTool"].query();
							          	}           
							          }
						          
						        })
						        .catch(function(error) {
						          setTimeout(() => {
						            alert("请求失败");
						          }, 150);
						        });
						              
	    	 		}
	    	 });
	    }
	  }
	}
</script>

<style lang="less" >
		
</style>
