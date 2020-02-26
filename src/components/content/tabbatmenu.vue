<template>
      <tab-bar v-if="display" class="aa">
        <tabbaritem path='/home' > 
        <img slot='item_icon' src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png">
        <img slot='item_icon_active' src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png">
        </tabbaritem>
        <tabbaritem path='/categroy'> 
        <img slot='item_icon_active' src='https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png'>
        <img slot='item_icon' src='https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png'>
        </tabbaritem>
        <tabbaritem path='/car'> 
        <img slot='item_icon_active' src='../../assets/img/TabBar/jingdongcar_gray.png'>
        <img slot='item_icon' src='https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png'>
        1
        </tabbaritem>
        <tabbaritem path='/my'> 
        <img slot='item_icon_active' src='../../assets/img/TabBar/my.svg'>
        <img slot='item_icon' src='https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png'>
        </tabbaritem>
      </tab-bar>

</template>

<style>
.aa{
  z-index: 100;
}

</style>
<script>
import TabBar from '../common/TabBar.vue'
import tabbaritem from '../common/tabbaritem.vue'
 export default {
   name: '',
   data () {
     return {

     }
   },
   props:{
     display:{
       type:Boolean,
       default:true
       }
   },
   components: {
     TabBar,
     tabbaritem
     
   }
 }
</script>