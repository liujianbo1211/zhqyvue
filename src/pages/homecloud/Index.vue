<template>
  <div>
  <el-row style="position: relative;">
    <el-col :offset="0" :span="24" >
      <div id="map_canvas" class="allmap"></div>
    </el-col>
    <div style="height: 410px;width: 512px;position: absolute;right: 88px;top: 34px;">
    		<div style="height: 32px;background: #ED5001;">
    				<div style="width: 256px;float: left;text-align: center;line-height: 34px;">
    					总设备数
    				</div>
    				<div style="width: 256px;float: right;text-align: center;line-height: 34px;">
    					在线数
    				</div>
    		</div>
    		<div style="height: 86px;opacity: 0.8;background: #FFFFFF;">
    				<div style="width: 256px;float: left;text-align: center;line-height: 34px;">
    					103205
    				</div>
    				<div style="width: 256px;float: right;text-align: center;line-height: 34px;">
    					8955
    				</div>
    				
    		</div>
    		<div style="height: 34px;background: #ED5001;text-align: center;line-height: 34px;margin-top: 40px;">
    			当天人流量
    		</div>
    		<div style="height: 34px;text-align: center;line-height: 34px;opacity: 0.8;background: #FFFFFF;">
    			1238955
    		</div>
    		<div style="background: #FFFFFF;height: 166px;opacity: 0.8;">
    			统计图位置
    		</div>
    </div>
    <div style="position:absolute;right: 88px;bottom: 28px;height: 516px;width: 96px;background: red;">
    		
    </div>
  </el-row>
  </div>
</template>
<script>
export default {
 data() {
  return {
   address_detail: "", //详细地址
   userlocation: { lng: "", lat: "" },
   clearable: true,
   suggestId: "suggestId",
   map : {},
   mk: {}
  };
 },
 created () {
    
 },
 methods: {
   drawMap() {
    this.map = new BMap.Map("map_canvas");        // 创建地图实例
    this.map.addControl(new BMap.NavigationControl());      // 启用放大缩小 尺
    this.map.enableScrollWheelZoom();
    this.getlocation();//获取当前坐标, 测试时获取定位不准。
    console.log("get location....")
    console.log(this.userlocation)

    var point = new BMap.Point(this.userlocation.lng, this.userlocation.lat); // 创建点坐标 
    this.map.centerAndZoom(point, 15);         // 初始化地图，设置中心点坐标和地图级别 
    var marker = new BMap.Marker(point);    // 创建标注  
    this.map.addOverlay(marker);           // 将标注添加到地图中
      
    var ac = new BMap.Autocomplete({
    //建立一个自动完成的对象
    input: "suggestId",
    location: this.map
    });
    var myValue;
   ac.addEventListener("onconfirm", (e)=> {
    //鼠标点击下拉列表后的事件
    var _value = e.item.value;
    myValue =_value.province +_value.city +_value.district +_value.street +_value.business;
    this.address_detail = myValue;
    this.setPlace();
   });
   },
   getMarker (point) {
        this.mk = new BMap.Marker(point); 
        this.mk.addEventListener("dragend", this.showInfo);
        this.mk.enableDragging();  //可拖拽
        this.getAddress(point);
        this.map.addOverlay(this.mk);//把点添加到地图上 
        this.map.panTo(point);
   },
   getlocation () {
    //获取当前位置
    var geolocation = new BMap.Geolocation(); 
    geolocation.getCurrentPosition((r) =>{ 
      if(geolocation.getStatus() == BMAP_STATUS_SUCCESS){ 
        this.getMarker(r.point);
        console.log('show point...')
        console.log(r.point)
        this.userlocation = r.point;
      }else { 
        alert('failed'+this.getStatus()); 
      } 
    });
   },
   //绑定Marker的拖拽事件
     showInfo(e){
      var gc = new BMap.Geocoder();
      gc.getLocation(e.point, (rs)=>{
        var addComp = rs.addressComponents;
        var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
          
        //画图 ---》显示地址信息
        var label = new BMap.Label(address,{offset:new BMap.Size(20,-10)});
        this.map.removeOverlay(this.mk.getLabel());//删除之前的label
  
        this.mk.setLabel(label);
        this.address_detail = address;
        this.userlocation = e.point;
          
       });
    },
     //获取地址信息，设置地址label
     getAddress(point){
      var gc = new BMap.Geocoder();
        
      gc.getLocation(point, (rs)=>{
        var addComp = rs.addressComponents;
        var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
          
        //画图 ---》显示地址信息
        var label = new BMap.Label(address,{offset:new BMap.Size(20,-10)});
        this.map.removeOverlay(this.mk.getLabel());//删除之前的label
        this.address_detail = address;
        this.mk.setLabel(label);
          
       });
        
    },
    setPlace() {
    this.map.clearOverlays(); //清除地图上所有覆盖物
    var th = this
    function myFun() {
     th.userlocation = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
     th.map.centerAndZoom(th.userlocation, 18);
     th.getMarker(th.userlocation);
    }
  
    var local = new BMap.LocalSearch(this.map, {
     onSearchComplete: myFun //智能搜索
    });
    local.search(this.address_detail);
   },
   search () {
       var localSearch = new BMap.LocalSearch(this.map);
       localSearch.enableAutoViewport(); //允许自动调节窗体大小
       this.searchByInputName(localSearch);
 },
   searchByInputName(localSearch) {
     this.map.clearOverlays(); //清空原来的标注
     var th = this;
     var keyword = this.address_detail;
     localSearch.setSearchCompleteCallback(function(searchResult) {
       var poi = searchResult.getPoi(0);
       th.userlocation = poi.point;
       th.map.centerAndZoom(poi.point, 13);
       th.getMarker(th.userlocation);
    });
     localSearch.search(keyword);
   },
   onCopy () {
     this.$message('内容已复制到剪贴板!');
   },
   onError () {
     this.$message('内容复制失败,请重试!');
  
   }
      
 },
 mounted() {
  this.$nextTick(function() {
   this.drawMap();
  });
    
 }
};
</script>
<style scoped>
.allmap {
 width: 100%;
 height: 1000px;
 font-family: "微软雅黑";
}
.el-tag {
 cursor: pointer;
}
</style>