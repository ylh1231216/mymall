<template>
 <div class="sum">
  <div class="ii">
  <el-checkbox :value="allselected" @change='change'></el-checkbox>
  <span>全选</span> 
  </div>
  <span class="ss">总价:￥{{$store.state.sum}}</span>
  <el-button type="danger" round class="ee">结算({{$store.state.sumcount}})</el-button>
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
    display: flex;
    background:lightgray;
    width: 100%;
    position:fixed;
    z-index: 2;
    bottom: 0;
    height: 65px;
}
.ii{
  width: 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  color:red;
  margin: auto 0;
}
.ss{
  flex:9;
  margin: auto 10px;

  }
.ee{
  flex: 1;
  height: 50px;
  margin: auto 0;
}

</style>
