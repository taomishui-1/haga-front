<template>
  <div id="sideWrap">
    <div class="mask"></div>
    <div id="side">
      <img src="@/assets/images/side/bg.png" alt class="bg" />
      <div class="arrowWrap" @click="close()">
        <img src="@/assets/images/side/arrow-right.png" alt="" class="arrow">
      </div>
      <div class="side">
        <div class="header">
          <ul class="amount">
            <li class="value">
              <img src="@/assets/icons/header/amount-shadow.png" alt class="icon" />
              <span>6532000</span>
              <img src="@/assets/icons/header/plus.png" alt class="plus" />
            </li>
            <li class="jd">
              <img src="@/assets/icons/header/jd-shadow.png" alt class="icon" />
              <span>38元</span>
            </li>
            <li class="bill">
              <img src="@/assets/icons/header/billamount-shadow.png" alt class="icon" />
              <span>12.4元</span>
              <p>满50元可用</p>
            </li>
          </ul>
          <div class="link">
            <img src="@/assets/icons/header/link.png" alt />
            <p>客服</p>
          </div>
        </div>
        <div class="content">
          <div class="tabbarWrap">
            <div :class="{'name':true,'current':current==index}" v-for="(item,index) of tabbar" :key="index" @click="switchTab(index)">
                <img :src="item.imgUrl" alt="">
              </div>
            <!-- <div class="name current">
                <img src="@/assets/images/side/icon-active-current.png" alt="">
              </div> -->
          </div>
          <div class="main">
            <SideTask v-if="current==0"></SideTask>
            <SideActive v-else></SideActive>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideActive from './sideActive'
import SideTask from './sideTask'
export default {
  components:{
    SideActive,
    SideTask
  },
  data(){
    return {
      current:0,
      tabbar:[
        {
          imgUrl:require('@/assets/images/side/icon-task.png'),
          imgUrlCurrent:require('@/assets/images/side/icon-task-current.png'),
        },
        {
          imgUrl:require('@/assets/images/side/icon-active.png'),
          imgUrlCurrent:require('@/assets/images/side/icon-active-current.png'),
        }
      ],
      // sideShow:
    }
  },
  methods:{
    switchTab(index){
      this.current=index
    },
    close(){
      this.$emit('childFn',false)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/main.less";
#sideWrap {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  #side {
    width:86%; //644px
    // width: 40.25rem /* 644/16 */;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
    .arrowWrap{
      // width:4rem /* 64/16 */;
      width:3.5rem /* 56/16 */;
      height: 6rem /* 96/16 */;
      position: absolute;
      left:0.8rem;
      top:4rem;
      bottom:0;
      margin: auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index:101;
      .arrow{
        width:1.75rem /* 28/16 */;
        height: auto;
      }
    }
    
    .side {
      width:100%;
      padding-left:4.0625rem /* 65/16 */;
      box-sizing: border-box;
      // width: 36rem /* 589/16 */;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      // background: yellow;
      .header {
        height: 8.625rem /* 138/16 */;
        display: flex;
        .amount {
          // width:28.375rem /* 454/16 */;
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          padding-left: 4.1875rem /* 67/16 */;
          padding-top: 1.6875rem /* 27/16 */;
          box-sizing: border-box;
          // justify-content: space-between;
          li {
            height: 1.75rem /* 28/16 */;
            border-radius: 0.875rem /* 14/16 */;
            background: #592ad1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            // margin-right: 1.5rem /* 24/16 */;
            margin-bottom: 1.25rem /* 20/16 */;
            position: relative;
            &:nth-of-type(1){
             margin-right: 1.5rem /* 24/16 */; 
            }
            .icon {
              width: 2.5rem /* 40/16 */;
              margin-left: -0.625rem /* 10/16 */;
              height: auto;
            }
            .plus {
              width: 2.3125rem /* 37/16 */;
            }
            span {
              font-size: 1.125rem /* 20/16 */;
              color: #fff;
              padding: 0 1.25rem /* 20/16 */;
            }
            p {
              font-size: 1.125rem /* 18/16 */;
              transform: scale(0.8);
              color: #fadfaa;
              // margin-right: .75rem /* 12/16 */;
            }
          }
        }
        .link {
          height: 5.3125rem /* 85/16 */;
          width: 7.3125rem /* 117/16 */;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1.3rem /* 27/16 */;
          img {
            width: 3.5rem /* 56/16 */;
          }
          p {
            font-size: 1.25rem /* 20/16 */;
            color: #fff;
          }
        }
      }
      .content {
        flex: 1;
        // width: 32rem /* 520/16 */;
        width:89%;
        background: #fbf2e0;
        margin: 8.125rem /* 130/16 */ auto 3.75rem /* 60/16 */;
        border-radius: 2.625rem /* 42/16 */;
        box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, .3);
        position: relative;
        // overflow: hidden;
        .tabbarWrap{
          height: 5rem /* 80/16 */;
          position: absolute;
          top:-5rem /* 80/16 */;
          left:0;
          right: 0;
          margin:0 auto;
          width:82%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .name{
              height: 4.125rem /* 66/16 */;
              width: 100%;
              border-radius: 1.875rem /* 30/16 */ 1.875rem /* 30/16 */ 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #fadfaa;
              margin:0 0.5rem;
              img{
                // width:60%;
                width:6.625rem /* 106/16 */;
              }
            }
            .current{
              border-width:1rem /* 16/16 */;
              border-style: solid;
              border-color: #ff9d55;
              border-bottom:0;
              background: #fbf2e0;
            }
        }
        .main{
          width:100%;
          height: 100%;
          border-radius: 2.625rem /* 42/16 */;
          overflow: hidden;
          position: relative;
          .sideTaskWrap{
            width:100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
            overflow: auto;
          }
          // border-radius: 2.625rem /* 42/16 */;
        }
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    background: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    opacity: 0.5;
    z-index: 99;
  }
}
</style>