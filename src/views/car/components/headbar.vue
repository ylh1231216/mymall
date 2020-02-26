<template>
 <div class="headbar">
    <i class="headbar-left el-icon-arrow-left"></i>
    <span class="headbar-middle">购物车({{$store.state.cargood.length}})</span>
    <i class="headbar-right el-icon-s-grid"></i>
 </div>
</template>

<script>
 export default {
   name: 'headbar',
   data () {
     return {

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

 
</style>
