<template>
  <div id="header">
      <Amount :amount='userInfo.amount'></Amount>
      <BillAmount :billAmount="userInfo.billAmount"></BillAmount>
      <JdAmount :jdAmount="userInfo.jdAmount" v-if="messageShow"></JdAmount>
      <Message v-if="messageShow"></Message>
      <p v-else class="lookAward">查看我的奖品</p>
  </div>
</template>

<script>
import Amount from '@/pages/header/amount.vue'
import BillAmount from '@/pages/header/billAmount.vue'
import JdAmount from '@/pages/header/jdAmount.vue'
import Message from '@/pages/header/message.vue'
import {transInteger,transFragment} from '@/utils/trans'
export default {
  components: {
    Amount,
    BillAmount,
    JdAmount,
    Message
  },
  name: 'App',
  data(){
    return {
      userInfo:{},
      messageShow:true
    }
  },
  created(){
    if(this.$route.path.indexOf('/award')>-1){
      this.messageShow=false
    }
    console.log()
    var userInfo=JSON.parse(localStorage.getItem('USER_INFO'))
    userInfo.amount=transInteger(userInfo.amount)
    userInfo.billAmount=transFragment(userInfo.billAmount)
    userInfo.jdAmount=transFragment(userInfo.jdAmount)
    this.userInfo=userInfo
  }

}
</script>

<style lang="less" scoped>
.lookAward{
  font-size: 1.375rem /* 22/16 */;
  font-weight: 900;
  line-height: 4.75rem /* 76/16 */;
  float: right;
  
}

</style>
