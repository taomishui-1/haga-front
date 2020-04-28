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
			box-sizing: border-box;
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
		// 本期榜单，
		.title{
			height: 1.875rem /* 30/16 */;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			padding:0 1.25rem /* 20/16 */;
			h3{
				font-size: 1.875rem /* 30/16 */;
				margin-right:1rem;
			}
			.countdown{
				flex: 1;
				font-size: 1.25rem /* 20/16 */;
				color:@main;
				text-align: left;
			}
			.oldRanking{
				font-size: 1.25rem /* 20/16 */;
				color:#757575;
				display: flex;
				height: 100%;
				align-items: center;
				img{
					width:.875rem /* 14/16 */;
					height: auto;
					margin-left:0.5rem;
				}
			}
		}
		// 前三名
		.topthree{
			display: flex;
			justify-content: space-between;
			height: 17rem /* 252/16 */;
			margin-top: 2rem /* 32/16 */;
			margin-top: 2.5rem /* 40/16 */;
			padding:0 1.875rem /* 30/16 */;
			box-sizing: border-box;
			dt{
				// width:9.0625rem /* 145/16 */;
				height: 10.4375rem /* 167/16 */;
				.imgWrap{
					// width:9.625rem /* 154/16 */;
					height: 100%;
					position: relative;
					.imgBorder{
						width:100%;
						height: auto;
						position: absolute;
						bottom:0;
						left:0;
						z-index: 2;
					}
					.image{
						// width: 100%;
						height: auto;
						position: absolute;
						z-index: 1;
					}
				}
				.imgBorder{}
			}
			dd{
				color:#4e4e4e;
				&:nth-of-type(1){
					font-size: 1.375rem /* 22/16 */;
					margin-top:1rem;
				}
				&:nth-of-type(2){
					color: @main;
					font-size: .875rem /* 14/16 */;
					margin-top:.5rem;
				}
				&:nth-of-type(3){
					font-size: 1.125rem /* 18/16 */;
					margin-top:.5rem;
				}
			}
		}
		.first{
			.imgWrap{
				width:9.625rem /* 154/16 */;
			}
			.image{
				width:6.4375rem /* 103/16 */;
				bottom:1.9rem /* 36/16 */;
				left:1.5rem /* 24/16 */;
			}
		}
		.second{
			.imgWrap{
				width:9.0625rem /* 145/16 */;
			}
			.image{
				width: 6.5625rem /* 105/16 */;
				bottom:1.2rem /* 36/16 */;
				left:1.5rem /* 24/16 */;
			}
		}
		.third{
			.imgWrap{
				width: 9.0625rem /* 145/16 */;
			}
			.image{
				width: 6rem /* 96/16 */;
				bottom:1.9rem /* 36/16 */;
				left:1.5rem /* 24/16 */;
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
	.rankList{
		margin:2rem 0 12rem;
		table{
			background: #f7f7f7;
			border:0;
			width:100%;
			border-radius: 1.875rem /* 30/16 */;
			border-spacing: 0;
			tr{
				height: 4.6875rem /* 75/16 */;
				border:0;
				font-size: 1.25rem /* 20/16 */;
				&:nth-of-type(even){
					background: #fff;
				}
				&:last-of-type{
					height: 3.125rem /* 50/16 */;
				}
				th{
					border:0;
					color: #4e4e4e;
				}
				td{
					border:0;
					&:nth-of-type(1){
						color: #343434;
					}
					&:nth-of-type(2){
						color: #343434;
						// text-align: center;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					&:nth-of-type(3){
						color: #636363;
					}
					&:nth-of-type(4){
						color: #636363;
					}
				}
				.name{
					height: 4.6875rem /* 75/16 */;
					overflow: hidden;
					img{
						width: 2.375rem /* 38/16 */;
						height: 2.375rem /* 38/16 */;
						margin-right: 1rem /* 16/16 */;
						float: left;
						border-radius: 50%;
					}
					p{
						text-align: left;
						height: 2.375rem /* 38/16 */;
						line-height: 2.375rem /* 38/16 */;
					}
				}
			}	
		}
	}
	.lookAllButton{
		width:100%;
		p{
			float: left;
			margin-left:35%;
			color:@main;
		}
		img{
			width:1.5rem /* 24/16 */;
			float: left;
			margin-left:.75rem /* 12/16 */;
		}
	}
	.packup{
		// height: ;
		margin-top:1.25rem /* 20/16 */;
		img{
			transform: rotate(180deg);
		}
	}
}
</style>
