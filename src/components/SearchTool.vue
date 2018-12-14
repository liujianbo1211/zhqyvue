<template>
   <el-row style="margin-top: 36px;padding-left:5% ;font:'microsoft yahei' 18px/32px ;">
  
    		<!--<SearchText></SearchText>-->
    		<span v-for="items in searchitems">
	    			<p
	    				v-for="item in items.subs"
	    				v-if="item.searchable"
		    			:is="item.type"
						:id="item.prop"
						:title="item.label"
						:placeholder="item.placeholder" 
						:selectlist="item.selectlist"
						v-on:fromsearchitem="listensearchitem"
						:ref="item.prop"
		    			></p>
    		</span>
    		
    		<div style="display: inline;margin-top: -100px;">
 				 <el-button size="small" style="background: #FA841A;color: white; " @click="query">查询</el-button>
 				  <el-button size="small" @click="resetSearch">重置</el-button>
 				  <el-button size="small" @click="query">刷新</el-button>
 				</div>
   </el-row>
</template>

<script>
	import SearchText from './search-subs/SearchText'
	import SearchDate from './search-subs/SearchDate'
	import SearchCommonSelect from './search-subs/SearchCommonSelect'
	import common from '../common/js/common.js'
	export default {
	  name: 'SearchTool',
	  components:{
			str:SearchText,
			date:SearchDate,
			commonselection:SearchCommonSelect
		},
	  data () {
	    return {
	    	searched:false,
			searchForm:{
				
			}
	    }
	  },
	  props:[
	  	'searchitems'
	  ],
	  methods:{
	  	query(){
	  		
	  		if(common.getLength(this.searchForm)>0){
				this.searched = true
			}
			//将searchForm传递给父组件
			this.$emit('search',this.searchForm)

	  		
	  	},
	  	resetSearch(){
	  		
			//重置search
			//清空所有子组件的searchForm
			//循环调用，清除所以子组件内的表单值
			for(var i=0;i<this.searchitems.length;i++){
				for(var x in this.searchitems[i].subs){
					var t=this.searchitems[i].subs[x].prop;
					if(typeof(this.$refs[t])!='undefined'){
						this.$refs[t][0].cleanf()
					}
				}
			}
			//重置汇总searchForm内数据
			this.searchForm={}
			this.searched=false
	  			
	  	},
	  	listensearchitem(formitem){
	  		Object.assign(this.searchForm,formitem)
	  		console.log(this.searchForm)
	  	}
	  }
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	
	.el-date-editor .el-range__icon{
		color:#ff6600 ;
	}
		.check-left{
			margin-right: 18px;
		}
		
		
		.el-input__icon {
	      color: #ff6600;
	    }
	    
	    .el-input__icon {
	      color: #ff6600;
	    }
	  
	    /*section .el-input__inner{
	    	width: 150px;
	    }*/
		.el-row .el-input{
			width: 150px;
		}
		
</style>
