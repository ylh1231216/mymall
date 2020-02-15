<template>
  <div class='menu1'>
      <a  v-for='item in menudata' :key='item.id' class="menu-item" href='#'>
        <img :src="item.src">
        <span>{{item.name}}</span>
      </a>
  </div>
  
</template>

<style scoped>
    .menu1{
      display: flex;
      font-size:12px;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: center;
      /* margin: 0 12px; */
      background: #f6f6f6;
    }
    a {
      margin: 10px 10px;
      text-decoration:none;
      color:#666666;
    }
    .menu-item img{
      display: block;
      width: 40px;
      height: 40px;
      margin:5px; 
      
    }
</style>

<script>

export default {
  name:'menu1',
  components:{
    
  },
  data() {
    return {
      menudata:[
      {id:1,name:'京东超市',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png"},
      {id:2,name:'数码电器',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png"},
      {id:3,name:'京东服饰',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png"}, 
      {id:4,name:'京东生鲜',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png"}, 
      {id:5,name:'京东到家',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png"}, 
      {id:6,name:'充值缴费',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png"}, 
      {id:7,name:'9.9元拼',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png"}, 
      {id:8,name:'领券',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png"},
      {id:9,name:'借钱',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png"}, 
      {id:10,name:'全部',src:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png"}    
    ]
  }
  }
}
</script>