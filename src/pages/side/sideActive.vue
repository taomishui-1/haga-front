<template>
  <div class="sideActive">
    <ul>
      <li v-for="(item,index) of activeList" :key="index">
        <img :src="require('@/assets/images/side/active0'+(index+1)+'.png')" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        activeList:[1,2,3,4]
      }
    }
  }
</script>

<style lang="less" scoped>
.sideActive{
  padding:3.75rem /* 60/16 */ 2.5rem /* 40/16 */;
  ul {
    li{
      img{
        width:100%;
        height: auto;
        margin-bottom:2.125rem /* 34/16 */;
      }
    }
  }
}
</style>