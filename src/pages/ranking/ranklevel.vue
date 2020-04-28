<template>
  <div id="ranklevel" class="ranking">
      <div class="top">
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-rank.png" alt="" class="img">
            <p>我的排名</p>
          </dt>
          <dd>{{meInfo.rankNo}}</dd>
        </dl>
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-level.png" alt="" class="img">
            <p>当前等级</p>
          </dt>
          <dd>{{meInfo.level}}</dd>
        </dl>
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-award.png" alt="" class="img">
            <p>我的奖励</p>
            <img src="@/assets/images/rank/icon-qua.png" alt="" class="icon">
          </dt>
          <dd v-if="meInfo.prizeName">{{meInfo.prizeName}}</dd>
          <dd class="null" v-else>暂无奖励</dd>
        </dl>
      </div>
      <div class="time">
        <p>每日21:00发榜，奖励限<span>24小时内</span>领取</p>
      </div>
      <div class="rankWrap">
        <div class="title">
          <h3>本期榜单</h3>
          <div class="countdown">
            结算倒计时 07:33:28
          </div>
          <div class="oldRanking">
            <p>上期榜单</p>
            <img src="@/assets/images/rank/arrow-right.png" alt="" class="arrow">
          </div>
        </div>
        <div class="topthree">
          <dl class="second rankitem">
            <dt>
              <div class="imgWrap">
                <img src="@/assets/images/rank/rank-second.png" alt="" class="imgBorder">
                <img :src="top3[1].avatar?top3[1].avatar:''" alt="" class="image">
              </div>
            </dt>
            <dd>{{top3[1].nickname}}</dd>
            <dd>Lv.{{top3[1].level}}</dd>
            <dd>{{top3[1].prizeName}}</dd>
          </dl>
          <dl class="first rankitem">
            <dt>
              <div class="imgWrap">
                <img src="@/assets/images/rank/rank-first.png" alt="" class="imgBorder">
                <img :src="top3[0].avatar?top3[0].avatar:''" alt="" class="image">
              </div>
            </dt>
            <dd>{{top3[0].nickname}}</dd>
            <dd>Lv.{{top3[0].level}}</dd>
            <dd>{{top3[0].prizeName}}</dd>
          </dl>
          <dl class="third rankitem">
            <dt>
              <div class="imgWrap">
                <img src="@/assets/images/rank/rank-third.png" alt="" class="imgBorder">
              <img :src="top3[2].avatar?top3[2].avatar:''" alt="" class="image">
              </div>
            </dt>
            <dd>{{top3[2].nickname}}</dd>
            <dd>Lv.{{top3[2].level}}</dd>
            <dd>{{top3[2].prizeName}}</dd>
          </dl>
        </div>
        <div class="rankList">
          <RankLevelList :bottom3="bottom3" :list="list"></RankLevelList>
        </div>
      </div>
  </div>
</template>

<script>
import RankLevelList from '@/pages/ranking/rankLevelList'
import {Level} from '@/api'
export default {
  components:{
    RankLevelList
  },
  name: 'App',
  data(){
    return{
      page:1,
      pageSize:100,
      bottom3:[],
      top3:[],
      meInfo:{}
    }
  },
  created(){
    // 
    var params={
      page:this.page,
      pageSize:this.pageSize
    }
    Level.fetchCurrent(params).then(res=>{
      console.log(res,"rank")
      if(res.data.errcode==200){
        this.meInfo=res.data.data.me
        this.bottom3=res.data.data.bottom3
        this.top3=res.data.data.top3
        this.list=res.data.data.list
      }
    })
    // 等级规则：
    Level.fetchRules().then(res=>{
      console.log('data--',res)
    })
  }

}
</script>

<style lang="less" scoped>

</style>
