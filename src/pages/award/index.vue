<template>
  <div id="award">
      <div class="actives">
        <div class="active">
          <img src="@/assets/images/award/award01_icon.png" alt="" class="go pulse">
        </div>
        <div class="active">
          <img src="@/assets/images/award/award02_icon.png" alt="" class="go pulse" style="animation-delay: .3s;">
        </div>
      </div>
      <div class="awards">
        <ul class="tarTitle">
          <li v-for="(item,index) of awardList" :key="index" :class="{'current':index==currentIndex}" @click="awardType(index)">
            <p><span>{{item.name}}</span></p>
            <div class="solid"></div>
          </li>
        </ul>
        <ul class="awardList">
          <li v-for="(itm,idex) of awardList[currentIndex].items" :key='idex'>
            <!-- https://static-res.0dgame.com/ -->
            <div class="imgWrap">
              <img :src="'https://static-res.0dgame.com/'+itm.picture" alt="">
            </div>
            <div class="title">
              <h3>{{itm.title}}</h3>
              <h4>{{itm.sellPoint}}</h4>
            </div>
            <div class="bottom">
              <div class="price">
                <p><span>{{itm.spuPrice}}</span>元话费券</p>
              </div>
              <router-link class="exchange" tag="button" :to="{path:'/award/detail',query:{id:itm.id}}">换取</router-link>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import $jq from 'jquery'
import { Shop} from '@/api'
export default {
  name: 'App',
  data(){
    return {
      currentIndex:0,
      awardList:[
        {
          name:'热门推荐',
        },
        {
          name:'虚拟卡券'
        },
        {
          name:'手机数码'
        },
        {
          name:'居家生活'
        }
      ]
    }
  },
  created(){
    $jq('.name p').text(this.$route.name)
    Shop.queryFeedList().then(res=>{
      if(res.data.errcode==200){
        this.awardList=res.data.data
      }
    })
  },
  methods:{
    awardType(index){
      this.currentIndex=index
    }
  }

}
</script>

<style lang="less" scoped>
#award{
  padding:0 2.75rem /* 44/16 */;
  position: relative;
  .myAward{
    position: absolute;
    right:3.125rem /* 50/16 */;
    top:-2rem;
    z-index: 1;
  }
  .actives{
    display: flex;
    justify-content: space-between;
    margin-top:.625rem /* 10/16 */;
    margin-bottom:3.125rem /* 50/16 */;
    .active{
      width:19.75rem /* 316/16 */;
      height: 8.125rem /* 130/16 */;
      position: relative;
      &:nth-of-type(1){
        background:url('~@/assets/images/award/award01.png') no-repeat center;
        background-size: contain;
      }
      &:nth-of-type(2){
        background:url('~@/assets/images/award/award02.png') no-repeat center;
        background-size: contain;
      }
      .go{
        position: absolute;
        width:5.125rem /* 82/16 */;
        left:1.75rem /* 28/16 */;
        bottom:1.625rem /* 26/16 */;
      }
    }
  }
  .tarTitle{
    display: flex;
    justify-content: space-between;
    li{
      display: flex;
      flex-direction: column;
      align-items:center;
      height: 2.875rem /* 46/16 */;
      justify-content: space-between;
      p{
        display: flex;
        align-items: flex-end;
        height: 2.125rem /* 34/16 */;
        span{
          font-size: 1.6875rem /* 27/16 */;
          color:#676767;
          display: inline-block;
        }
      }
      .solid{
        width:3rem /* 48/16 */;
        height: .375rem /* 6/16 */;
        background:#f26164;
        border-radius: .1875rem /* 3/16 */;
        display: none;
      }
    }
    .current{
      p{
        span{
          font-size: 2.125rem /* 34/16 */;
          color: #000;
          font-weight: 900;
        }
      }
      .solid{
        display: block;
      }
    }
  }
  .awardList{
    margin-top:1.5rem /* 24/16 */;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // background: yellow;
    li{
      // width:19.1875rem /* 307/16 */;
      flex: 1;
      height: 20.8125rem /* 333/16 */;
      background:#f7f7f7;
      border-radius: 1.3125rem /* 21/16 */;
      margin-bottom:1.875rem /* 30/16 */;
      padding:1.875rem /* 30/16 */ .9375rem /* 15/16 */ 0;
      text-align: left;
      box-sizing: border-box;
      &:nth-of-type(odd){
        margin-right: 2.5rem /* 40/16 */;
      }
      .imgWrap{
        height: 8.5rem /* 136/16 */;
        margin-bottom:2.1rem /* 40/16 */;
        img{
          height: 100%;
          width:auto;
          margin:0 auto;
        }
      }
      .title{
        margin-bottom:1.25rem /* 20/16 */;
        h3{
          font-size: 1.6875rem /* 27/16 */;
          color: #000;
          margin-bottom:1.125rem /* 18/16 */;
          height: 1.6875rem /* 27/16 */;
        }
        h4{
          font-size: 1.25rem /* 20/16 */;
          height: 1.25rem /* 20/16 */;
          color: #b4b1b1;
        }
      }
      .bottom{
        display:flex;
        height: 1.75rem /* 28/16 */;
        .price{
          height: 1.75rem /* 28/16 */;
          width:11.75rem /* 188/16 */;
          font-size: 1.25rem /* 20/16 */;
          color:#e96365;
          span{
            font-size: 1.75rem /* 28/16 */;
            font-weight: 900;
            margin-right: .25rem /* 4/16 */;
          }
        }
        .exchange{
          width:4.75rem /* 76/16 */;
          height:2.1875rem /* 35/16 */;
          background:#e84a4d;
          border-radius: .5rem /* 8/16 */;
          font-size: 1.625rem /* 26/16 */;
          color: #fefefe;

        }
      }
    }
  }
}
</style>
