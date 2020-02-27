<template>
  <div class='showgoods'>
    <div class='headline'><img :src="src1"></div>
    <div class='content'>
    <div class='contentloop' v-for="item in imgsrc" :key='item.id'>
      <a @click="todetail(item.id)">
      <img :src="item.src" >
      <p>{{item.text}}</p>
      <span>{{'￥'+item.price}}</span>
      <span id="sp">{{item.list}}</span>
      </a>
      <i class='el-icon-shopping-cart-2 sz' @click="additem(item.id)"></i>
    </div>
    <!-- <input type="button" value="更多推荐" class="bt" @click="add"> -->
    </div>
     
  </div>
  
</template>

<style scoped>
    .showgoods{
    margin: 0 10px;
    /* background:white; */
    }
    .headline img{
     width: 100%;
    }
    .content{
      display:flex;
      flex-wrap: wrap; 
      font-size:13px;
      color: black;
    }
    .content a{
      text-decoration: none;
    }
    /* .contentloop {
    
    }
     */
    .contentloop {
      width:48%;
      margin-bottom: 15px;
      margin-left: 1%;
      margin-right:1%;
    }
    .contentloop img {
      width:100%;
    }
    .contentloop span {
      font-size: 13px;
      font-weight: bold;
      color: red;
      margin-right:10px;
    }
    #sp{
      border: 1px solid red;
      font-size: 8px;
    }
    .sz{
      font-size: 1.5em;
      float: right;
      margin-right:10px; 
    }
    .contentloop p {
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
    }
    /* .bt{
      position: fixed;
      top: 88.8%;
      left: 40%;
      z-index: 10;
    } */
    
    
</style>

<script>
import imgsrc from '../../../assets/imgsrc'

export default {
  name:'showgoods',
  components:{
    
  },
  data() {
    return {
      y:0,
      count:0,
      step:600,
      src1:'//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png',
      imgsrc:imgsrc
    }
   },
    activated() {
        window.addEventListener('scroll', this.getScroll);
        // console.log('监听事件2');
        window.scrollBy(0,this.y)
        // console.log(this.y);
        
    },
    deactivated(){
        window.removeEventListener('scroll', this.getScroll);
        // console.log('移除事件2')
        // console.log(this.y)
    },
   methods:{
     getScroll(){
      //  console.log(window.scrollY)
      this.y = window.scrollY
      // console.log("y:"+this.y)
      if(window.scrollY>this.step){
      this.step=this.step+246.898
      this.imgsrc.push(
         {
           id:this.imgsrc.length+1,
           text:this.imgsrc[this.count].text,
           price:this.imgsrc[this.count].price,
           list:this.imgsrc[this.count].list,
           src:this.imgsrc[this.count].src,
           count: 1,
           stats: false
         },
         {
           id:this.imgsrc.length+2,
           text:this.imgsrc[this.count+1].text,
           price:this.imgsrc[this.count+1].price,
           list:this.imgsrc[this.count+1].list,
           src:this.imgsrc[this.count+1].src,
           count: 1,
           stats: false
         }
       )
       this.count =this.count+2
       if(this.count==6){
         this.count=0
       }
      }     
     },
     todetail(iid){
      //  console.log(iid)
       this.$router.push('/detail/'+iid)
     },
     additem(iid){
      //  console.log(iid)
        var iteminfo ={
        id:0+iid,
        text: this.imgsrc[iid-1].text,
        price: this.imgsrc[iid-1].price,
        list: this.imgsrc[iid-1].list,
        src: this.imgsrc[iid-1].src,
        count:this.imgsrc[iid-1].count,
        stats: this.imgsrc[iid-1].stats
       }
       this.$store.commit('additem',iteminfo)
     }
    
   }
  }

</script>