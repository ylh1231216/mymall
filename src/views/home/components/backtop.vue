<template>
  <div class='backtop el-icon-top' @click="totop" v-show="showicon">
     
  </div>
  
</template>

<style scoped>
   .backtop{
    position: fixed;
    bottom: 60px;
    font-size: 2em;
    background:lightcoral;
    right: 10px;
    opacity: 1;
    border-radius: 50%;
   }

</style>

<script>
export default {
  name:'backtop',
  props:{
    showicon:Boolean
    },
  
  components:{
    
  },
  // data() {
  //     return {
  //      showicon:true
  //     }
  // },
  methods:{
    totop(){
      var t =setInterval(() => {
         if(window.scrollY==0){
          clearInterval(t);
          // console.log('清除定时器')
        }  
          window.scrollBy(0,Math.min(-window.scrollY/40,-150))
          // console.log(window.scrollY)
      }, 0.5);
    }
  }
}
</script>