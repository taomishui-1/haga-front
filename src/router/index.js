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
        iconName:'home',
        components:{
            default:()=>import('@/pages/home/index.vue'),
            footer:()=>import('@/pages/footer/index.vue')
        }
    },
    {
        path:'/task',
        title:'任务',
        iconName:'task',
        components:{
            default:()=>import('@/pages/task/index.vue'),
            footer:()=>import('@/pages/footer/index.vue')
        }
    },
    {
        path:'/award',
        title:'领奖',
        iconName:'award',
        components:{
            default:()=>import('@/pages/award/index.vue'),
            footer:()=>import('@/pages/footer/index.vue')
        }
    },
    {
        path:'/my',
        title:'我的',
        iconName:'my',
        components:{
            default:()=>import('@/pages/my/index.vue'),
            footer:()=>import('@/pages/footer/index.vue')
        }
    },
    {
        path:'/',
        redirect:'/home'
    }
]

var router =  new Router({
    routes:routes
})
export default router;


