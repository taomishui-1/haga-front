<template>
  <div class="rankList">
    <table border="1">
      <tr>
        <th>排名</th>
        <th>盈利达人</th>
        <th>盈利</th>
        <th>奖励</th>
      </tr>
      <tr v-for="(item,index) of List1" :key="index+10">
        <td>4</td>
        <td class="name clearfix">
          <img src="@/assets/images/common/avatar03.png" alt="">
          <p>JK0123345</p>
        </td>
        <td>119000</td>
        <td>150京东券</td>
      </tr>
      <tr v-if="!flag" @click="lookAllList()">
        <td colspan="4">点击打开完整榜单</td>
      </tr>
      <tr v-for="(item,index) of List2" :key="index+100" v-else>
        <td>4</td>
        <td class="name">
          <img src="@/assets/images/common/avatar03.png" alt="">
          <p>JK0123345</p>
        </td>
        <td>119000</td>
        <td>150京东券</td>
      </tr>
      <tr v-for="(item,index) of List3" :key="index+1000">
        <td>4</td>
        <td class="name">
          <img src="@/assets/images/common/avatar03.png" alt="">
          <p>JK0123345</p>
        </td>
        <td>119000</td>
        <td>150京东券</td>
      </tr>
      <tr v-show="lastTrShow"></tr>
    </table>
    <div class="bottom">
      <img src="@/assets/images/rank/bottom.png" alt="" class="img">
      <div class="content">
        <img src="@/assets/images/rank/arrow-double-left.png" alt="" class="left leftMove">
        <img src="@/assets/images/rank/bottom-text.png" alt="" class="text pulse">
        <img src="@/assets/images/rank/arrow-double-right.png" alt="" class="right rightMove">
      </div>
    </div>
  </div>

</template>

<script>
import $jq from 'jquery'

export default {
  name: 'App',
  data(){
    return{
      List1:[1,2,3],
      List2:[1,2,3,5,6,7],
      List3:[1,2,3],
      flag:false,
      lastTrShow:true,
    }
  },
  created(){
    
  },
  mounted(){
    if(($jq('table').children().length)%2==0){
      this.lastTrShow=false
    }else{
      this.lastTrShow=true
    }
  },
  methods:{
    lookAllList(){
      this.flag=true
      if(($jq('table').children().length)%2==0){
        this.lastTrShow=true
      }else{
        this.lastTrShow=false
      }
    }
  }

}
</script>

<style lang="less" scoped>

.bottom{
  position: fixed;
  bottom:0;
  left:0;
  height: 7.5rem /* 120/16 */;
  width:100%;
  .img{
    width:100%;
    height: auto;
    position: absolute;
    top:0;
    left:0;
    // z-index:1;
  }
  .content{
    display: flex;
    position: absolute;
    width:100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    .text{
      height: 2.25rem /* 36/16 */;
      margin: 0 2rem;
    }
    .left{
      
    }
    .left,.right{
      width:2.5rem /* 40/16 */;
    }
  }
}
</style>
