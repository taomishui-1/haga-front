<template>
  <div id="rank">
    <ul class="tabList">
      <router-link tag="li" :to="item.path" v-for="(item, index) of rankList" :key="index">
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
  name: "App",
  data() {
    return {
      rankList: [
        {
          name: "盈利榜",
          path: "rankprofit"
        },
        {
          name: "等级榜",
          path: "ranklevel"
        }
      ]
    };
  },
  created() {}
};
</script>

<style lang="less">
@import "~@/styles/main.less";
#rank {
  .tabList {
    height: 3.25rem /* 52/16 */;
    margin-top: 1.875rem /* 30/16 */;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0 4.5625rem /* 73/16 */;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      span {
        color: #6d6d6d;
        font-size: 1.875rem /* 30/16 */;
      }
      .solid {
        width: 2rem /* 32/16 */;
        height: 0.25rem /* 4/16 */;
        background: #eb6362;
        display: none;
      }
      &.router-link-exact-active.router-link-active {
        span {
          color: #000;
        }
        .solid {
          display: block;
        }
      }
    }
  }
  .ranking {
		padding: 0 1.75rem /* 28/16 */;
		margin-top: 1.5rem /* 24/16 */;
		.top{
			height: 9.0625rem /* 145/16 */;
			width:100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding:0 3.625rem /* 58/16 */ 0 2.25rem /* 36/16 */;
			dl{
				display: flex;
				flex-direction: column;
				dt{
					display: flex;
					margin-bottom:1.375rem /* 22/16 */;
					position: relative;
					height: 2.25rem /* 36/16 */;
					align-items: center;
					.img{
						height: 2.25rem /* 36/16 */;
						margin-right:.75rem /* 12/16 */;
					}
					p{
						color: #fff;
					}
					.icon{
						width: 1.75rem /* 28/16 */;
						position: absolute;
						right:-2rem /* 28/16 */;
						top:-.625rem /* 10/16 */;
					}
				}
				dd{
					font-size: 1.5rem /* 24/16 */;
					color: #fff;
				}
				.null{
					font-style: italic;
				}
			}
		}
		// 本期榜单
		.time{
			width:100%;
			height: 2.25rem /* 36/16 */;
			background:#f7f7f7;
			border-radius: 1.125rem /* 18/16 */;
			margin:1rem /* 16/16 */ 0 2.25rem /* 36/16 */;
			p{
				font-size: 1.25rem /* 20/16 */;
				color:#3c3b3b;
				line-height: 2.25rem /* 36/16 */;
				span{
					color: @main;
				}
			}
		}
	}
	#rankprofit{
			.top{
				background:url('~@/assets/images/rank/profit-bg.png') no-repeat center;
				background-size: contain;
			}
		}
		#ranklevel{
			.top{
				background:url('~@/assets/images/rank/level-bg.png') no-repeat center;
				background-size: contain;
			}
		}
}
</style>
