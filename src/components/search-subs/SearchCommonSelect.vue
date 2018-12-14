<template>
  <div style="display: inline;margin-right: 84px;" >
 				<span style="margin-right: 18px;">{{title}}</span>
 			
				<el-select  v-model="selectForm.no" size="small" @change="uptosearchdialog" filterable :placeholder="placeholder">
					<el-option
						v-for="item in selectlist"
						:key="item.id"
						:label="item.name"
						:value="item.id">
					</el-option>
				</el-select>
 			</div>
</template>

<script>
import common from '../../common/js/common.js'

export default {
  name: 'select_vue',
  data () {
    return {
    	
			selectForm:{
				no:''
			},
			tempForm:{
				no:''
			},
			upForm:{
		
			}
    }
  },
	props:['title','id','selectlist',"placeholder"],
  methods:{
		uptosearchdialog:function(){

			if(this.selectForm.no!=''){
				this.upForm[this.id]=this.selectForm.no
				this.$emit('fromsearchitem',this.upForm)
			}else{
				alert('为空')
			}
		},
		cleanf:function(val){
			this.upForm={}
			this.selectForm=common.clone(this.tempForm)
		},
  },
	mounted(){
		console.log('mount select...')
		console.log(this.selectlist)
	},
	destroyed(){
		console.log('destroy select')
	}

}
</script>