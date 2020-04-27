<template>
  <div id="app">
    <div id="islogin">
      <!-- <Header></Header> -->
      <router-view name="title"></router-view>
      <router-view name="header"></router-view>
      <!-- <router-view ></router-view> -->
      <div id="main">
        <transition name="fade">
          <router-view></router-view>
      </transition>
      </div>
      
      <router-view name="footer"></router-view>
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './pages/home/index.vue'
// import Footer from './pages/footer/index.vue'
// import Login from './pages/user/login.vue'
export default {
  name: 'App',
  components: {
    // Login,
    // Footer,
    // Header
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="less">
// @import '@/styles/main.less';
html,body{
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  
  #islogin{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    #main{
      flex: 1;
      width:100%;
      overflow: hidden;
      // background: #f2f2f2;
      overflow-y:auto;
      // margin-top:4.75rem /* 76/16 */;
    }
  }
  #header{
    // height: 4.75rem /* 76/16 */;
    // width:100%;
    // position: fixed;
    // top:0;
    // left:0;
    padding:0 2rem /* 32/16 */;
    margin-top:.8rem;
}
}
</style>
