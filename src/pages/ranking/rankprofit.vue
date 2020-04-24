<template>
  <div id="rankprofit" class="ranking">
      <div class="top">
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-rank.png" alt="" class="img">
            <p>我的排名</p>
          </dt>
          <dd>128</dd>
        </dl>
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-money.png" alt="" class="img">
            <p>当前盈利</p>
          </dt>
          <dd>0</dd>
        </dl>
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-award.png" alt="" class="img">
            <p>我的奖励</p>
            <img src="@/assets/images/rank/icon-qua.png" alt="" class="icon">
          </dt>
          <dd class="null">暂无奖励</dd>
        </dl>
      </div>
      <div class="time">
        <p>榜单每天<span>13点，21点</span>更新</p>
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
                <img src="@/assets/images/common/avatar01.png" alt="" class="image">
              </div>
            </dt>
            <dd>带明星</dd>
            <dd>1235000</dd>
            <dd>780元礼包</dd>
          </dl>
          <dl class="first rankitem">
            <dt>
              <div class="imgWrap">
                <img src="@/assets/images/rank/rank-first.png" alt="" class="imgBorder">
                <img src="@/assets/images/common/avatar02.png" alt="" class="image">
              </div>
            </dt>
            <dd>罗罗诺亚JKT</dd>
            <dd>88800000</dd>
            <dd>999元礼包</dd>
          </dl>
          <dl class="third rankitem">
            <dt>
              <div class="imgWrap">
                <img src="@/assets/images/rank/rank-third.png" alt="" class="imgBorder">
              <img src="@/assets/images/common/avatar03.png" alt="" class="image">
              </div>
            </dt>
            <dd>带明星</dd>
            <dd>5124563</dd>
            <dd>780元礼包</dd>
          </dl>
        </div>
        <div class="rankList">
          <RankProfitList></RankProfitList>
        </div>
      </div>
  </div>
</template>

<script>
import RankProfitList from '@/pages/ranking/rankProfitList'
export default {
  components:{
    RankProfitList
  },
  name: 'App',
  data(){
    return{}
  },
  created(){
  }

}
</script>

<style lang="less" scoped>

</style>
