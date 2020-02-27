<template>
 <div>
    <navagation/>
    <catelist></catelist>
    <tabbatmenu></tabbatmenu>
 </div>
</template>

<script>
  import navagation from './components/navagation'
  import catelist from './components/catelist'
  import tabbatmenu from '../../components/content/tabbatmenu'
 export default {
   name: 'categroy',
   data () {
     return {
       list:[
         {
           id:1,
           listname:''
         }
       ]
     }
   },
   components: {
     navagation,
     catelist,
     tabbatmenu
   }
 }
</script>

<style scoped>

 
</style>
