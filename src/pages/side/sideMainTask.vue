
<template>
  <div class="sideTask">
    <div class="taskList">
      <li class="tabTitle">
        <img src="@/assets/images/side/task-everyday.png" alt="">
      </li>
      <li v-for="(item,index) of everydayList" :key="index">
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
          <img src="@/assets/images/side/button-get.png" alt="" v-if="item.status==1">
          <img src="@/assets/images/side/button-gofinish.png" alt="" v-else-if="item.status==2">
          <img src="@/assets/images/side/button-yet.png" alt="" v-else-if="item.status==3">
          <!-- <button class="receive" v-if="item.status==1">领取</button>
          <button class="tofinish" v-else-if="item.status==2">去完成</button>
          <button class="hasreceive" v-else-if="item.status==3">已领取</button> -->
        </div>
      </li>
      <!-- 主线 -->
      <li class="tabTitle">
        <img src="@/assets/images/side/task-main.png" alt="">
      </li>
      <li v-for="(item,index) of mainList" :key="index+10">
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
          <img src="@/assets/images/side/button-get.png" alt="" v-if="item.status==1">
          <img src="@/assets/images/side/button-gofinish.png" alt="" v-else-if="item.status==2">
          <img src="@/assets/images/side/button-yet.png" alt="" v-else-if="item.status==3">
          <!-- <button class="receive" v-if="item.status==1">领取</button>
          <button class="tofinish" v-else-if="item.status==2">去完成</button>
          <button class="hasreceive" v-else-if="item.status==3">已领取</button> -->
        </div>
      </li>
      <!-- 更多任务 -->
      <li class="tabTitle">
        <img src="@/assets/images/side/task-more.png" alt="">
      </li>
      <li v-for="(item,index) of moreList" :key="index+100">
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
          <img src="@/assets/images/side/button-get.png" alt="" v-if="item.status==1">
          <img src="@/assets/images/side/button-gofinish.png" alt="" v-else-if="item.status==2">
          <img src="@/assets/images/side/button-yet.png" alt="" v-else-if="item.status==3">
          <!-- <button class="receive" v-if="item.status==1">领取</button>
          <button class="tofinish" v-else-if="item.status==2">去完成</button>
          <button class="hasreceive" v-else-if="item.status==3">已领取</button> -->
        </div>
      </li>
      <li></li>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        everydayList: [
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩十五局快乐连消",
          status: 1,
          pro: "0%"
        },
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩15局连消",
          status: 1,
          pro: "25%"
        },
      ],
      mainList:[
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩十五局快乐连消",
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
        },
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩15局连消",
          status: 3,
          pro: "100%"
        }
      ],
      moreList:[
        {
          gameImg: require("@/assets/images/task/game01.png"),
          taskName: "玩十五局快乐连消",
          status: 1,
          pro: "0%"
        },
      ]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>