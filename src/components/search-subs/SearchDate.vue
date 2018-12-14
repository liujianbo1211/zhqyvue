<template>
  	<div style="display: inline;margin-right: 84px;" >
 				<span style="margin-right: 18px;">{{title}}</span>
 				<el-date-picker size="small"
			      v-model="dateForm.startTime"
			      type="date"
			      @change="uptosearchdialog"
			      placeholder="开始日期">
			    </el-date-picker>
			    <el-date-picker size="small"
			      v-model="dateForm.endTime"
			      type="date"
			      @change="uptosearchdialog"
			      placeholder="结束日期">
			    </el-date-picker>
 			</div>
</template>

<script>
import common from '../../common/js/common.js'

export default {
  name: 'SearchDate',
  data () {
    return {
      dateForm:{
					startTime:'',
					endTime:'',
      },
			tempForm:{
				startTime:'',
				endTime:'',
			},
			upForm:{},
	  	searchShow:{
	    datestart:true,
	    dateend:false,
      },
    }
  },
	props:['title','id'],
  methods:{
    datechange:function(val){
				common.intervalchange(this,val,'date');
				this.uptosearchdialog()
		},
		uptosearchdialog:function(){
			
			if(typeof(this.dateForm.startTime)=='object'&&this.dateForm.startTime!=undefined&&this.dateForm.startTime!='')
				this.upForm['startTime']=this.dateForm.startTime.getTime();
			if(typeof(this.dateForm.endTime)=='object'&&this.dateForm.endTime!=undefined&&this.dateForm.endTime!='')	
				this.upForm['endTime']=this.dateForm.endTime.getTime();
			
			this.$emit('fromsearchitem',this.upForm)
		},
		cleanf:function(val){
			this.dateForm=common.clone(this.tempForm)
			this.upForm={}
		}
  }

}
</script>