<template>
  <div id="shop">
      <ul class="tabList">
          <router-link tag="li" :to="item.path" v-for = "(item, index) of rankList" :key = "index">
              <span>{{item.name}}</span>
              <div class="solid"></div>
            </router-link>
      </ul>
      <div class="content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
        rankList:[
            {
                name: '盈利榜',
                path: 'rankprofit'
            },
            {
                name: '等级榜',
                path: 'ranklevel'
            }
        ]
    }
  },
  created(){
  }

}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.tabList{
    height: 3.25rem /* 52/16 */;
    margin-top:1.875rem /* 30/16 */;
    display: flex;
    align-items: center;
    justify-content: center;
    li{
        margin:0 4.5625rem /* 73/16 */;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        span{
            color: #6d6d6d;
            font-size: 1.875rem /* 30/16 */;
        }
        .solid{
            width:2rem /* 32/16 */;
            height: .25rem /* 4/16 */;
            background: #eb6362;
            display: none;
        }
        &.router-link-exact-active.router-link-active{
            span{
                color:#000;
            }
            .solid{
                display: block;
            }
        }
    }
}
</style>
