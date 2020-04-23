import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
// import my from '@/pages/my/index.vue'
// import award from '@/pages/award/index.vue'
// import shop from '@/pages/shop/index.vue'
Vue.use(Router)

const routes=[
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
    // 游戏--商城
    {
        path:'/store',
        title:'商城',
        name:'商城',
        iconName:'store',
        components:{
            default:()=>import('@/pages/home/active/store.vue'),
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


