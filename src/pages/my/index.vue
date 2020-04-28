<template>
  <div id="my">
    <div class="top clearfix">
      <div class="avatar">
        <img :src="userInfo.avatar" alt class="img" />
        <div class="right">
          <p class="name">{{userInfo.nickname}}</p>
          <div class="level">
            <img src="@/assets/images/my/level.png" alt class="icon" />
            <span>{{userInfo.premiumLevel}}</span>
          </div>
        </div>
        <!-- <Message></Message> -->
        <div class="message">
            <img src="@/assets/icons/header/message-white.png" alt="" class="icon">
        </div>
      </div>
    </div>
    <div class="myAssets">
      <dl>
        <dt @click="getVal()">我的星钻</dt>
        <dd>{{userInfo.amount}}</dd>
      </dl>
      <img src="@/assets/images/my/solid.png" alt class="solid" />
      <dl>
        <dt>我的话费券</dt>
        <dd>{{userInfo.billAmount}}</dd>
      </dl>
      <img src="@/assets/images/my/solid.png" alt class="solid" />
      <dl>
        <dt>我的京东卡</dt>
        <dd>{{userInfo.jdAmount}}</dd>
      </dl>
    </div>
    <ul class="active">
      <li v-for="(item,index) of activList" :key="index">
        <img :src="require('@/assets/images/my/image0'+(index+1)+'.png')" alt="" class="img">
        <img :src="item.icon" alt="" class="icon pulse" v-show="item.icon">
        <p>{{item.name}}</p>
      </li>
    </ul>
    <div class="image">
      <img src="@/assets/images/my/nav.png" alt="">
    </div>
    <ul class="list">
      <li v-for="(item,index) of list" :key="index" @click="goPage(item.path,index)">
        <img :src="require('@/assets/images/my/icon0'+(index+1)+'.png')" alt="" class="icon">
        <p>{{item.name}}</p>
        <img src="@/assets/images/my/arrow-right.png" alt="" class="arrow">
      </li>
    </ul>
  </div>
</template>

<script>
// import store from '@/store/index.js'
// import {Shop} from '@/api'
// import Message from "@/pages/header/message.vue";
import $jq from "jquery";
import {transFragment,transMoney} from '@/utils/trans'
export default {
  components: {
    // Message
  },
  name: "App",
  data() {
    return {
      userInfo:{},
      activList:[
        {
          name:'特惠礼包',
          icon:require('@/assets/images/my/limit.png')
        },
        {
          name:'兑换好礼',
        },
        {
          name:'最新活动',
        },
        {
          name:'邀请好友',
          icon:require('@/assets/images/my/share.png')
        }
      ],
      list:[
        {
          name:'任务中心',
          path:'/task'
        },
        {
          name:'奖品兑换',
          path:'/award'
        },
        {
          name:'资产明细',
          path:'/zichan'
        },
        {
          name:'联系客服',
          path:'/link'
        },
        {
          name:'退出',
        },
      ]
    };
  },
  created() {
    $jq(".name p").text(this.$route.name);
    $jq('.arrowHeader').css({
      // 'border-bottom':0
    })
    // transMoney
    var userInfo=JSON.parse(localStorage.getItem('USER_INFO'))
    userInfo.amount=transMoney(userInfo.amount)
    userInfo.billAmount=transFragment(userInfo.billAmount)
    userInfo.jdAmount=transFragment(userInfo.jdAmount)
    this.userInfo=userInfo
  },
  mounted(){
  },
  methods:{
    goPage(path,index){
      console.log(index)
      if(path){
        this.$router.push(path)
      }
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/main.less";
#my {
  position: relative;
  .top {
    width: 100%;
    height: 17.8125rem /* 285/16 */;
    background: url("~@/assets/images/my/top-bg.png") no-repeat center;
    background-size: cover;
    padding: 2.25rem /* 36/16 */ 1.875rem /* 30/16 */ 0 3.5rem /* 56/16 */;
    box-sizing: border-box;
    .avatar {
      height: 5rem;
      display: flex;
      width:100%;
      .img {
        width: 4.875rem /* 78/16 */;
        height: 4.875rem /* 78/16 */;
        border: 2px solid #fff;
        border-radius: 50%;
      }
      .right {
        flex: 1;
        // background:yellow;
        margin-left: 1.5rem /* 24/16 */;
        text-align: left;
        .name {
          font-size: 1.75rem /* 28/16 */;
          color: #fff;
          margin: 0.375rem /* 6/16 */ 0 0.875rem /* 14/16 */;
        }
        .level {
          width: 7.5rem /* 120/16 */;
          height: 1.875rem /* 30/16 */;
          background: url("~@/assets/images/my/level-bg.png") no-repeat center;
          background-size: contain;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon {
            // width: 2.25rem /* 36/16 */;
            height: 1.3rem;
            margin-top:0.1rem;
          }
          span {
            font-size: 1rem;
            color: #fff;
          }
        }
      }
      .message{
        // float:right;
        height: 4.75rem /* 76/16 */;
        width:2.5rem /* 40/16 */;
        display: flex;
        align-items: center;
        img{
            width:2.5rem /* 40/16 */;
        }
  }
    }
  }
  .myAssets {
    width: 39.625rem /* 634/16 */;
    height: 12.5rem /* 200/16 */;
    background: url("~@/assets/images/my/my-bg.png") no-repeat center;
    background-size: cover;
    position: relative;
    // top:-8.25rem /* 132/16 */;
    margin: -8.25rem /* 132/16 */ auto 0;
    display: flex;
    align-items: center;
    dl{
      flex: 1;
      dt{
        font-size: 1.7rem /* 22/16 */;
        color:#2d2d2d;
      }
      dd{
        font-size: 1.875rem /* 30/16 */;
        margin-top:2rem /* 50/16 */;
        color:#4c4b4b;
      }
    }
    .solid{
      width:.3125rem /* 5/16 */;
      height: 7.9375rem /* 127/16 */;
    }
  }
  .active{
    display: flex;
    padding:3.125rem /* 50/16 */ 4.875rem /* 78/16 */ 1.75rem /* 28/16 */;
    justify-content: space-between;
    align-items: center;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      .img{
        height: 4rem /* 64/16 */;
        width: auto;
      }
      .icon{
        position: absolute;
        width:8.25rem /* 132/16 */;
        top:-2rem;
        right:-2.375rem /* 38/16 */;
      }
      p{
        font-size: 1.5rem /* 24/16 */;
        margin-top:1.125rem /* 18/16 */;
        font-weight: 900;
      }
    }
  }
  .image{
    width:100%;
    padding:0 2rem /* 32/16 */;
    height: 10.75rem /* 172/16 */;
    box-sizing: border-box;
    img{
      width:100%;
      height: auto;
    }
  }
  .list{
    padding:0 2.0625rem /* 33/16 */ 0 5rem;
    margin-top:1.75rem /* 28/16 */;
    margin-bottom:11.25rem /* 180/16 */;
    li{
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom:1px solid #dddddd;
      .icon{
        width:auto;
        height: 2.375rem /* 38/16 */;
        margin-left:-1.25rem /* 20/16 */;
      }
      p{
        flex: 1;
        font-size: #444343;
        font-size: 1.5rem /* 24/16 */;
        text-align: left;
        margin-left:1.125rem /* 18/16 */;
        font-weight: 900;
      }
      .arrow{
        width:.8125rem /* 13/16 */;
        height: auto;
        margin-right: 1.6875rem /* 27/16 */;
      }
    }
    
  }
}
</style>
