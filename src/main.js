import Vue from 'vue'
import 'swiper/css/swiper.min.css';
// import 'animate.css/animate.min.css';
import "@/styles/animate.css";
// import 'lib-flexible/flexible';
import filters from './filters/index'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import Toast from '@/components/toast'
import store from './store'

// import $ from 'jquery'
import App from './App';

// Vue.use(require('vue-wechat-title'))
Vue.use(VueWechatTitle)
Vue.use(Toast)
// Vue.component(Message.name,Message)



// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
  document.title = to.meta.title
  }
  next()
  console.log("main.js-store",store.getters.getToken)
  if(to.path.indexOf('/login')>-1){
    console.log('goto login')
  }
})


require('./styles/main.less');
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  console.log("htmlWidth",htmlWidth)

  // 1rem=16px 750px

  htmlDom.style.fontSize = `${htmlWidth / 750 * 16}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
