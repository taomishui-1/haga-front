<template>
  <div id="awardDetail">
    <div class="imgWrap">
      <img src="https://static-res.0dgame.com/static/shop/2019/shop/hf2.png" alt />
    </div>
    <div class="mainContent">
      <div class="top">
        <h2 class="name">话费代充</h2>
        <p class="people">
          <span>1234</span>
          人已领取
        </p>
      </div>
      <div class="detail">
        <div class="type item">
          <p class="title">规格</p>
          <div class="content">
            <button class="checked">50元</button>
            <button>100元</button>
          </div>
        </div>
        <div class="choose item">
          <p class="title">已选</p>
          <p class="content">50元</p>
        </div>
        <div class="num item">
          <p class="title">数量</p>
          <p class="remark">(剩余库存充足)</p>
          <div class="chooseNum">
              <p class="sub icon">-</p>
              <p class="number">10</p>
              <p class="add icon">+</p>
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
    <div class="confirm">
      <h2><span>50.00元</span>话费换取</h2>
      <h3>话费券余额：236.5</h3>
    </div>
  </div>
</template>


<script>
import $jq from "jquery";
export default {
  created() {
    $jq(".name p").text(this.$route.name);
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