import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
// import my from '@/pages/my/index.vue'
// import award from '@/pages/award/index.vue'
// import shop from '@/pages/shop/index.vue'
Vue.use(Router)

const routes=[
    // mode: 'history',  //去掉url的#
    {
        path:'/login',
        title:'登陆',
        name:'登陆',
        components:{
            default:()=>import('@/pages/user/login.vue'),
        }
    },
    {
        path:'/home',
        title:'游戏',
        name:'游戏',
        iconName:'home',
        components:{
            default:()=>import('@/pages/home/index.vue'),
            footer:()=>import('@/pages/footer/index.vue'),
            header:()=>import('@/pages/header/amountHeader.vue')
        },
        // children: [
        //     {
        //       path: '',
        //       redirect: 'date1'
        //     },
        //     {
        //       path: 'date1',
        //       component: () => import('@/components/life/date1')
        //     },
        // ],
        meta:{
            title:'游戏'
        }
    },
    {
        path:'/task',
        title:'任务',
        name:'任务',
        iconName:'task',
        components:{
            default:()=>import('@/pages/task/index.vue'),
            footer:()=>import('@/pages/footer/index.vue'),
            header:()=>import('@/pages/header/amountHeader.vue'),
            title:()=>import('@/pages/header/arrowHeader.vue'),
        },
        meta:{
            title:'任务'
        }
    },
    {
        path:'/award',
        title:'领奖',
        name:'领奖',
        iconName:'award',
        components:{
            default:()=>import('@/pages/award/index.vue'),
            footer:()=>import('@/pages/footer/index.vue'),
            header:()=>import('@/pages/header/amountHeader.vue'),
            title:()=>import('@/pages/header/arrowHeader.vue'),
        },
        meta:{
            title:'领奖'
        }
    },
    {
        path:'/award/detail',
        title:'商品详情',
        name:'商品详情',
        iconName:'award',
        components:{
            default:()=>import('@/pages/award/detail.vue'),
            title:()=>import('@/pages/header/arrowHeader.vue'),
        },
        meta:{
            title:'商品详情'
        }
    },
    {
        path:'/my',
        title:'我的',
        name:'我的',
        iconName:'my',
        components:{
            default:()=>import('@/pages/my/index.vue'),
            footer:()=>import('@/pages/footer/index.vue'),
            header:()=>import('@/pages/header/arrowHeader.vue'),
            
        },
        meta:{
            title:'我的'
        }
    },
    {
        path:'/account',
        title:'个人中心',
        name:'个人中心',
        components:{
            default:()=>import('@/pages/my/account.vue'),
            header:()=>import('@/pages/header/arrowHeader.vue'),
            
        },
        meta:{
            title:'个人中心'
        }
    },
    {
        path:'/link',
        title:'联系客服',
        name:'联系客服',
        components:{
            default:()=>import('@/pages/my/link.vue'),
            header:()=>import('@/pages/header/arrowHeader.vue'),
            
        },
        meta:{
            title:'联系客服'
        }
    },
    // 游戏--商城
    {
        path:'/store',
        title:'商城',
        name:'商城',
        iconName:'store',
        components:{
            default:()=>import('@/pages/store/store.vue'),
            header:()=>import('@/pages/header/arrowHeader.vue'),
            
        },
        meta:{
            title:'商城'
        }
    },
    // 游戏--榜单
    {
        path:'/ranking',
        title:'榜单',
        name:'榜单',
        iconName:'ranking',
        components:{
            default:()=>import('@/pages/ranking/ranking.vue'),
            header:()=>import('@/pages/header/arrowHeader.vue'),
            
        },
        children: [
            {
              path: '',
              redirect: 'rankprofit'
            },
            {
              path: 'rankprofit',
              name:'盈利榜',
              component: () => import('@/pages/ranking/rankprofit.vue')
            },
            {
                path: 'ranklevel',
                name:'等级榜',
                component: () => import('@/pages/ranking/ranklevel.vue')
            },
        ],
        meta:{
            title:'榜单'
        }
    },
    {
        path:'/',
        redirect:'/home'
    }
]
// router.beforeEach((to,from,next) =>{
//     // 路由发生变化修改页面title
//    if (to.meta.title) {
//      document.title = to.meta.title;
//    }
// }
var router =  new Router({
    routes:routes
})


export default router;


