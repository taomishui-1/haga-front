<template>
  <div id="task">
    <div class="header">
      <Amount></Amount>
      <BillAmount></BillAmount>
      <Message></Message>
    </div>
    <div class="newtask">
      <div class="banner">
        <div class="imgWrap">
          <img src="@/assets/images/task/banner.png" alt />
        </div>
        <div class="taskprogress">
          <div class="title">
            <span>完成全部 再得2元话费</span>
          </div>
          <div class="tar">
            <!-- <div class="tarBg">
              
            </div>-->
            <div class="rate"></div>
          </div>
          <div class="progress">
            <span>1/6</span>
          </div>
        </div>
      </div>
      <div class="taskList">

      </div>
    </div>
  </div>
</template>

<script>
import Amount from "@/pages/header/amount.vue";
import BillAmount from "@/pages/header/billAmount.vue";
import Message from "@/pages/header/message.vue";
export default {
  components: {
    Amount,
    BillAmount,
    Message
  },
  name: "App"
};
</script>

<style lang="less" scoped>
#task {
  padding: 0 1.75rem /* 28/16 */;
}
.header {
  .amountWrap {
    transform: scale(1.15);
    margin-right: 4rem;
  }
}
.newtask {
  .banner {
    width: 100%;
    position: relative;
    .imgWrap {
      width: 100%;
      img {
        width: 100%;
        // height: 16.4375rem /* 263/16 */;
      }
    }
    .taskprogress {
      height: 6.75rem /* 108/16 */;
      width: 100%;
      padding: 0 2.5rem /* 40/16 */ 0 2rem /* 32/16 */;
      position: absolute;
      bottom: 2rem;
      text-align: left;
      .title {
        text-align: left;
        span {
          color: #c19673;
          font-size: 1.375rem /* 22/16 */;
        }
      }
      .tar {
        height: 1.5rem /* 24/16 */;
        width: 100%;
        background: #a27f60;
        border-radius: 0.75rem /* 12/16 */;
        position: relative;
        margin: 1.25rem /* 20/16 */ 0;
        overflow: hidden;
        .rate {
          width: 18%;
          height: 100%;
          border-radius: 0.75rem /* 12/16 */;
          background: #f98532;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .progress {
        span {
          color: #8c694e;
          font-size: 1.375rem /* 22/16 */;
        }
      }
    }
  }
  .taskList{
    background: yellow;
    margin-top:2.125rem /* 34/16 */;
  }
}
</style>
