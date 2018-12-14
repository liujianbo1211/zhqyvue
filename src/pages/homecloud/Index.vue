<template>
  <div class="index">
    首页....
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
				username:'zhangsan',
				user:{
					name:'test'
				}
    }
  },
  mounted(){
  	console.log('=============')
  	console.log(this.username)
  	console.log(this.user)
  	
  	this.username='jianbo'
  	console.log('=============')
  	console.log(this.username)
  	console.log(this.user)
  },
  watch:{
  	username:function(val){
  		this.user.name=val;
  	}
  }
   /*watch: {
            selectlist: function (val) {
                this.tableitems[0].subs[5].selectlist = val;
                
            }
        }*/
}
</script>

<style lang="less">

</style>
