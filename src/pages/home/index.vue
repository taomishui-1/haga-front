<template>
  <div id="home">
    <!-- <div id="header">
      <AmountHeader></AmountHeader>
    </div> -->
    <div id="swiper-container">
      <div class="swiper-wrapper">
        <!-- <div :class="[getBannerClass(index),'swiper-slide']" v-for="(item,index) of imgList" :key="index">
          <img :src="item.imgSrc" alt="" class="img">
          <img :src="item.btnSrc" alt="" :class="[getBtnClass(index),'btn','pulse']">
        </div> -->
        <div class="swiper-slide swiper-slide1">
          <img :src="imgList[0].imgSrc" alt="" class="img">
          <img :src="imgList[0].btnSrc" alt="" class="pulse btn btn1">
        </div>
        <div class="swiper-slide swiper-slide2">
          <img :src="imgList[1].imgSrc" alt="" class="img">
          <img :src="imgList[1].btnSrc" alt="" class="pulse btn btn2">
          <img :src="imgList[1].star1Src" alt="" class="star1 starShowHide">
          <img :src="imgList[1].star2Src" alt="" class="star2 starShowHide">
        </div>
        <div class="swiper-slide swiper-slide3">
          <img :src="imgList[2].imgSrc" alt="" class="img">
          <img :src="imgList[2].btnSrc" alt="" class="pulse btn btn3">
        </div>
        <div class="swiper-slide swiper-slide4">
          <img :src="imgList[3].imgSrc" alt="" class="img">
          <img :src="imgList[3].btnSrc" alt="" class="pulse btn btn4">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="messageWrap">
      <div class="imgWrap">
          <img src="@/assets/images/home/icon_trumpet.png" alt="">
        </div>
      <div class="message">
        <div class="messageList">
        <p v-for="(item,index) of messageList" :key="index" v-html="item.msg"></p>
      </div>
      </div>
    </div>
    <Active/>
    <Games :gameList="gameList" :gameRecommend="gameRecommend" />
    <!-- 活动中心 -->
      <div class="activecenter " @click="clickActiveCenter">
        <img src="@/assets/images/home/activecenter.png" alt="" class="img">
        <img src="@/assets/images/home/spot.png" alt="" class="spot">       
      </div>
      <!-- 充值特惠 -->
      <div class="recharge">
        <img src="@/assets/images/home/recharge.png" alt="" class="img swing">
        <img src="@/assets/images/home/spot.png" alt="" class="spot">
      </div>
      <Modal @confirm="confirm" :data='modalList' :visible="visible">
      </Modal>
      <Side v-show="SideShow" @childFn='parentFn'></Side>
  </div>
</template>

<script>
import { Home,User} from '@/api'
// import Cookies from 'js-cookie'
import Swiper from 'swiper'
import Active from './active.vue'
import Games from './games.vue'
import Modal from '@/components/modal.vue'
import $jq from 'jquery'
import Side from '@/pages/side/side.vue'

export default {
  components: {
    Active,
    Games,
    Modal,
    Side
    // AmountHeader
  },
  data() {
    return {
      gameList:[],
      gameRecommend:{},
      UserInfo:{},
      visible:true,
      imgList:[
        {
          imgSrc:require('@/assets/images/home/banner01.png'),
          btnSrc:require('@/assets/images/home/banner01_btn.png'),
        },
        {
          imgSrc:require('@/assets/images/home/banner02.png'),
          btnSrc:require('@/assets/images/home/banner02_btn.png'),
          star1Src:require('@/assets/images/home/star01.png'),
          star2Src:require('@/assets/images/home/star02.png'),
        },
        {
          imgSrc:require('@/assets/images/home/banner03.png'),
          btnSrc:require('@/assets/images/home/banner03_btn.png'),
        },
        {
          imgSrc:require('@/assets/images/home/banner04.png'),
          btnSrc:require('@/assets/images/home/banner04_btn.png'),
        },
      ],
      messageList:[],
      messageLeft:0,
      modalList:[
        {
          imageUrl:require('@/assets/images/common/redpicket.png'),
          value:'2元'
        },
        {
          imageUrl:require('@/assets/images/common/value.png'),
          value:'2000'
        },
      ],
      SideShow:false,
      moveLeft:10,
      messageTimer:null

    };
  },
  methods: {
    getBtnClass(index){
      return 'btn'+(index+1)
    },
    getBannerClass(index){
      return 'banner'+(index+1)
    },
    confirm(){
      this.visible=true
      this.$toast('这里是一个toast提示')
    },
    clickActiveCenter(){
      this.SideShow=true
    },
    parentFn(sideShow){
      this.SideShow=sideShow
    },
    messageLeftFn(){
      
    },
    setMessageTimer(){
      var that=this
      if(this.messageTimer==null){
        console.log("000",Math.abs(parseInt($jq('.messageList').css('left'))),$jq('.messageList').width())
        this.messageTimer=setInterval(function(){
          that.moveLeft--
          if(-that.moveLeft<$jq('.messageList').width()){
            $jq('.messageList').animate({
              left:that.moveLeft+'px'
            },10)
          }
          else{
            $jq('.messageList').css('left',0.5*$jq(window).width())
            that.moveLeft=0
          }
        },10)
      }
    }
  },
  created(){
    var that=this
    // 游戏列表
    Home.fetchGame().then(res=>{
      if(res.data.errcode==200){
        this.gameList=res.data.data
        localStorage.setItem('GAMELIST',JSON.stringify(that.gameList))
      }
    })
    // 推荐列表
    Home.fetchRecommendGame().then(res=>{
      this.gameRecommend=res.data.data[0]
    })
    // 消息推送列表
    Home.fetchAnnounce().then(res=>{
      // console.log('广播列表',res)
      if(res.data.errcode==200){
        this.messageList=res.data.data
        // this.messageList=res.data.data.slice(1,3)
      }
    })
    // 头部 用户信息
    User.queryCurrent().then(res=>{
      console.log("我的",res.data.data)
      if(res.data.errcode==200){
        this.UserInfo=res.data.data
        localStorage.setItem('USER_INFO',JSON.stringify(res.data.data))
      }
    })
  },
  mounted(){
    // var _this=this;
    new Swiper('#swiper-container',{
      loop:'true',
      autoplay: {
        delay:3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
      },
    })
    
    clearInterval(this.messageTimer)
    this.messageTimer=null
    this.setMessageTimer()
  },
  
  destroyed:function(){
    // 每次离开页面清除定时器
    clearInterval(this.messageTimer)
    this.messageTimer=null
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/styles/main.less";

#home{
  width:100%;
  padding:0 1.875rem /* 30/16 */;
  box-sizing: border-box;
  #swiper-container{
    // width:100%;
    height: 10.8125rem /* 173/16 */;
    margin:1.1875rem /* 19/16 */ 0 2.1875rem /* 35/16 */;
    overflow: hidden;
    position: relative;
    .swiper-wrapper{
      height: 100%;
      .swiper-slide{
        width:100%;
        height: 100%;
        position: relative;
        .img{
          width: 100%;
          height: auto;
        }
        .btn{
          position: absolute;
          z-index: 1;
        }
        .btn1{
          width:9rem /* 144/16 */;
          right: 1.5rem /* 28/16 */;
          bottom:1.75rem /* 28/16 */;
        }
        .star1{
          position: absolute;
          z-index: 2;
          right: 4.4rem /* 72/16 */;
          top:0;
          width:5.625rem /* 90/16 */;
        }
        .star2{
          width:100%;
          position: absolute;
          z-index: 2;
          right: 0;
          top:0;
        }
        .btn2{
          width:19.5625rem /* 313/16 */;
          bottom:1.375rem /* 22/16 */;
          left:0;
          right:0;
          margin:0 auto;
        }
        .btn3{
          width:13.5rem /* 225/16 */;
          bottom:1.5625rem /* 25/16 */;
          left:.8125rem /* 13/16 */;
        }
        .btn4{
          width:13.875rem /* 222/16 */;
          right:1.25rem;
          bottom:.8125rem /* 13/16 */;
        }
      }
    }
    .swiper-pagination{
      position: absolute;
      height: 1.25rem /* 20/16 */;
      bottom:.625rem /* 10/16 */;
      left:0;
      right: 0;
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .swiper-pagination-bullet{
        // background:@gray1;
        background:#fff;
        width:.75rem /* 12/16 */;
        height: .75rem /* 12/16 */;
        opacity: 1;
      }
      .swiper-pagination-bullet-active{
        width:1.25rem /* 20/16 */;
          height: 1.25rem /* 20/16 */;
      }
  }
    }
    
   .messageWrap{
    width:100%;
    height: 2.625rem /* 42/16 */;
    border-radius: 1.3125rem /* 21/16 */;
    background: @gray1;
    position: relative;
    overflow: hidden;
    display: flex;
    .imgWrap{
        margin-left:1rem;
        margin-right: 1.25rem /* 20/16 */;
        width: 1.5rem /* 24/16 */;
        height: 100%;
        display: flex;
        align-items: center;
        img{
          width:1.5rem /* 24/16 */;
        }
     }
    .message{
      width:100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      margin-right: 2rem;
        .messageList{
        height: 100%;
        white-space:nowrap;
        position: absolute;
        left:-10px;
        p{
        font-size: 1.25rem /* 20/16 */;
        line-height: 2.625rem /* 42/16 */;
        display: inline-block;
        span{
          color: #ff7800;
        }
      }
    }
    }
    
  }
  // 活动中心
  .activecenter{
    width:8.375rem /* 134/16 */;
    height: 7.5625rem /* 121/16 */;
    position: fixed;
    top:-9rem;
    bottom:0;
    right:0.1rem;
    margin:auto 0;
    .img{
      width: 100%;
      height: 100%;
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
    .spot{
      width:1.25rem;
      position:absolute;
      top:0.3rem;
      right:1.2rem;
    }
  }
  .recharge{
    position: fixed;
    bottom:8rem /* 76/16 */;
    right: 0;
    img{
      width:7rem /* 112/16 */;
    }
    .spot{
      width:1.25rem;
      position:absolute;
      top:0.4rem;
      right:0.4rem;
    }
  }
}
</style>
