<template>
  <div id="footer">
    <ul>
      <router-link
        tag="li"
        :to="item.path"
        v-for="(item,index) of list"
        :key="index"
      >
        <img class="active"
          :src="require('@/assets/icons/tabbar/'+item.title+'.png')"
          alt
        />
        <img
          :src="require('@/assets/icons/tabbar/'+item.title+'-un.png')"
          alt
        />
        <img :src="item.icon" alt="" v-show="item.icon" class="icon pulse">
        <p>{{item.name}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "home",
      list: [
        {
          name: "游戏",
          title: "home",
          path: "/home",
          keys: 0
        },
        {
          name: "任务",
          title: "task",
          path: "/task",
          keys: 1,
          icon:require('@/assets/icons/tabbar/task_icon.png')
        },
        {
          name: "领奖",
          title: "award",
          path: "/award",
          keys: 2
        },
        {
          name: "我的",
          title: "my",
          path: "/my",
          keys: 3
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/styles/main.less";
#footer {
  height: 6.875rem /* 110/16 */;
  width: 100%;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      &.router-link-exact-active.router-link-active {
        p {
          color: @footerActive;
        }
        img{
            display: none;
        }
        .active{
          display: block;
      }
      .icon{
          display: block;
      }
      }
      img {
        width: auto;
        height: 2.75rem /* 44/16 */;
        display: block;
      }
      .active{
          display: none;
      }
      .icon{
          position: absolute;
          width:8.4375rem /* 135/16 */;
          top:-2.1875rem /* 35/16 */;
      }
      p {
        font-size: 1.25rem /* 20/16 */;
        height: 1.25rem /* 20/16 */;
        // line-height: 2.125rem /* 34/16 */;
        margin-top: .375rem /* 6/16 */;
        color: @footerDefine;
      }
    }
  }
}
.scrale{

}

</style>
