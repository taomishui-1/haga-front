<template>
  <div id="login">
    <p>login</p>
    <form action="">
      <input type="text" placeholder="请输入账号" class="userneme" v-model="username" >
      <input type="text" placeholder="请输入密码" class="password" v-model="password" >
      <button @click.prevent="confirm()">登陆</button>
    </form>
  </div>
</template>

<script>
import { User} from '@/api'
import Cookies from 'js-cookie'
  export default {
    data(){
      return {
        username:'',
        password:''
      }
    },
    methods:{
      confirm(){

        const params={
          'username':this.username,
          'password':this.password,
          'type': "account"
        }
        User.login(params)
          .then(res => {
            console.log('res',res)
            if(res.data.errmsg=='ok'){
              Cookies.set('Token',res.data.data)
              // localStorage.setItem('Token',res.data.data)
              // localStorage.setItem('isLogin',true)
              this.$router.push({path: '/home'})
            }
          })
          .then(() => {
            this.loading = false;
          });
      
        }
    }
  }
</script>

<style lang="less" scoped>

</style>