<template>
 <div class="headbar">
    <i class="headbar-left el-icon-arrow-left" @click="back"></i>
    <span class="headbar-middle">购物车({{$store.state.cargood.length}})</span>
    <i class="headbar-right el-icon-s-grid" @click="showshow"></i>
    <ul class="gowhere" v-if="show">
      <li class="trangel"></li>
      <li @click="gowhere('')"><i class="el-icon-s-home"></i><span>首页</span></li>
      <li @click="gowhere('categroy')"><i class="el-icon-s-operation"></i><span>分类</span></li>
      <li @click="gowhere('my')"><i class="el-icon-user-solid"></i><span>登录</span></li>
    </ul>
 </div>
</template>

<script>
 export default {
   name: 'headbar',
   data () {
     return {
       show:false
     }
   },
   methods: {
     back(){
       this.$router.go(-1)
     },
     gowhere(i){
        this.$router.push('./'+i)
        this.show=false;
     },
     showshow(){
       this.show=!this.show
     }
   },
   components: {

   }
 }
</script>

<style scoped>
.headbar{
    position: fixed;
    top: 0px;
    background: lightblue;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px -2px 0.5px rgba(100,100,100,.3);
    z-index: 2;
    
}
.headbar-left{
    line-height: 50px;
    float: left;
    padding-left: 10px;
}
.headbar-right{
    float:right;
    line-height: 50px;
    padding-right: 10px;
}
.gowhere{
  list-style-type: none;
  background: black;
  opacity: 0.9;
  width: 100px;
  height: 135px;
  color: white;
  position: absolute;
  padding-left: 10px;
  font-size: 14px;
  text-align: left;
  right:10px;
  border-radius:10px;
  line-height: 45px;
}
.gowhere span{
  margin-left: 10px;
  border-bottom: 0.5px solid white;
  width: 75px;
  display: inline-block;
 
}
.trangel{
  position: absolute;
  left:85px;
  top: -15px;
  /* background: red; */
  width: 0;
  height: 0;
  border:8px solid transparent;
  border-bottom-color: black;
 
}

 
</style>
