<template>
 <div class="detail">
   <h1>商品编码：{{pid}}</h1>
   <p>商品名称:{{imgsrc[pitid].text}}</p>
   <p>商品价格:{{imgsrc[pitid].price}}</p>
   <img :src="imgsrc[pitid].src" alt="">
   <div class='detailbtn'>
   <button  @click="back">返回</button>
   <button  @click="additem(pid,pitid)">加入购物车</button>
   </div>
 </div>
</template>

<script> 
 import imgsrc from '../../assets/imgsrc'
 export default {
   name: 'detail',
   created() {
    //  this.$emit('tabnotshow',false)
    //  console.log('发射notshow')
   },
   destroyed() {
    //  console.log('我毁了')
    //  this.$emit('tabshow',true)

   },
   data(){
     return {
       proid:0,
       imgsrc:imgsrc
     }
   },
   computed: {
     pid(){
       return this.$route.params.iid
     },
     pitid(){
       return (this.$route.params.iid-1)%6
     }
   },
   methods: {
     back(){
       this.$router.go(-1)
      //  console.log('发射show')
     },
     additem(pid,pitid){
        var iteminfo ={
        id:parseInt(pid),
        text: this.imgsrc[pitid].text,
        price: this.imgsrc[pitid].price,
        list: this.imgsrc[pitid].list,
        src: this.imgsrc[pitid].src,
        count:this.imgsrc[pitid].count,
        stats: this.imgsrc[pitid].stats
       }
       this.$store.commit('additem',iteminfo)
     }
   },
   components: {

   }
 }
</script>

<style scoped>
.detail{
  background-color:yellowgreen; 
  position: fixed;
  width: 100%;
  text-align: center;
}
.detailbtn{
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.detailbtn button{
  width: 50%;
  height: 40px;
}
img{
  width: 400px;
  margin: 0 2px;
}
 
</style>
