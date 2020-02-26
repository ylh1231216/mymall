<template>
  <div class='catelist' :style="{height:iheight+'px'}">
     <ul class="leftbar" :style="{height:iheight+'px'}">
         <li v-for='item in clist' :key="item.id" :class="{act:clickpage===item.id}" @click="change">
             {{item.listname}}
         </li>
     </ul>
     <div class='content' :style="{height:iheight+'px'}">
         <h2 v-for='item2 in clist[clickpage-1].subtitle' :key="item2.id">
             {{item2.subname}}
             <div  class='itemlist'>
                 <a v-for='(item3,index) in item2.src' :key="index">
                     <img :src="item3.itemsrc">
                     <span>{{item3.itemname}}</span>
                 </a>
             </div>
         </h2>
    
     </div>
  </div>
  
</template>

<style scoped>
   .leftbar{
   float: left;
   list-style-type: none;
   margin: 0;
   padding: 0 15px 0 15px;
   background: rgb(241, 239, 239);
   width: 70px;
   /* height: 650px; */
   overflow: scroll;
   }
   .leftbar>li{
       font-size: 15px;
       margin: 30px 0;
       text-align: center;
    }
    .leftbar :first-child{
        margin: 15px 0;
    }
    .content{
    background: white;
    /* height: 650px; */
    overflow:scroll;
    }
    .content>h2{
        font-size:20px;
        margin-left: 10px;
    }
    .act{
        color: red
    }
    .itemlist{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        text-align: center;
    }
    .itemlist a{
       text-decoration: none;
       font: 12px sans-serif;
       color:#000000;
       width: 33%;
       margin: 10px 0
    }
    .itemlist img{
        display: block;
        width: 60px;
        margin: 0 auto;
    }
    

</style>

<script>
import clist from '../../../assets/goodinfo'
import wheight from  '../../../assets/windowinfo'

export default {
  name:'catelist',
  methods: {
      change(e){
          for(var i of this.clist)  {
              var a =e.currentTarget.innerHTML
              a=a.split("")
              a.pop()
              a.shift()
              a=a.join('')
            //   console.log(a)
            //   console.log(i.listname===a)
              if(i.listname===a){
                  this.clickpage =i.id
                //   console.log(document.documentElement.clientHeight)
                  break
              }
          }
      }
  },
  data(){
      return{
       clickpage:1,
       clist:clist
      }
  },
  computed: {
      iheight(){
          return wheight-105
    }
  },
  components:{
    
  },
 
  
}
</script>