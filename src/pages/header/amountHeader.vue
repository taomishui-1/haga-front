<template>
  <div id="header">
      <Amount></Amount>
      <BillAmount></BillAmount>
      <JdAmount></JdAmount>
      <Message></Message>
  </div>
</template>

<script>
import Amount from '@/pages/header/amount.vue'
import BillAmount from '@/pages/header/billAmount.vue'
import JdAmount from '@/pages/header/jdAmount.vue'
import Message from '@/pages/header/message.vue'
export default {
  components: {
    Amount,
    BillAmount,
    JdAmount,
    Message
  },
  name: 'App',

}
</script>

<style lang="less" scoped>


</style>
