<template>
  <div id="ranklevel" class="ranking">
      <div class="top">
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-rank.png" alt="" class="img">
            <p>我的排名</p>
          </dt>
          <dd>1</dd>
        </dl>
        <dl>
          <dt>
            <img src="@/assets/images/rank/icon-level.png" alt="" class="img">
            <p>当前等级</p>
          </dt>
          <dd>50.01</dd>
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
        <p>每日21:00发榜，奖励限<span>24小时内</span>领取</p>
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
