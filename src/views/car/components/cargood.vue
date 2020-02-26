<template>
 <div class="cargood" :style="{height:iheight+'px'}">
    <div v-for="(item,index) in cargood" :key="index">
        <el-checkbox :value="item.stats" class="ii" @change='change(index)'></el-checkbox>
        <img :src='item.src'>
        <span>
        <p>{{item.id+':'+item.text}}</p>
        <b>{{'￥'+item.price}}</b>
        <div class="iii">
        <button @click="dec(index)">-</button>{{item.count}}<button @click="add(index)">+</button>
        <span>删除</span>
        </div>
        </span>
    </div>
    
 </div>
</template>

<script>
 import iheight from '../../../assets/windowinfo'
 
 export default {
   name: 'cargood',

   computed: {
       cargood(){
           return this.$store.state.cargood
           },
        iheight(){
          return iheight-iheight/4
        }
   },
   data () {
     return {
       
     }
   },
   methods:{
      add(index){
          this.$store.commit('add',{index:index})
      },
      dec(index){
          this.$store.commit('dec',{index:index})
      },
      change(index){
        this.$store.commit('changesinglestau',{index:index})
        // console.log('changesinglestau')
      }
   },
   components: {

   }
 }
</script>

<style scoped>
.cargood{
    height: 560px;
    overflow: scroll;
}
.cargood>div{
  display: flex;
  margin: 20px 5px;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
  position: relative;
  top:50px;
  z-index: 1;
}
.cargood img{
    width: 100px;
    height: 100px;
    box-shadow: 0px 10px 10px #888888;
    margin:0 10px;
}
.cargood p{
  font-size:14px
}

.ii{
    transform: translateY(50px)
}
.iii{
  float:right;
  text-align: center;
}
.iii span{
    display: block;
    font-size:10px;
    color: red;
    margin-top:10px;

}
</style>
