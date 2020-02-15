<template>
  <div class='backtop el-icon-top' @click="totop" v-show="showicon">
     
  </div>
  
</template>

<style scoped>
   .backtop{
    position: fixed;
    bottom: 50px;
    font-size: 2em;
    background:lightcyan;
    right: 0px;
    opacity: 0.5
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
          console.log('清除定时器')
        }  
          window.scrollBy(0,-15)
          console.log(window.scrollY)
      }, 0.5);
    }
  }
}
</script>