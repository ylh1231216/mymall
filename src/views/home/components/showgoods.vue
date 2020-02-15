<template>
  <div class='showgoods'>
    <div class='headline'><img :src="src1"></div>
    <div class='content'>
    <div class='contentloop' v-for="item in imgsrc" :key='item.id'>
      <a>
      <img :src="item.src" >
      <p>{{item.text}}</p>
      <span>{{'￥'+item.price}}</span>
      <span id="sp">{{item.list}}</span>
      <i class='el-icon-shopping-cart-2 sz'></i>
      </a>
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

export default {
  name:'showgoods',
  components:{
    
  },
  data() {
    return {
      count:0,
      step:600,
      src1:'//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png',
      imgsrc:[
        {
        id:1,
        text:'GILLIVO嘉里奥2020简约马鞍半圆包真皮简约复古斜挎包气质潮流单肩手提女包 拼蓝',
        price:847,
        list:'新品',
        src:'//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/110067/10/6082/167638/5e478513E42c0f1ca/10c42cf367032303.jpg'
        },
        {
        id:2,
        text:'MANRYAN曼瑞 罗马「一生一世」婚戒情侣铂金戒指钻石白金对戒结婚钻戒 【18K玫瑰金一对】支持邮寄海外，其他尺寸可定制',
        price:4928,
        list:'满减',
        src:'//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/30997/29/5798/188797/5c887d13Eb854b1e5/6ab74267094d2a71.jpg'
        },
         {
        id:3,
        text:'周百福 钻戒/白18K金钻石戒指女铂金求婚结婚戒指订婚裸钻定制钻戒1克拉/玫瑰之心 【限量特价】10分I-J色/SI 30分效果',
        price:1399,
        list:'新品',
        src:'//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/109224/24/6177/158967/5e4748faEfdbdf2d5/d2c8740f1b9e1edb.jpg'
        },
        {
        id:4,
        text:'【专柜正品 快递秒送】迪奥（Dior）香水女士真我花漾甜心小姐漫舞女士香氛淡香 香水小样套装 5毫升 （红色) 小样 三件套',
        price:99,
        list:'活动',
        src:'//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/108142/15/3486/125546/5e11bdc4E5f2a0a6f/bd203575ee9bebbc.jpg'
        },
        {
        id:5,
        text:'任天堂（Nintendo）Switch 游戏机健身环大冒险NS掌上游戏机便携任天堂switch游戏卡 限定版精灵宝可梦 妖精口袋去吧皮卡丘（含精灵球）',
        price:499,
        list:'新品',
        src:'//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/82472/36/1062/94755/5cf4806cEc74325bf/af941f4865d0432a.jpg'
        },
        {
        id:6,
        text:'三只松鼠 坚果礼盒 休闲零食干果大礼包红黄款 每日坚果混合组合 春节年货礼盒 坚果礼1373g(7袋)',
        price:158,
        list:'满减',
        src:'//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/66321/6/13972/209885/5db6b238E3b317d2e/ba46cddd9e914730.png'
        }
      ]
    }
   },
    mounted() {
        window.addEventListener('scroll', this.getScroll);
        // console.log('监听事件2')
    },
    destroyed(){
        window.removeEventListener('scroll', this.getScroll);
        // console.log('移除事件2')
    },
   methods:{
     getScroll(){
       console.log(window.scrollY)
      if(window.scrollY>this.step){
      this.step=this.step+246.898
      this.imgsrc.push(
         {
           id:this.imgsrc.length+1,
           text:this.imgsrc[this.count].text,
           price:this.imgsrc[this.count].price,
           list:this.imgsrc[this.count].list,
           src:this.imgsrc[this.count].src
         },
         {
           id:this.imgsrc.length+2,
           text:this.imgsrc[this.count+1].text,
           price:this.imgsrc[this.count+1].price,
           list:this.imgsrc[this.count+1].list,
           src:this.imgsrc[this.count+1].src
         }
       )
       this.count =this.count+2
       if(this.count==6){
         this.count=1
       }
      }     
     },
    //  add(){
    //    this.imgsrc.push(
    //      {
    //        id:this.imgsrc.length+1,
    //        text:this.imgsrc[this.count].text,
    //        price:this.imgsrc[this.count].price,
    //        list:this.imgsrc[this.count].list,
    //        src:this.imgsrc[this.count].src
    //      },
    //      {
    //        id:this.imgsrc.length+2,
    //        text:this.imgsrc[this.count+1].text,
    //        price:this.imgsrc[this.count+1].price,
    //        list:this.imgsrc[this.count+1].list,
    //        src:this.imgsrc[this.count+1].src
    //      }
    //    )
    //    this.count =this.count+2
    //    if(this.count==6){
    //      this.count=1
    //    }
    // }
   }
  }

</script>