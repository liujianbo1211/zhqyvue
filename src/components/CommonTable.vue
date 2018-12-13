<template>
  <section>
  	
  	 <!--主题-->
   	 <el-row style="height: 20px;margin-top: 24px;font-size: 18px;color:#919191;">
      <span style="display:inline-block;margin-left: 13px;padding-left:7px ;border-left: 4px solid #F98319;">RFID管理</span>
      <strong style="color: #F98319;padding: 0 5px;font: 14px;">-</strong>
      <span>发射源</span>
    </el-row>
    
    <!--查询组件-->
   
    
    <Search-Tool
    			:searchitems="tableitems"
    			></Search-Tool>
    
    <!--工具栏-->
    <el-row  style="border-bottom: 2px solid #FCD4B1;margin-top: 20px;">
      <!--<div
        style="width: 1512px;margin-left:34px;border-bottom: 1px solid #FED3B0;padding-bottom: 10px;padding-left: 53px;color: #FD974F;"
      >aaa:&nbsp;aaabbb</div>-->
      <span style="display:inline-block;margin:0 0 5px 5%;color: #FE9955;">共有位置版发射源：11个</span>
    </el-row>
    
    <!--表格按钮-->
    <el-row style="height: 40px;padding-left: 90px;margin: 20px 0 20px 0;">

				<el-button round >新 增</el-button>
				<el-button round >删 除</el-button>
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
        :height="500"
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
      <!--<div class="block" style="float: right;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>-->
    </el-row>
    
    <!--分页条-->
    <el-row style="padding-right: 5%;margin-top: 24px;">
    			<div style="float: right;">
    				<el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage"
				      :page-sizes="[10, 20, 30, 40]"
				      :page-size="30"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="35">
				    </el-pagination>
    			</div>
    </el-row>
    
  </section>
</template>

<script>
	import SearchTool from './SearchTool'
	export default {
	  name: 'CommonTable',
		  components: {
	    SearchTool
	  },
	  data () {
	    return {
					loading:false,
					tableData:[{}],
					currentPage:1,
	    }
	  },
	  props:[
	  	'tableitems',
	  ],
	  methods:{
	  	handleSelectionChange(){
	  		
	  	},
	  	handleSizeChange(){
	  		
	  	},
	  	handleCurrentChange(){
	  		
	  	},
	  }
	}
</script>


<style lang="less">

</style>
