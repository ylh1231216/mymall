<template>
 <div class="car">
   <headbar></headbar>
   <cargood></cargood>
   <sum></sum>
 </div>
</template>

<script>
import headbar from './components/headbar'
import cargood from './components/cargood'
import sum from './components/sum'

 export default {
   name: 'car',
   data () {
     return {

     }
   },
   components: {
     headbar,
     cargood,
     sum
   }
 }
</script>

<style scoped>

 
</style>
