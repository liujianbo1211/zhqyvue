<template>
  <div class="index" >
  	  <common-table
  	  	:tableitems="tableitems"
  	  	:queryapi="queryapi"
  	  	:delapi="delapi"
  	  	:addapi="saveapi"
  	  	:title="title"
  	  	:updateapi="updateapi"
  	  	:datadescription="datadescription"
  	  	:editFormRules="editFormRules"
  	  	v-on:addselectionchange2="addselectionchange2"
  	  	v-on:editselectionchange="editselectionchange"	
  	  	ref='tumitable'></common-table>
  </div>
</template>

<script>
	import CommonTable from '../../components/CommonTable'
	import common from "../../common/js/common"
	import {path,roles} from "../../api/api"
	export default {
	  name: 'EmissionSource',
	  components: {
			CommonTable
	  },
	  data () {
	    return {
	    		title:{
	    			showable:true,
	    			menuname:'RFID管理',
	    			submenuname:'发射源'
	    		},
	    		datadescription:{
	    			showable:true,
	    			message:'共有位置版发射源: ',
	    			unit:'个'
	    		},
	    		queryapi:'/device/rfid/query',
	    		delapi:'/device/rfid/del',
	    		saveapi:'/device/rfid/save',
	    		updateapi:'/device/rfid/update',	    		
					tableitems: [                       //表格元素，表头            
						{
		          hasSubs: false,
		          subs: [
		            {
		              label: "景区服务商",
		              prop: "sceneryId",
		              width: "200",
		              type: "commonselection",
		              placeholder:'请选择',
		              selectlist: this.scenerylistquery,
		              hiddensearch:{type:0},
		              hiddenadd:{type:0},
		              hiddenedit:{type:0},
		              editable: true,
		              searchable: true,
		              addable: true,
		              hidden:true,
		              unsortable: true,
		              align: "center"
		            }
		          ]
		        },
		        {
			          hasSubs: false,
			          subs: [
			            {
			              label: "景点名称",
			              prop: "scenerySpotId",
			              width: "200",
			              selectlist: this.scenerylistquery,
			              type: "commonselection",
			              editable: true,
			              hidden:true,
			              searchable: false,
			              addable: true,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
	    		  {
			          hasSubs: false,
			          subs: [
			            {
			              label: "发射源id",
			              prop: "id",
			              width: "100",
			              type: "number",
			              editable: false,
			              searchable: false,
			              addable: false,
			              hidden:true,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			       },
			        {
			          hasSubs: false,
			          subs: [
			            {
			              label: "发射源编号",
			              
			              prop: "no",
			              width: "100",
			              type: "str",
			              editable: true,
			              searchable: true,
			              addable: true,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
			        {
			          hasSubs: false,
			          subs: [
			            {
			              label: "经度",
			              
			              prop: "lon",
			              width: "100",
			              type: "str",
			              editable: true,
			              searchable: false,
			              addable: true,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
			        {
			          hasSubs: false,
			          subs: [
			            {
			              label: "纬度",			              
			              prop: "lat",
			              width: "100",
			              type: "str",
			              editable: true,
			              searchable: false,
			              addable: true,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
			         {
			          hasSubs: false,
			          subs: [
			            {
			              label: "地址",
			              prop: "address",
			              width: "200",
			              type: "str",
			              editable: true,
			              searchable: false,
			              addable: true,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
			         {
			          hasSubs: false,
			          subs: [
			            {
			              label: "景区服务商",
			              prop: "sceneryName",
			              width: "200",
			              editable: false,
			              searchable: false,
			              addable: false,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
			        
			        {
			          hasSubs: false,
			          subs: [
			            {
			              label: "旅游景点",
			              prop: "scenerySpotName",
			              width: "200",
			              type: "selection",
			              selectlist: [{},{}],
			              editable: false,
			              searchable: false,
			              addable: false,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
			        {
			          hasSubs: false,
			          subs: [
			            {
			              label: "坐标",
			              prop: "coodrinte",
			              width: "200",
			              type: "number",
			              editable: false,
			              searchable: false,
			              addable: false,
			              unsortable: true,
			              align: "center",
			              format: function (row) {
			                  return row.lon +","+row.lat;
			         		  }
			            }
			          ]
			        },
			        {
			          hasSubs: false,
			          subs: [
			            {
			              label: "景点id",
			              prop: "scenerySpotId",
			              width: "200",
			              type: "number",
			              editable: false,
			              searchable: false,
			              hidden:true,
			              addable: false,
			              unsortable: true,
			              align: "center"
			            }
			          ]
			        },
			         {
			          hasSubs: false,
			          subs: [
			            {
			              label: "添加时间",
			              prop: "createTime",
			              width: "200",
			              type: "date",
			              editable: false,
			              searchable: false,
			              addable: false,
			              unsortable: true,
			              align: "center",
			              format:function(row){
			              	return common.dateformat(row.createTime);
			              }
			            }
			          ]
			        },{
			          hasSubs: false,
			          subs: [
			            {
			              label: "日期",
			              prop: "createTime",
			              width: "200",
			              type: "date",
			              editable: false,
			              searchable: true,
			              addable: false,
			              unsortable: true,
			              hidden:true,
			            }
			          ]
			        },
	       ],	       
	   		scenerylistquery:[],
	    	sceneryIds:[],
	    	editFormRules:{
	    		no: [
            { required: true, message: '请输入发射源编号', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],
          sceneryId: [
            { required: true, message: '请选择景区', trigger: 'change' }
          ],
          scenerySpotId: [
            { required: true, message: '请选择景点', trigger: 'change' }
          ],
          lon: [
            { required: true, message: '请输入经度', trigger: 'blur' }
          ],
          lat: [
            { required: true, message: '请输入纬度', trigger: 'blur' }
          ]
	    	},
	    	
	    	
	    }
	  },
	  activated(){
	  	
	  },
	  methods:{
	  	editselectionchange(eform){
	  			var sceneryId = eform.sceneryId;
	  			if(sceneryId==undefined||sceneryId==''){
	  				return;
	  			}
	  			//通过检测景区id的修改查询景点id
					var api = "/scenery/webdata/getsceneryspotbysceneryid";
					let token = sessionStorage.getItem("token");
					let sform = {
						'sceneryId':sceneryId
					}
					var vm = this;
					
					this.$axios.post(path+api, sform, {
			        headers: {
			            'Authorization':"Bearer " + token
			        }
			   }).then(function (response) {
						 var scenerySpostList = response.data.value;
						 var tempList=[];
						 for(var att in scenerySpostList){
						 		tempList.push({'id':scenerySpostList[att].id+"","name":scenerySpostList[att].name})
						 }
						 vm.tableitems[1].subs[0].selectlist = tempList;

						 if(sceneryId != eform.rowdata.sceneryId){
							 	vm.$refs['tumitable'].$refs['editref'].$refs['scenerySpotId'][0].cleanSelectForm({});
						 }else{
						 	  vm.$refs['tumitable'].$refs['editref'].$refs['scenerySpotId'][0].cleanSelectForm({'sceneryId':sceneryId});
						 }
			    })

	  	},
	  	//查询刷新方法，参数改变就需要重写
	  	onSearch(sform){
	  		this.$refs['tumitable'].getTableData(sform);
	  	},
	  	//获取景区列表下拉框
	  	getSceneryList(){
	  			var token = sessionStorage.getItem("token");
	
			    var _this = this;
		    
			    this.$axios.post(path+"/scenery/scenery/selectSceneryIdAndName", {}, {
			        headers: {
			            'Authorization':"Bearer " + token
			        }
			    }).then(function (response) {
					
					
			    	let data = response.data.value;
			    	
			    	let scenerylist= data.slice();
			    	
			    	_this.scenerylist=scenerylist;
			    	
			    	//data.push({id: 0, name: "查询全部"})
			    	//data.splice(0, 0, {id: 0, name: "查询全部"});
			    	_this.scenerylistquery = data;
						
						//刷新表格数据
						_this.sceneryIds=[];
						for(var i =0;i<data.length;i++){
							_this.sceneryIds.push(data[i].id)							
						}

						_this.$refs['tumitable'].getTableData({sceneryIds:_this.sceneryIds,type:0})
			    })
	  	},
	  	addselectionchange2:function(sform){
	  		
	  		console.log('子组件返回信息');
				console.log(sform.sceneryId)
				var sceneryId = sform.sceneryId;
				if(sceneryId != undefined && sceneryId != ''){
					this.getScenerySelectionById(sceneryId);
					this.tableitems[1].subs[0].selectlist = this.scenerylistquery; 
				}
	  		
	  	},
	  	getScenerySelectionById(id){
	  			var api = "/scenery/webdata/getsceneryspotbysceneryid";
					let token = sessionStorage.getItem("token");
					let sform = {
						sceneryId:id
					}
					var vm = this;
					this.$refs['tumitable'].$refs['addref'].$refs['scenerySpotId'][0].cleanSelectForm();
					common.commonPost(path+api,sform,token,function(data){
		    	 		vm.tableitems[1].subs[0].selectlist=data.value
		    	});
	  	}
	  },
	  mounted(){
	  	//获取景区下拉列表  并刷新表格
	  	this.getSceneryList();  		  	  	
	  },
	  watch: {
        scenerylistquery: function (val) {
            this.tableitems[0].subs[0].selectlist = val;                
        }
    }
	}
</script>

<style lang="less">

		.el-table th div,.el-table th div, .el-table th>.cell,.el-table--border th{
			background: #FAFAFA;
		}
				
</style>
