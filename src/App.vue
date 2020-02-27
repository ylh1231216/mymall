<template>
  <div id="app">
  <keep-alive exclude="detail"><router-view></router-view></keep-alive>
  <!-- <tabbatmenu :display='tabstau'></tabbatmenu>   -->
  </div>
</template>

<style>
@import './assets/css/base.css';

</style>

<script>
// import tabbatmenu from './components/content/tabbatmenu'
export default {
  name:'app',
  data() {
    return {
     
    }
  },
  components:{
    // tabbatmenu
  },
  methods: {
   
  },
}
</script>