<template>
 <div class="sum">
  <div class="ii">
  <el-checkbox :value="allselected" @change='change'></el-checkbox>
  <span>全选</span> 
  </div>
 </div>
</template>

<script>

 export default {
   name: 'sum',
   data () {
     return {

     }
   },
   methods: {
     change(){
       this.$store.commit('changeallstau')
     }
   },
   computed: {
     allselected(){
       return this.$store.state.allselect
     }
   },
   components: {
     
   }
 }
</script>

<style scoped>
.sum{
    background:lightgray;
    width: 100%;
    position:fixed;
    z-index: 2;
    top:83.5%;
    height: 65px;
}
.ii{
  width: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
  color:red;
  margin: auto 0;
}
 
</style>
