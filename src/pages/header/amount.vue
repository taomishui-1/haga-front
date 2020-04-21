<template>
    <div class="amountWrap">
        <div class="amount">
            <img src="@/assets/images/common/avatar.png" alt="" class="icon">
            <span></span>
            <img src="" alt="" class="plus">
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.amountWrap{
    width:10.375rem /* 166/16 */;
    height: 1.875rem /* 30/16 */;
    background: #e3e3e3;
    border-radius: .9375rem /* 15/16 */;
    .icon{
        width:2.875rem /* 46/16 */;
    }
    .plus{
        width:2.5rem /* 40/16 */;
    }
}
</style>