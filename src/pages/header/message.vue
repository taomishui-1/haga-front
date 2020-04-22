<template>
    <div class="message">
        <img src="@/assets/icons/header/message.png" alt="" class="icon">
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.message{
    float:right;
    height: 4.75rem /* 76/16 */;
    width:2.5rem /* 40/16 */;
    display: flex;
    align-items: center;
    img{
        width:2.5rem /* 40/16 */;
    }
}
</style>