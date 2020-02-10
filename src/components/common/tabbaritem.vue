<template>
 <div class ='tab_bar_items' @click="change()">
  <div v-if="!isactive"><slot name="item_icon"></slot></div>
  <div v-else><slot name="item_icon_active"></slot></div>
  <div :style="activestyle"><slot name="item_text"></slot></div>
 </div>
</template>

<script>
 export default {
   name: 'tabbaritem',
   data () {
     return {
        //  isactive:true
        
     }
   },
   computed:{
       isactive(){
         return this.$route.path.indexOf(this.path) !== -1
       },
       activestyle(){
         return this.isactive ? {color:this.activecolor}:{}  
   }
   },
   props:{
       path:String,
       activecolor:{
           type:String,
           default:'red'
       }
   },
   methods: {
       change(){
           this.$router.push(this.path)
       }
   },
   components: {

   }
 }
 
</script>

<style scoped>
.tab_bar_items{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_items img{
    height: 18px;
    width: 18px;
    margin-top:3px;
}


 
</style>
