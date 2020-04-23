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
            <img src="" alt="" class="arrow">
          </div>
        </div>
        <div class="topthree"></div>
        <div class="rankList"></div>
      </div>
  </div>
</template>

<script>

export default {
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
