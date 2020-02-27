<template>
  <div class='nvg'>
      <span class='left'>
         <i class="headbar-left el-icon-arrow-left" @click="back"></i>
      </span>
      <span class='center'>
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend"> <i class="el-icon-goods"></i></template>
            <i class="el-icon-goods"></i>
          </el-input>
      </span>
      <span class='right'>
          <i class="el-icon-user" @click="routerto('my')"></i>
      </span>
  </div>
  
</template>

<style scoped>
    .nvg{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color:brown;
        display: flex;
        text-align: center;
        font-size: 1.5em;
        /* padding:2px 0px */
        position: sticky;
        top: 0px;
        z-index: 10;
        
    }
    .left{
        flex:1;
    }
    .center{
        flex:7;
        line-height: 40px;
    }
     .right{
        flex:1;
    }

</style>

<script>

export default {
  name:'navagation',
  components:{
    
  },
  data() {
      return {
          input1:'商品搜索'
      }
  },
 methods: {
      routerto(a){
          this.$router.push('./'+a)
      },
      back(){
          this.$router.go(-1)
      }
  }
}
</script>