<template>
  <div class="lv">
    <!-- <span class="demonstration">Click 指示器触发</span> -->
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="src in imgsrc" :key="src.id">
       <a href="#"><img :src='src.src'></a>
        </el-carousel-item>
    </el-carousel>
    <img id='ig2' :src="src1">
    <img id='ig2' :src="src2">
    <img id='ig2' :src="src3">
  </div>

  
</template>

<style scoped>
   .lv{
       text-align: center;
       /* background-color: green; */
   }
   .el-carousel{
       margin-bottom:4px; 
   }
   img{
       width: 100%;
       height: 100%;
   }
   #ig2{
    width: 33.33%;
   }

</style>

<script>

export default {
  name:'lv',
  components:{
    
  },
  data() {
      return {
          imgsrc:[
          {
              id:1,    
              src:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/104172/2/11732/137013/5e3bf50eEd6629f9c/9f7abb6e3eb16690.jpg!cr_1125x445_0_171!q70.jpg.dpg'
          },
          {
              id:2,
              src:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/87358/35/11810/200414/5e3d2ec5E288c23ea/80618e87aaeb1058.jpg!cr_1125x445_0_171!q70.jpg.dpg'
          },
          {
              id:3,
              src:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/104317/14/11785/97705/5e3d1762Eb40e9f56/8311074b2ae7c32e.jpg!cr_1125x445_0_171!q70.jpg.dpg'
          },
          {
              id:4,
              src:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/102453/24/11839/137603/5e3bb6deEe9817ddd/33ebec0fb663342c.jpg!cr_1125x445_0_171!q70.jpg.dpg'
          }
          ],
          src1:'//m.360buyimg.com/mobilecms/s250x200_jfs/t1/97456/25/11557/80411/5e38f2b6Ec4b3e7ba/3ef804db52cf8bc2.jpg!q70.jpg.dpg',
          src2:'//m.360buyimg.com/mobilecms/s250x200_jfs/t1/90168/28/11657/81077/5e38f2f1E40941e23/2c09c4d657887b06.jpg!q70.jpg.dpg',
          src3:'//m.360buyimg.com/mobilecms/s250x200_jfs/t1/100968/12/11540/79833/5e38f336Eab7b4602/6bcd12cc44305613.jpg!q70.jpg.dpg'
      }
  
  
  },

}
</script>

