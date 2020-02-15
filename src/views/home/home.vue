<template >
 <div id='home'>
  <headbar></headbar>
  <navagation></navagation>
  <lv></lv>
  <menul></menul>
  <showgoods></showgoods>
  <backtop :showicon='flag'></backtop>
 </div>
</template>

<script>
import headbar from './components/headbar'
import navagation from './components/navagation'
import lv from './components/listview'
import menul from './components/menu'
import showgoods from './components/showgoods'
import backtop from './components/backtop'



 export default {
   name: 'home',
   data () {
     return {
       flag:false
     }
   },
   components: {
     headbar,
     navagation,
     lv,
     menul,
     showgoods,
     backtop
   },
   methods: {
     change(){
       this.flag =true
       console.log('e')
     },
     getScroll(){
      if (window.scrollY>0){
      this.flag =true
      }
     else {
      this.flag =false
      }
     }
    },
    mounted() {
        window.addEventListener('scroll', this.getScroll);
        // console.log('监听事件')
    },
    destroyed(){
        window.removeEventListener('scroll', this.getScroll);
        // console.log('移除事件')
    },
 }
</script>

<style scoped>
#home{
  background: #f6f6f6;
}

</style>
