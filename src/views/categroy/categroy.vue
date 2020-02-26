<template>
 <div>
    <navagation/>
    <catelist></catelist>
 </div>
</template>

<script>
  import navagation from './components/navagation'
  import catelist from './components/catelist'
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
     catelist
   }
 }
</script>

<style scoped>

 
</style>
