<template>
  <div id="account">
    <dl class="avatar">
      <dt><p>头像</p></dt>
      <dd>
        <img :src="myInfo.avatar" alt="">
        <img src="@/assets/icons/arrow-right.png" alt="" class="arrow">
      </dd>
    </dl>
    <dl class="name">
      <dt><p>昵称</p></dt>
      <dd>
        <p>{{myInfo.nickname}}</p>
        <img src="@/assets/icons/arrow-right.png" alt="" class="arrow">
      </dd>
    </dl>
    <dl class="id">
      <dt><p>ID</p></dt>
      <dd>
        <p>{{myInfo.uid}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        myInfo:{}
      }
    },
    created(){
      // console.log()
      this.myInfo=JSON.parse(localStorage.getItem('USER_INFO'))
    },
  }
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
#account{
  padding:2rem 0 /* 32/16 */ 0 2rem;
  dl{
    height: 6rem;
    border-bottom:1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 1rem;
    &:last-of-type{
      border: 0;
    }
    dt{
      p{
        font-size: 1.8rem /* 24/16 */;
      }
    }
    dd{
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width:4rem /* 64/16 */;
      }
      .arrow{
        width:1rem /* 20/16 */;
        margin-left:1rem;
      }
      p{
        font-size: 1.8rem /* 24/16 */;
      }
    }
  }
}
</style>