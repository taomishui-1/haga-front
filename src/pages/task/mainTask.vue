<template>
  <div class="mainTask clearfix">
    <h2 class="title">主线任务</h2>
    <div class="games">
      <!-- 快乐连消 -->
      <div class="game">
        <h3 class="title">快乐连消</h3>
        <ul class="taskList" id="lianxiao">
          <li v-for="(item,index) of gameTaskList" :key="index">
            <img src="@/assets/images/task/game-lianxiao.png" alt class="gameImg" />
            <div class="content">
              <span class="taskName">玩15局快乐连消</span>
              <div class="bottom">
                <div class="gameProgress">
                  <div class="progress" style="width:75%"></div>
                  <span class="progressText">1/4</span>
                </div>
                <div class="telcharge">
                  <img src="@/assets/images/task/money.png" alt />
                  <span>0.5元话费</span>
                </div>
              </div>
            </div>
            <div class="button">
              <button class="receive">领取</button>
            </div>
          </li>
        </ul>
      </div>
      <!-- 梦想桌球 -->
      <div class="game">
        <h3 class="title">梦想桌球</h3>
        <ul class="taskList" id="zhuoqiu">
          <li v-for="(item,index) of gameTaskList" :key="index">
            <img src="@/assets/images/task/game-zhuoqiu.png" alt class="gameImg" />
            <div class="content">
              <span class="taskName">玩15局快乐连消</span>
              <div class="bottom">
                <div class="gameProgress">
                  <div class="progress" style="width:75%"></div>
                  <span class="progressText">1/4</span>
                </div>
                <div class="telcharge">
                  <img src="@/assets/images/task/money.png" alt />
                  <span>0.5元话费</span>
                </div>
              </div>
            </div>
            <div class="button">
              <button class="receive">领取</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="game">
        <h3 class="title">快乐连消</h3>
        <ul class="taskList" id="lianxiao">
          <li v-for="(item,index) of gameTaskList" :key="index">
            <img src="@/assets/images/task/game-wufu.png" alt class="gameImg" />
            <div class="content">
              <span class="taskName">玩15局快乐连消</span>
              <div class="bottom">
                <div class="gameProgress">
                  <div class="progress" style="width:75%"></div>
                  <span class="progressText">1/4</span>
                </div>
                <div class="telcharge">
                  <img src="@/assets/images/task/money.png" alt />
                  <span>0.5元话费</span>
                </div>
              </div>
            </div>
            <div class="button">
              <button class="receive">领取</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="game">
        <h3 class="title">梦想桌球</h3>
        <ul class="taskList" id="zhuoqiu">
          <li v-for="(item,index) of gameTaskList" :key="index">
            <img src="@/assets/images/task/game-tantiao.png" alt class="gameImg" />
            <div class="content">
              <span class="taskName">玩15局快乐连消</span>
              <div class="bottom">
                <div class="gameProgress">
                  <div class="progress" style="width:75%"></div>
                  <span class="progressText">1/4</span>
                </div>
                <div class="telcharge">
                  <img src="@/assets/images/task/money.png" alt />
                  <span>0.5元话费</span>
                </div>
              </div>
            </div>
            <div class="button">
              <button class="receive">领取</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <h2 class="title">每日任务</h2>
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
          pro: "0%"
        },
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩15局连消",
          status: 1,
          pro: "25%"
        },
        {
          gameImg: require("@/assets/images/task/game02.png"),
          taskName: "玩15局连消",
          status: 2,
          pro: "25%"
        },
        {
          gameImg: require("@/assets/images/task/game02.png"),
          taskName: "玩15局连消",
          status: 2,
          pro: "50%"
        },
        {
          gameImg: require("@/assets/images/task/game02.png"),
          taskName: "玩15局连消",
          status: 2,
          pro: "75%"
        },
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩15局连消",
          status: 3,
          pro: "100%"
        }
      ],
      gameTaskList: [1, 2]
    };
  }
};
</script>

<style lang="less" scoped>
.mainTask {
  padding: 0 1.75rem /* 28/16 */;
  h2 {
    font-size: 1.875rem /* 30/16 */;
    font-weight: 900;
    text-align: left;
    margin-top: 1.875rem /* 30/16 */;
  }
  h3{
    font-size: 1.6875rem /* 27/16 */;
    color: #5a5959;
    text-align: left;
    margin-top:1.625rem /* 26/16 */;
    margin-bottom:0.5rem;
  }
  .game{
    margin-bottom:3.125rem /* 50/16 */;
    li{
      background: none;
      .content .taskName{
        color: #fff;
      }
      .content .bottom .telcharge span{
        color: #fff;
      }
      .content .bottom .gameProgress .progressText{
        color: #fff;
      }
    }
  }
  #lianxiao{
    background: url('~@/assets/images/task/game01-bg.png') no-repeat center;
    background-size: cover;
    .gameProgress{
      background:#7e59f3;
    }
  }
  #zhuoqiu{
    background: url('~@/assets/images/task/game02-bg.png') no-repeat center;
    background-size: cover;
    .gameProgress{
      background:#556fdc;
    }
  }
  .taskList{
    margin-top:0;
    li{
      height: 6rem /* 96/16 */;
    }
  }
}
</style>
