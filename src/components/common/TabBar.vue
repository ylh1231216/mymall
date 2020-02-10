<template>
 <div id='tab_bar'>
 <slot></slot>
 </div>

</template>

<script>

export default {
   name: 'TabBar',
   data () {
     return {

     }
   },
   components: {
   
   }
 }
</script>

<style scoped>
#tab_bar{
  display: flex;
  background-color: #f6f6f6;
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 0.5px rgba(100,100,100,.3)
}

</style>
