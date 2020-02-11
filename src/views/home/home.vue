<template>
 <div id='home'>
  <navagation></navagation>
  <lv></lv>
  <menul></menul>

 </div>
</template>

<script>
import navagation from './components/navagation'
import lv from './components/listview'
import menul from './components/menu'

 export default {
   name: 'home',
   data () {
     return {

     }
   },
   components: {
     navagation,
     lv,
     menul
   }
 }
</script>

<style scoped>


</style>
