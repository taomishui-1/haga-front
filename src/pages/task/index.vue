<template>
  <div id="task" @click="taskType()">
    <NewTask v-if="taskData"></NewTask>
    <MainTask v-else></MainTask>
  </div>
</template>

<script>
// import Amount from "@/pages/header/amount.vue";
// import BillAmount from "@/pages/header/billAmount.vue";
// import AmountHeader from "@/pages/header/amountHeader.vue";
import NewTask from "@/pages/task/newTask.vue";
import MainTask from "@/pages/task/mainTask.vue";
import $jq from 'jquery'
export default {
  components: {
    // AmountHeader,
    NewTask,
    MainTask
  },
  name: "App",
  data(){
    return {
      taskData:false
    }
  },
  created(){
    $jq('.name p').text(this.$route.name)
  },
  methods:{
    taskType(){
      this.taskData=!this.taskData
    }
  }
};
</script>

<style lang="less">
@import '~@/styles/common.less';
#task {
  // padding: 0 1.75rem /* 28/16 */;
}
.header { 
  height: 3.125rem /* 50/16 */;
}
</style>
