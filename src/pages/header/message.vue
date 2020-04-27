<template>
    <div class="message">
        <img src="@/assets/icons/header/message.png" alt="" class="icon">
        <div class="spot"></div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="less">
@import '~@/styles/main.less';
.message{
    float:right;
    height: 4.75rem /* 76/16 */;
    width:2.5rem /* 40/16 */;
    display: flex;
    align-items: center;
    position: relative;
    img{
        width:2.5rem /* 40/16 */;
    }
    .spot{
        width:1rem;
        height: 1rem;
        background: #FF3B3B;
        border-radius: 50%;
        position: absolute;
        right:-0.1rem;
        top:0.8rem;
    }
}
</style>