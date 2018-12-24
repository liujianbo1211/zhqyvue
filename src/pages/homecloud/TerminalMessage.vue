<template>
  <div class="index" >
  	  设备信息....
  	 <br />
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
	  <div style="margin: 15px 0;"></div>
	  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
	    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
	      <el-checkbox-group v-model="checkedCities1" @change="handleCheckedCitiesChange1">
			    <el-checkbox v-for="city1 in cities1" :label="city1.name" :key="city1.name">{{city1.id}}</el-checkbox>
			  </el-checkbox-group>
	  </el-checkbox-group>
  </div>
</template>

<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	const cityOptions1 = [{id:0,name:'上海1'}, {id:1,name:'上海2'}, {id:2,name:'上海3'}, {id:3,name:'上海4'}];
export default {
  name: 'TerminalMessage',
   data() {
      return {
        checkAll: false,
        checkAll1:false,
        checkedCities: ['上海', '北京'],
        checkedCities1:[],
        cities1:cityOptions1,
        cities: cityOptions,
        isIndeterminate: true,
        isIndeterminate1:true,
        cityOptions1:[{id:0,name:'上海1'}, {id:1,name:'上海2'}, {id:2,name:'上海3'}, {id:3,name:'上海4'}]
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      handleCheckedCitiesChange1(val){
      	 let checkedCount = value.length;
       	 this.checkAll1 = checkedCount === this.cities1.length;
       	 this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cities1.length;
      }
    }
}
</script>

<style lang="less">

</style>


