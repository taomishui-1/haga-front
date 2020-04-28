<template>
  <div class="rankList">
    <table border="1">
      <tr>
        <th>排名</th>
        <th>等级达人</th>
        <th>等级</th>
        <th>奖励</th>
      </tr>
      <tr v-for="(item) of showList" :key="item.id">
        <td>{{item.rankNo}}</td>
        <td class="name">
          <img :src="item.avatar" alt="">
          <p>{{item.nickname}}</p>
        </td>
        <td>Lv.{{item.level}}</td>
        <td>{{item.prizeName?item.prizeName:'——'}}</td>
      </tr>
      <tr v-if="!flag" @click="lookAllList()">
        <td colspan="4"  class="lookAllButton"><p>点击打开完整榜单</p><img src="@/assets/images/rank/arrow-bottom.png"/></td>
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
    <div class="lookAllButton packup" @click="packAllList()" v-if="flag">
      <p>点击收起完整榜单</p>
      <img src="@/assets/images/rank/arrow-bottom.png" alt="">
    </div>
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
      showList:[]
    }
  },
  created(){
    console.log('creat',this.list)
    this.lastShow()
    
  },
  mounted(){
    if(($jq('table').children().length)%2==0){
      this.lastTrShow=false
    }else{
      this.lastTrShow=true
    }
    window.addEventListener('scroll',function(){
      // console.log($jq('.rankList').scrollTop())
    },true)
  },
  methods:{
    lookAllList(){
      this.flag=true
      this.lastShow()
    },
    packAllList(){
      this.flag=false
      this.lastShow()
    },
    lastShow(){
      if(($jq('table').children().length)%2==0){
        this.lastTrShow=true
      }else{
        this.lastTrShow=false
      }
      if(!this.flag){
      this.showList=this.list.slice(0,3)
    }else{
      this.showList=this.list
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
