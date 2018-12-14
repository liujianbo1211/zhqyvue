<template>
  <div style="display: inline;margin-right: 84px;"  >
			<span style="margin-right: 18px;">{{title}}</span>
			<el-input style="display: inline-block;" size="small"
			  :placeholder="placeholder"
			  v-model="textForm.text"
			  @blur="uptosearchdialog"
			  >
			</el-input>
		</div>
</template>

<script>
import common from '../../common/js/common.js'
export default {
  name: 'SearchText',
  data () {
    return {
			textForm:{
					text:'',
     },
     upForm:{
				
			},
			tempForm:{
				
			}
    }
  },
  props:[
  	'placeholder','title','id'
  ],
  methods:{
  	uptosearchdialog(){
  		
  		if(!(this.textForm.text == undefined ||this.textForm.text =='')){
  			this.upForm[this.id]=this.textForm.text.trim()
				this.$emit('fromsearchitem',this.upForm)
  		}

  	},
		cleanf:function(val){
			this.textForm=common.clone(this.tempForm)
			this.upForm={}
		}
  }
}
</script>


<style lang="less">

</style>
