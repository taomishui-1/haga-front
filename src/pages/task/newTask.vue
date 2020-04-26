<template>
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
      <li v-for="(item,index) of taskList" :key="index">
        <img :src="item.gameImg" alt class="gameImg" />
        <div class="content">
          <span class="taskName">{{item.taskName}}</span>
          <div class="bottom">
            <div class="gameProgress">
              <div class="progress" :style="{width:item.pro}"></div>
              <span class="progressText">1/4</span>
            </div>
            <div class="telcharge">
              <img src="@/assets/images/task/money.png" alt />
              <span>0.5元话费</span>
            </div>
          </div>
        </div>
        <div class="button">
          <button class="receive" v-if="item.status==1">领取</button>
          <button class="tofinish" v-else-if="item.status==2">去完成</button>
          <button class="hasreceive" v-else-if="item.status==3">已领取</button>
        </div>
      </li>
      <li></li>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      taskList: [
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩15局连消",
          status: 1,
          pro:'0%'
        },
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩15局连消",
          status: 1,
          pro:'25%'
        },
        {
          gameImg: require("@/assets/images/task/game02.png"),
          taskName: "玩15局连消",
          status: 2,
          pro:'25%'
        },
        {
          gameImg: require("@/assets/images/task/game02.png"),
          taskName: "玩15局连消",
          status: 2,
          pro:'50%'
        },
        {
          gameImg: require("@/assets/images/task/game02.png"),
          taskName: "玩15局连消",
          status: 2,
          pro:'75%'
        },
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩15局连消",
          status: 3,
          pro:'100%'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.newtask {
  padding: 0 1.75rem /* 28/16 */;
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
      box-sizing: border-box;
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

}
</style>
