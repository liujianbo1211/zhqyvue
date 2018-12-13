<template>
  <div class="index" >
  	  <common-table
  	  	:tableitems="tableitems"
  	  	ref='tumitable'></common-table>
  </div>
</template>

<script>
	import CommonTable from '../../components/CommonTable'
export default {
  name: 'EmissionSource',
  components: {
		CommonTable
  },
  data () {
    return {
				tableitems: [                       //表格元素，表头
                    {
                        hasSubs: false,
                        subs: [{
                            label: '编号',          //页面表格显示
                            prop: 'id',             //对应表中字段
                            width: '100',           //列宽度
                            type: 'str',         //对应表中字段类型
                            editable: false,         //是否可编辑
                            searchable: true,       //是否可查询
                            addable: true,          //是否可添加
                            unsortable: true,       //是否可排序
                            align: 'center'         //页面表格内容显示位置
                        }]
                    },
                    {

                        hasSubs: false,
                        subs: [{
                            label: '名称',          //页面表格显示
                            prop: 'str',             //对应表中字段
                            width: '300',           //列宽度
                            type: 'str',         //对应表中字段类型
                            editable: true,         //是否可编辑
                            searchable: true,       //是否可查询
                            addable: true,          //是否可添加
                            unsortable: true,       //是否可排序
                            align: 'center'         //页面表格内容显示位置
                        }]
                    }
                  ]
    }
  }
}
</script>

<style lang="less">

</style>
