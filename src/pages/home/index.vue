<template>
  <div id="home">
    <div id="header">
      <Avator></Avator>
    </div>
    <div id="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of imgList" :key="index">
          <img :src='require("@/assets/images/home/image01.png")' alt="">
          <p>{{index}}</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="messageWrap">
      <div class="message">
        <p v-for="(item,index) of messageList" :key="index">恭喜<span>无敌炫炫炫</span>在弹跳达人游戏中,获得 8000000 星钻..</p>
      </div>
    </div>
    <Active/>
    <Games/>
  </div>
</template>

<script>
import { User} from '@/api'
import { Shop} from '@/api'
import Cookies from 'js-cookie'
import Swiper from 'swiper'
import Active from './active.vue'
import Games from './games.vue'
import Avator from '@/pages/header/avatar.vue'
export default {
  components: {
    Active,
    Games,
    Avator
  },
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      imgList:[
        {
          imgSrc:''
        },
        {
          imgSrc:''
        },
        {
          imgSrc:''
        },
        {
          imgSrc:''
        },
        {
          imgSrc:''
        }
      ],
      messageList:[1,2,3,4,5,6,7,8,9,10,1,1]
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline.user, this.formInline.password);
      // this.$message.success('This is a success message');
      const params={
        'username':this.formInline.user,
        'password':this.formInline.password,
        'type': "account"
      }
      User.login(params)
        .then(res => {
          console.log('res',res)
          if(res.data.errmsg=='ok'){
            Cookies.set('Token',res.data.data)
            Shop.list().then(res=>{
              console.log(res)
            })
          }
        })
        .then(() => {
          this.loading = false;
        });
    }
  },
  created(){
    
  },
  mounted(){
    new Swiper('#swiper-container',{
      loop:'true',
      autoplay: {
        delay:10000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
        img{
          width: 100%;
          height: auto;
        }
        p{
          position: absolute;
          top:0;
          left:0;
          font-size: 16px;
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
      
    }
    .swiper-pagination-bullet{
        background:@gray1;
        width:.75rem /* 12/16 */;
        height: .75rem /* 12/16 */;
        opacity: 1;
      }
      .swiper-pagination-bullet-active{
        width:1.25rem /* 20/16 */;
          height: 1.25rem /* 20/16 */;
      }
  }
   .messageWrap{
    width:100%;
    height: 2.625rem /* 42/16 */;
    border-radius: 1.3125rem /* 21/16 */;
    background: @gray1;
    position: relative;
    overflow: hidden;
    .message{
      height: 100%;
      white-space:nowrap;
      position: absolute;
      padding:0 4.25rem /* 68/16 */;
      left:-10px;
      p{
      font-size: 1.25rem /* 20/16 */;
      line-height: 2.625rem /* 42/16 */;
      display: inline-block;
      margin-right: 1.25rem /* 20/16 */;
      span{
        color: #ff7800;
      }
    }
    }
    
  }
}
</style>
