<template>
  <div class="rankList">
    <table border="1">
      <tr>
        <th>排名</th>
        <th>等级达人</th>
        <th>等级</th>
        <th>奖励</th>
      </tr>
      <tr v-for="(item) of list" :key="item.id">
        <td>{{item.rankNo}}</td>
        <td class="name">
          <img :src="item.avatar" alt="">
          <p>{{item.nickname}}</p>
        </td>
        <td>Lv.{{item.level}}</td>
        <td>{{item.prizeName?item.prizeName:'——'}}</td>
      </tr>
      <tr v-if="!flag" @click="lookAllList()">
        <td colspan="4">点击打开完整榜单</td>
      </tr>
      <tr v-for="(item,index) of List3" :key="index+1000"  v-else>
        <td>4</td>
        <td class="name">
          <img src="@/assets/images/common/avatar06.png" alt="">
          <p>JK0123345</p>
        </td>
        <td>Lv.48</td>
        <td>640元礼包</td>
      </tr>
      <tr v-for="(item) of bottom3" :key="item.id">
        <td>{{item.rankNo}}</td>
        <td class="name">
          <img :src="item.avatar" alt="">
          <p>{{item.nickname}}</p>
        </td>
        <td>Lv.{{item.level}}</td>
        <td>{{item.prizeName?item.prizeName:'——'}}</td>
      </tr>
      <tr v-show="lastTrShow"></tr>
    </table>
    <div class="bottom">
    </div>
  </div>

</template>

<script>
import $jq from 'jquery'

export default {
  name: 'App',
  props:{
    list:{
      type:Array
    },
    bottom3:{
      type:Array
    }
  },
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
  img{
    width:100%;
    height: auto;
  }
}
</style>
