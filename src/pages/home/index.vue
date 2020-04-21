<template>
  <div class="hello">
    <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
      <a-form-model-item>
        <a-input v-model="formInline.user" placeholder="Username">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="formInline.password" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.user === '' || formInline.password === ''"
        >Log in</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { User } from '@/api'
import { Shop } from '@/api'
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline.user, this.formInline.password);
      // this.$message.success('This is a success message');
      const params={
        'username':this.formInline.user,
        'password':this.formInline.password,
        'type': "account"
      }
      User.login(params)
        .then(res => {
          console.log('res',res)

          // if (res.result === "0") {
          //   this.$store.dispatch("setToken", res.token);
          //   this.moveright = true;
          //   this.intervalid = setInterval(() => {
          //     this.$router.push("/home");
          //     clearInterval(this.intervalid);
          //   }, 700);
          // } else if (res.result === "5") {
          //   this.isShowGraphLoginCode = "graphLoginCode";
          //   this.resultMessage = res.resultMessage;
          //   this.getGraph();
          // } else {
          //   this.resultMessage = res.resultMessage;
          //   this.getGraph();
          // }
        })
        .then(() => {
          this.loading = false;
        });
    }
  },
  created(){
    console.log('llllll')
    Shop.list().then(res=>{
      console.log(res)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
