<template>
  <div id="awardDetail">
    <div class="imgWrap">
      <img src="https://static-res.0dgame.com/static/shop/2019/shop/hf2.png" alt />
    </div>
    <div class="mainContent">
      <div class="top">
        <h2 class="name">{{detailData.title}}</h2>
        <p class="people">
          <span>{{detailData.soldNum}}</span>
          人已领取
        </p>
      </div>
      <div class="detail">
        <div class="type item">
          <p class="title">规格</p>
          <div class="content">
            <button :class="{'checked':index==current}" v-for="(item,index) of detailData.skus" :key="item.id" @click="checkedType(index,item.name,item.id)">{{item.name}}</button>
            <!-- <button>100元</button> -->
          </div>
        </div>
        <div class="choose item">
          <p class="title">已选</p>
          <p class="content">{{checkedItem}}</p>
        </div>
        <div class="num item">
          <p class="title">数量</p>
          <p class="remark" v-if="detailData.stockNum === -1">(剩余库存充足)</p>
          <p class="remark" v-else>({{detailData.stockNum}})</p>
          <div class="chooseNum">
              <p class="sub icon" @click="subClick()">-</p>
              <p class="number">{{num}}</p>
              <p class="add icon" @click="addClick()">+</p>
            </div>
        </div>
        <div class="service item">
          <p class="title">保障</p>
          <p class="remark">(售后无忧)</p>
        </div>
        <div class="text">
          <h2>商品详情</h2>
          <p>话费代充是平台提供的话费直充服务。全网通用。</p>
          <p>到账时间为3-5个工作日，请耐心等待。</p>
        </div>
      </div>
    </div>
    <div class="confirm" @click="goExchange()">
      <h2><span>{{total}}元</span>话费换取</h2>
      <h3>话费券余额：{{userInfo.billAmount}}</h3>
    </div>
  </div>
</template>


<script>
import $jq from "jquery";
import { Shop} from '@/api'
import {transFragment} from '@/utils/trans'
export default {
  data(){
    return {
      detailData:{},
      current:0,
      checkedItem:'',
      num:1,
      total:'',
      proId:'',
      skuId:''
    }
  },
  created() {
    $jq(".name p").text(this.$route.name);
    console.log(this.$route.query)
    var param=this.$route.query
    this.proId=this.$route.query.id
    Shop.queryDetail(param).then(res=>{
      console.log('商品',res)
      if(res.data.errcode==200){
        this.detailData=res.data.data
        this.checkedItem=res.data.data.skus[this.current].name
        this.skuId=res.data.data.skus[this.current].id
        this.totalChange()
      }
    })
    // 话费券余额
    var userInfo=JSON.parse(localStorage.getItem('USER_INFO'))
    // userInfo.billAmount=parseInt(userInfo.billAmount, 10) / 10
    userInfo.billAmount=transFragment(userInfo.billAmount)
    this.userInfo=userInfo
  },
  methods:{
    //  {(item.price && (item.price * buyNum).toFixed(2)) || ''}
    checkedType(index,item,skuId){
      this.checkedItem=item
      this.current=index
      this.skuId=skuId
      this.totalChange()
    },
    subClick(){
      console.log("sub",this.num)
      if(this.num>1){
        this.num-=1
      }
      this.totalChange()
    },
    addClick(){
      if(this.detailData.stockNum!==-1){
          if(this.num<this.detailData.stockNum){
          this.num+=1
        }
      }else{
         this.num+=1
      }
      this.totalChange()
      
    },
    totalChange(){
      this.total=(this.detailData.skus[this.current].price*this.num).toFixed(2)
    },
    goExchange(){
      let params={
        goods:this.proId,
        num:this.num,
        sku:this.skuId
      }
      console.log("exchange",params)
      // Shop.toExchange(params).then(res=>{
      //   console.log("换取",res)
      // })
    }
  }
};
</script>

<style lang="less">
@import "~@/styles/main.less";
#awardDetail {
  // padding:
  .imgWrap {
    height: 16.625rem /* 266/16 */;
    width: 100%;
    margin: 0.625rem /* 10/16 */ 0;
    img {
      height: 100%;
      width: auto;
      margin: 0 auto;
    }
  }
  .mainContent {
    padding: 0 2.375rem /* 38/16 */;
    text-align: left;
  }
  .top {
    height: 4.75rem /* 76/16 */;
    margin-top:.5rem /* 8/16 */;
    border-bottom: 1px solid #a8a8a8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 1.5rem /* 24/16 */;
    .name {
      font-size: 2.1875rem /* 35/16 */;
    }
    .people {
      font-size: 1.25rem /* 20/16 */;
      color: #4e4e4e;
    }
  }
  .detail {
    .item{
      height: 4.75rem /* 76/16 */;
      display:flex;
      align-items: center;
      padding:0 1.5rem /* 24/16 */;
    }
    // 规格
    .type{
      .content{
        button{
          width:8.375rem /* 134/16 */;
          height: 3.125rem /* 50/16 */;
          background:#cfcfcf;
          color:#4e4e4e;
          margin-right: 2rem;
          border-radius: .3125rem /* 5/16 */;
        }
        .checked{
          background:@main;
          color: #fff;
        }
      }
    }
    // 选中
    .choose{
      .content{
        color:@main;
        font-size: 1.5rem /* 24/16 */ ;
      }
    }
    .service,.num{
      border-bottom:1px solid #a8a8a8;
    }
    // 选择数量 加减
    .chooseNum{
      height: 2.25rem /* 36/16 */;
      min-width:9.5rem /* 152/16 */;
      float: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        width:2.25rem /* 36/16 */;
        height: 2.25rem /* 36/16 */;
        background:@main;
        color:#fff;
        font-size: 2.5rem;
        border-radius: .3125rem /* 5/16 */;
        line-height: 2.25rem /* 36/16 */;
        text-align: center;
      }
      .number{
        margin:0 .25rem /* 4/16 */;
        width:4.375rem /* 70/16 */;
        height: 1.875rem /* 30/16 */;
        line-height: 1.875rem /* 30/16 */;
        text-align: center;
        background:#cfcfcf;
        border-radius: .25rem /* 4/16 */;
        font-size: 1.125rem /* 18/16 */;
      }
    }
    .text{
      h2{
        font-size: 2rem /* 32/16 */;
        margin:2rem 0 1rem;
      }
      p{
        font-size: 1.375rem /* 22/16 */;
        color: #4e4e4e;
        line-height: 2.25rem /* 36/16 */;
      }
    }
    .remark{
      color: #000;
      font-size: 1.25rem /* 20/16 */;
      flex: 1;
    }
    .title{
      font-size: 1.6875rem /* 27/16 */;
      color:#4e4e4e;
      margin-right:1.875rem /* 30/16 */;
    }
  }
  .confirm{
    width:100%;
    height: 6.5rem /* 104/16 */;
    background:@main;
    position: fixed;
    bottom:0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2{
      font-size: 1.75rem /* 28/16 */;
      color: #fff;
    }
    h3{
      font-size: 1.5rem /* 24/16 */;
      margin-top:.75rem /* 12/16 */;
      color: #fff;
    }
  }
}
</style>