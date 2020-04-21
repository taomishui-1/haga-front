import Vue from 'vue'
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/dist/antd.css';
import { Button,FormModel,Input,Icon,Form} from 'ant-design-vue';
import 'swiper/css/swiper.min.css';
import "@/styles/animate.css";
// import 'ant-design-vue/lib/button/style';
// import 'lib-flexible/flexible';
import filters from './filters/index'
import router from './router'
import App from './App';

Vue.component(Button.name, Button)
Vue.component(FormModel.name,FormModel)
Vue.component(Input.name,Input)
Vue.component(Icon.name,Icon)
Vue.component(Form.name,Form)
// Vue.component(Message.name,Message)

// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})


Vue.config.productionTip = false

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
