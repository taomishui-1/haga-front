<template>
  <div id="app">
    <Header/>
    <Home id="main"/>
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './pages/home/index.vue'
import Footer from './pages/footer/index.vue'
import Header from './pages/header/index.vue'

export default {
  name: 'App',
  components: {
    Home,
    Footer,
    Header
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
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  #main{
    flex: 1;
  }
}
</style>
