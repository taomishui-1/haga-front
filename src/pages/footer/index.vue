<template>
  <div id="footer">
      <ul>
          <li>
              <img src="@/images/icons/footer1.png" alt="">
              <p>游戏</p>
          </li>
          <li>
              <img src="@/images/icons/footer1.png" alt="">
              <p>任务</p>
          </li>
          <li>
              <img src="@/images/icons/footer1.png" alt="">
              <p>领奖</p>
          </li>
          <li>
              <img src="@/images/icons/footer1.png" alt="">
              <p>我的</p>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="less" scoped>
// @import '@/styles/main.less';
#footer{
    height: 6.75rem /* 108/16 */;
    width:100%;
    background: violet;
    ul{
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        li{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width:auto;
                height: 2.75rem /* 44/16 */;
            }
            p{
                font-size: 1.25rem /* 20/16 */;
                height: 1.25rem /* 20/16 */;
                // line-height: 2.125rem /* 34/16 */;
                margin-top:.75rem /* 12/16 */;
            }
        }
    }
}
</style>
