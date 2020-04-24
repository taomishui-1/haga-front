
<template>
  <div id="shop">
    <!-- 限量特惠 -->
      <div class="limit">
        <div class="title">
          <p>限量特惠</p>
          <img src="@/assets/images/store/icon-hot.png" alt="">
        </div>
        <div class="content clearfix">
          <div class="top">
            <dl>
              <dt>
                <img src="@/assets/images/store/limit-img01.png" alt="">
                <p>× 6000</p>
              </dt>
              <dd>星钻</dd>
            </dl>
            <dl>
              <dt>
                <img src="@/assets/images/store/limit-img02.png" alt="">
                <p>× 2元</p>
              </dt>
              <dd>话费券</dd>
            </dl>
            <dl>
              <dt>
                <img src="@/assets/images/store/limit-img03.png" alt="">
                <p>× 30天</p>
              </dt>
              <dd>幸运红包</dd>
            </dl>
            <dl>
              <dt>
                <img src="@/assets/images/store/limit-img04.png" alt="">
                <p>× 1个</p>
              </dt>
              <dd>欢乐篮球</dd>
            </dl>
          </div>
          <button class="button">￥6</button>
        </div>
      </div>
      <!-- 豪华vip卡 -->
      <div class="vip">
        <div class="title">
          <p>豪华VIP卡</p>
        </div>
        <div class="content">
          <dl>
            <dt>
              <img src="@/assets/images/store/week-bg.png" alt="" class="bg">
              <div class="countDown">
                <p>特权倒计时 00:00:00</p>
              </div>
            </dt>
            <dd>购买立得+30000星钻</dd>
            <dd>
              <p>每日领+1000星钻</p>
              <button class="button">￥30</button>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="@/assets/images/store/month-bg.png" alt="" class="bg">
              <div class="countDown">
                <p>特权倒计时 00:00:00</p>
              </div>
            </dt>
            <dd>购买立得+30000星钻</dd>
            <dd>
              <p>每日领+1000星钻</p>
              <button class="button">￥280</button>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 热门单品 -->
      <div class="product">
        <div class="title">
          <p>热门单品</p>
        </div>
        <ul class="content">
          <li v-for="(item,index) of productList" :key="index">
            <div class="imgWrap">
              <img :src="require('@/assets/images/store/item0'+(index+1)+'.png')" alt="" class="img">
            </div>
            <div>
              <img src="@/assets/icons/header/amount.png" alt="" class="icon">
              <p>{{item.value}}</p>
            </div>
            <div>
              <img src="@/assets/images/store/icon-gift.png" alt="" class="icon">
              <p>{{item.gift}}星钻</p>
            </div>
            <button class="button">￥{{item.price}}</button>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <p>请适度娱乐，理性消费，虚拟物品购买后不予退款</p>
        <span>购买详情</span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      productList:[
        {
          value:'6000',
          price:'6',
          gift:'100',
        },
        {
          value:'68000',
          price:'68',
          gift:'1500',
        },
        {
          value:'128000',
          price:'128',
          gift:'3000',
        },
        {
          value:'698000',
          price:'698',
          gift:'15000',
        },
        {
          value:'998000',
          price:'998',
          gift:'25000',
        },
        {
          value:'1998000',
          price:'1998',
          gift:'55000',
        },
      ]
    }
  },
  created(){
    console.log("my^",this.$route)
  }

}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
#shop{
  padding:0 1.875rem /* 30/16 */;
  margin-top:1.5rem;
  .title{
    text-align: left;
    display: flex;
    p{
      font-size: 1.75rem /* 28/16 */;
      font-weight: 600;
    }
    img{
      height: 1.625rem /* 26/16 */;
      width: auto;
    }
  }
  .button{
    height: 2.5rem /* 40/16 */;
    float: right;
    width:9.0625rem /* 145/16 */;
    background: #eb5c5e;
    color: #fff;
    font-size: 1.6rem /* 24/16 */;
    border-radius: 1.25rem /* 20/16 */;
  }
  .limit{
    width:100%;
    .content{
      height: 18.75rem /* 300/16 */;
      background: #f7f7f7;
      border-radius: 0.5rem;
      margin:1rem 0;
      .top{
        display: flex;
        padding:0 .625rem /* 10/16 */;
        justify-content: space-between;
        margin-top:1.75rem /* 28/16 */;
        margin-bottom: .75rem /* 12/16 */;
        dl{
          width:9.625rem /* 154/16 */;
          display: flex;
          flex-direction: column;
          justify-content: center;
          dt{
            position: relative;
            margin-bottom:1rem;
            img{
              width: 100%;
              height: auto;
            }
            p{
              position: absolute;
              bottom:.7rem /* 12/16 */;
              color: #fff;
              font-weight: 600;
              font-size: 1.25rem /* 20/16 */;
              left:0;
              right:0;
              margin:0 auto;
            }
          }
          dd{
            font-size: 1.5rem /* 24/16 */;
            font-weight: 900;
          }
        }
      }
      
    }
  }
  .vip{
    .content{
      display: flex;
      justify-content: space-between;
      margin-top:.5rem;
      dl{
        flex: 1;
        dt{
          position: relative;
          img{
            width: 100%;
          }
          .countDown{
            width:11.25rem /* 180/16 */;
            height: 1.5rem /* 24/16 */;
            border-radius: .75rem /* 12/16 */;
            position: absolute;
            left:1.25rem /* 20/16 */;
            bottom:1rem;
            color: #fff;
            p{
              font-size: .75rem /* 12/16 */;
              white-space: nowrap;
              line-height: 1.5rem /* 24/16 */;
              transform: scale(.75);
              margin-top:1px;
            }
          }
        }
        dd{
          margin-top:.75rem /* 12/16 */;
          font-size: 1.375rem /* 22/16 */;
          color: #4e4e4e;
          text-align: left;
          margin-left:1.125rem /* 18/16 */;
          &:nth-of-type(2){
            color: #898989;
            display: flex;
            button{
              height: 2.5rem /* 40/16 */;
              width: 6.875rem /* 110/16 */;
              margin-left:.5rem;
            }
            p{
              line-height: 2.5rem /* 40/16 */;
            }
          }
        }
        &:nth-of-type(1){
          .countDown{
            background: #7842d6;
          }
        }
        &:nth-of-type(2){
          .countDown{
            background: #cd803d;
          }
        }
      }
    }
  }
  .product{
    margin-top:2.5rem /* 40/16 */;
    margin-bottom: 2.5rem /* 40/16 */;
    .content{
      display: flex;
      margin-top:1.125rem /* 18/16 */;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        width:13.75rem /* 220/16 */;
        height: 18.125rem /* 290/16 */;
        border-radius: 0.5rem;
        background: #f7f7f7;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom:1rem;
        &:last-of-type{
          // .imgWrap{
          //   width:11rem /* 160/16 */;
          // }
        }
        .imgWrap{
          margin:1.875rem /* 30/16 */ 0 .625rem /* 10/16 */;
          height:6.5rem /* 104/16 */;
          // width:9.125rem /* 146/16 */;
          .img{
            height:100%;
            width: auto;
          }
        }
        div{
          display: flex;
          align-items: center;
          justify-content: center;
          // width:10.8125rem /* 173/16 */;
          p{
            display: inline-block;
          }
          .icon{
            height: 100%;
            width: auto;
            margin-right:1.5625rem /* 25/16 */;
          }
          &:nth-of-type(2){
            height: 2.25rem /* 36/16 */;
            
          }
          &:nth-of-type(3){
            height: 1.875rem /* 30/16 */;
            margin-top:0.5rem;
            margin-left: 1rem;
          }
        }
        .button{
          width:10.8125rem /* 173/16 */;
          margin-top:.75rem /* 12/16 */;
        }
      }
    }
  }
  .bottom{
    height: 1.5rem /* 24/16 */;
    margin-bottom:1.875rem /* 30/16 */;
    p{
      font-size: 1.375rem /* 22/16 */;
      color:#7d7d7d;
      line-height: 1.5rem /* 24/16 */;
      margin-right: 1rem;
      display: inline-block;
    }
    span{
      font-size: 1.5rem /* 24/16 */;
      color: #eb6565;
    }
  }
}
</style>
