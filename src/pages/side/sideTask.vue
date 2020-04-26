<template>
  <div class="sideTaskWrap">
    <SideNewTask v-if="type==1"></SideNewTask>
    <SideMainTask v-else></SideMainTask>
  </div>
</template>

<script>
import SideNewTask from './sideNewTask'
import SideMainTask from './sideMainTask'
  export default {
    components:{
      SideNewTask,
      SideMainTask
    },
    data(){
      return {
        type:2,   //1 新人任务 2 主线任务
      }
    }
  }
</script>

<style lang="less">
.tabTitle{
  img{
    width: 80%;
    height: auto;
    margin:0 auto;
  }
}
.sideTask{
  .taskList{
    height: 100%;
    overflow: auto;
  }
  .taskList li:nth-of-type(odd){
  background:transparent ;
  }
  .taskList li:nth-of-type(even){
    background:#fff;
  }
  // 
  .taskList li .content .bottom .gameProgress{
    background:#a0a0a0 ;
  }
  .taskList li .content .bottom .gameProgress .progressText{
    color:#fff;
  }
  .taskList li .content .bottom .telcharge{
    margin-left:.8rem /* 20/16 */;
  }
  .button{
    display: flex;
    align-items: center;
    margin-right:.75rem /* 12/16 */;
    img{
      width:5.6rem /* 95/16 */;
      height: auto;
    }
  }
}
</style>