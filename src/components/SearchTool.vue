<template>
   <el-row style="height: 30px;background: #eee;margin-top: 22px;padding-left:5% ;font:'microsoft yahei' 18px/32px ;">
  
    		<!--<SearchText></SearchText>-->
    		<span v-for="items in searchitems">
	    			<p
	    				v-for="item in items.subs"
		    			:is="item.type"
							:id="item.type"
							:ref="adfa"
		    			></p>
    		</span>
    		
    		<div style="display: inline;margin-left: 70px;margin-top: -100px;">
 				 <el-button size="small" style="background: #FA841A;color: white; " @click="query">查询</el-button>
 				  <el-button size="small" @click="resetForm">重置</el-button>
 				  <el-button size="small" @click="query">刷新</el-button>
 				</div>
   </el-row>
</template>

<script>
	import SearchText from './search-subs/SearchText'
export default {
  name: 'SearchTool',
  components:{
		str:SearchText
		//SearchText
	},
  data () {
    return {
				text:"str",
				adfa:'adfa'
    }
  },
  props:[
  	'searchitems'
  ]
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
		.el-button--small, .el-button--small.is-round{
			margin-top: 15px;
		}
</style>
