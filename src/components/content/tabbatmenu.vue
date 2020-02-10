<template>
      <tab-bar>
        <tabbaritem path='/home' > 
        <img slot='item_icon' src="../../assets/img/TabBar/home.svg">
        <img slot='item_icon_active' src="../../assets/img/TabBar/home_red.svg">
        <div slot='item_text'>首页</div>
        </tabbaritem>
        <tabbaritem path='/categroy'> 
        <img slot='item_icon' src='../../assets/img/TabBar/category.svg'>
        <img slot='item_icon_active' src='../../assets/img/TabBar/category_red.svg'>
        <div slot='item_text'>分类</div>
        </tabbaritem>
        <tabbaritem path='/car' activecolor="pink"> 
        <img slot='item_icon' src='../../assets/img/TabBar/car.svg'>
        <img slot='item_icon_active' src='../../assets/img/TabBar/car_red.svg'>
        <div slot='item_text'>购物车</div>
        </tabbaritem>
        <tabbaritem path='/my'> 
        <img slot='item_icon' src='../../assets/img/TabBar/my.svg'>
        <img slot='item_icon_active' src='../../assets/img/TabBar/my_red.svg'>
        <div slot='item_text'>我的</div>
        </tabbaritem>
      </tab-bar>

</template>

<style>


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
   components: {
     TabBar,
     tabbaritem
     
   }
 }
</script>