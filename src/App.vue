<template>
  <div id="app">
  <keep-alive exclude="detail"><router-view @tabshow='showtab' @tabnotshow='notshowtab'></router-view></keep-alive>
  <tabbatmenu :display='tabstau'></tabbatmenu>  
  </div>
</template>

<style>
@import './assets/css/base.css';

</style>

<script>
import tabbatmenu from './components/content/tabbatmenu'
export default {
  name:'app',
  data() {
    return {
      tabstau:true
    }
  },
  components:{
    tabbatmenu
  },
  methods: {
    showtab(){
      this.tabstau = true
      // console.log('接收show')
    },
    notshowtab(){
      this.tabstau = false
      // console.log('接收notshow')
    }
  },
}
</script>