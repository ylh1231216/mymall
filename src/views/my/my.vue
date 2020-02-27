<template>
 <div class="my" :style="{height:iheight+'px'}">
   <form :style="{marginTop:iheight/3+'px'}">
   <input type="text" name='id' placeholder="请输入用户名" >
   <input type="password" name='psw' placeholder="请输入密码" >
   <input type="submit" value='登录' >
   </form>
   <tabbatmenu></tabbatmenu>
 </div>
</template>

<script>
import tabbatmenu from '../../components/content/tabbatmenu'
import windowinfo from '../../assets/windowinfo'
 export default {
   name: 'my',
   data () {
     return {

     }
   },
   computed: {
     iheight(){
       return windowinfo
     }
   },
   methods: {
     
   },
   components: {
    tabbatmenu
   }
 }
</script>

<style scoped>
.my{
  text-align: center;
  opacity: 1;
  /* height: 700px; */
  background-image: linear-gradient(#e66465, #9198e5); 
  overflow: hidden;
}
.my form{
  /* margin-top:250px; */
  width: 300px;
  margin-left:auto; 
  margin-right:auto; 
}
.my input{
  outline: none;
  border:none;
  border-bottom:2px solid gray;
  opacity: 0.8;
  display: block;
  color: black;
  width: 300px;
  margin-bottom: 10px;
  /* margin-left: 60px; */
  font-size:20px;
}

 
</style>
