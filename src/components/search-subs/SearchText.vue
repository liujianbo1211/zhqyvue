<template>
  <!--<div class="date" style="margin-right: 15px">
		<el-date-picker
			v-model="dateForm.date"
			:editable="false"
			type="datetime"
			style="width:95%"
			@change="uptosearchdialog"
			placeholder="选择日期时间">
		</el-date-picker>
  </div>-->
  <div style="display: inline;margin-right: 84px;"  >
 				<span style="margin-right: 18px;">旅游团</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入角色"
				  v-model="dateForm.group"
				  clearable>
				</el-input>
 			</div>
</template>

<script>
export default {
  name: 'SearchText',
  data () {
    return {
			dateForm:{
					date:'',
      },
			tempForm:{
				date:'',
			},
			upForm:{},
    }
  },
  methods:{
  	uptosearchdialog(){
  		
  	}
  }
}
</script>


<style lang="less">

</style>
