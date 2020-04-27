<template>
  <div id="task" @click="taskType()">
    <NewTask v-if="taskData" :newTaskData="newTaskData"></NewTask>
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
import {Task} from '@/api'
import {joinImgUrl} from '@/utils/filters'
export default {
  components: {
    // AmountHeader,
    NewTask,
    MainTask
  },
  name: "App",
  data(){
    return {
      taskData:true,
      taskList:[],
      newTaskData:{}
    }
  },
  created(){
    $jq('.name p').text(this.$route.name)
    Task.fetchAchievementTask().then(res=>{
      // console.log('task',res.data.data)
      if(res.data.errcode==200){
        var taskList=res.data.data
        taskList.forEach(function(item){
          item.subTask.forEach(function(itm){
            // console.log(itm)
            itm.icon=joinImgUrl(itm.icon)
            itm.awardsIcon=joinImgUrl(itm.awardsIcon)
            itm.finishNum=itm.finishNum > itm.opsNum ? itm.opsNum : itm.finishNum
            itm.proWidth=(itm.finishNum/itm.opsNum*10000)/100.00+'%'
          })
        })
        this.taskList=taskList
        // console.log('newList',this.taskList)
  // 新人任务
        if(this.taskList[0].id==1){
          this.newTaskData=this.taskList[0]
          // console.log("----------",this.newTaskData,typeof(this.newTaskData))
        }
      }
    })
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
