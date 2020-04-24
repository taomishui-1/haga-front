<template>
  <div id="modalWrap">
    <!-- 领取成功的modal -->
    <div id="modal" v-show="!visible">
      <div class="confirm" @click="confirm()">
        <img src="@/assets/images/common/confirm.png" alt="">
      </div>
      <div class="content">
        <!-- <slot name="header"></slot> -->
        <div class="item" v-for="(item,index) of data" :key="index">
        <div class="imgWrap">
          <img :src="item.imageUrl" alt="">
        </div>
        <p>× {{item.value}}</p>
      </div>
      </div>
    </div>
    <div id="mask" v-show="!visible">
    </div>
  </div>
</template>

<script>
import $jq from 'jquery'


export default {
  data(){
    return {
      
    }
  },
  props:{
    // visible:{
    //   type:Boolean,
    //   default:false,
    //   required:true
    // },
    data:{
      type:Array,
      default:function(){return []}
    },
    visible:{
      type:Boolean
    },
    title:{
      type:String,
    }
  },
  watch:{
  },
  created(){
  },
  mounted(){
    console.log("???")
    if(this.visible){
      $jq('body').css({
        'overflow':'hidden'
      })
    }else{
      $jq('body').css({
        'overflow':'auto'
      })
    }
    //
    
  },
  methods:{
    confirm(){
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="less" scoped>
#modal{
  width:31.25rem /* 500/16 */;
  height: 40.25rem /* 644/16 */;
  background: url('~@/assets/images/common/modal.png') no-repeat center;
  background-size: contain;
  position: fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index: 1000;
  margin:auto;
  .confirm{
    width:13.125rem /* 210/16 */;
    height: 4.5rem /* 72/16 */;
    position: absolute;
    bottom:1.375rem /* 22/16 */;
    left:0;
    right: 0;
    margin:0 auto;
    z-index: 10;
    img{
      width:100%;
      height: auto;
    }
  }
  .content{
    width:29rem /* 468/16 */;
    height: 16.6875rem /* 267/16 */;
    position: absolute;
    bottom:9rem /* 144/16 */;
    left: 0;
    right: 0;
    margin:0 auto;
    z-index:1;
    display: flex;
    justify-content: space-around;
    .item{
      display: flex;
      flex-direction: column;
      flex: 1;
      .imgWrap{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 7.875rem /* 126/16 */;
        }
      }
      p{
          font-size: 1.875rem /* 30/16 */;
      }
    }
  }
}
#mask{
  width:100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: #000;
  opacity: .5;
  z-index: 999;
}
</style>
