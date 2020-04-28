<template>
  <div id="link">
    <div class="content">
      <img class="weixin" src="@/assets/images/link/weixin.png" />
      <img class="qr" src="@/assets/images/link/qr.png" />
      <img class="copy" src="@/assets/images/link/copy.png" />
      <img class="online" src="@/assets/images/link/online.png" />
      <img class="time" src="@/assets/images/link/time.png" />
    </div>
    <div class="bottom">
      <p>请认准官方唯一微信公众号【口袋游戏】</p> 
      <p>谨防上当受骗</p>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
#link{
  height: 100%;
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .weixin{
      height: 3.125rem /* 50/16 */;
      margin-top:2.5rem /* 40/16 */;
    }
    .qr{
      width: 22.5rem /* 360/16 */;
      margin-top:1.75rem /* 28/16 */;
    }
    .copy,.online{
      width:17.1875rem /* 275/16 */;
      margin-top:2rem /* 32/16 */;
    }
    .time{
      width:31.25rem /* 500/16 */;
    }
  }
  .bottom{
    position: fixed;
    bottom:1rem;
    left:0;
    right: 0;
    margin:0 auto;
    p{
      font-size: 1.5rem /* 24/16 */;
      line-height: 2.25rem /* 36/16 */;
      font-weight: 900;
      
    }
  }
}
</style>