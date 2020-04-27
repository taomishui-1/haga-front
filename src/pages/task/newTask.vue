<template>
  <div class="newtask">
    <div class="banner">
      <div class="imgWrap">
        <img src="@/assets/images/task/banner.png" alt />
      </div>
      <div class="taskprogress">
        <div class="title">
          <span><span class="bolder">完成全部</span> 再得{{newTaskData.parentTask?newTaskData.parentTask.awardsName:''}}</span>
        </div>
        <div class="tar">
          <!-- <div class="tarBg">
              
          </div>-->
          <div class="rate" :style="{width:newTaskData.finishTask/newTaskData.totalTask*10000/100.00+'%'}"></div>
        </div>
        <div class="progress">
          <span>{{newTaskData.finishTask}} / {{newTaskData.totalTask}}</span>
        </div>
      </div>
    </div>
    <div class="taskList">
      <li v-for="(item,index) of newTaskData.subTask" :key="index">
        <img :src="item.icon" alt class="gameImg" />
        <div class="content">
          <span class="taskName">{{item.name}}</span>
          <div class="bottom">
            <div class="gameProgress">
              <div class="progress" :style="{width:item.proWidth}"></div>
              <span class="progressText">{{item.finishNum}}/{{item.opsNum}}</span>
            </div>
            <div class="telcharge">
              <img :src="item.awardsIcon" alt />
              <span>{{item.awardsName}}</span>
            </div>
          </div>
        </div>
        <div class="button">
          <button class="receive" v-if="item.taskState===1||item.taskState===3">领取</button>
          <button class="tofinish" v-else-if="item.taskState===1||item.taskState===2">去完成</button>
          <button class="hasreceive" v-else-if="item.taskState===4">已领取</button>
        </div>
      </li>
      <li></li>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
    newTaskData:Object
  },
  data() {
    return {
      taskList: [
      ]
    };
  },
  mounted(){
    console.log("新人模块",this.newTaskData)
    // const finishNum = item.finishNum > item.opsNum ? item.opsNum : item.finishNum;
    // {(finishNum / item.opsNum) * 100}%` }}
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
        .bolder{
          font-weight: 900;
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
          // width: 18%;
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
