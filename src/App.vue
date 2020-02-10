<template>
  <div id="app">
  <router-view></router-view>
  <tabbatmenu/>
  </div>
</template>

<style>
@import './assets/css/base.css';

</style>

<script>
import tabbatmenu from './components/content/tabbatmenu'
export default {
  name:'app',
  components:{
    tabbatmenu
  }
}
</script>