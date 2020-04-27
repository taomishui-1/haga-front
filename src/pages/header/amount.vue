<template>
    <div class="amountWrap">
        <div class="amount">
            <img src="@/assets/icons/header/amount.png" alt="" class="icon">
            <span>{{amount}}</span>
            <img src="@/assets/icons/header/plus.png" alt="" class="plus">
        </div>
    </div>
</template>


<script>
export default {
    props:{
        amount:{
            type:String
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.amountWrap{
    height:4.75rem /* 76/16 */;
    margin-right:2.5rem /* 45/16 */;
    margin-left:1.0625rem /* 17/16 */;
    display:flex;
    align-items:center;
    float: left;
    .amount{
        height: 1.875rem /* 30/16 */;
        background: #e3e3e3;
        border-radius: .9375rem /* 15/16 */;
        display: flex;
        align-items:center;
        justify-content:space-between;
        position: relative;
    }
    .icon{
        width:2.875rem /* 46/16 */;
        position: absolute;
        left:-1.0625rem /* 17/16 */;
    }
    .plus{
        width:2.5rem /* 40/16 */;
        position: absolute;
        right:-.625rem /* 10/16 */;
    }
    span{
        // width:100%;
        display:inline-block;
        padding:0 2.8125rem /* 45/16 */ 0 2.125rem /* 34/16 */;
        font-size:1.25rem /* 20/16 */;
    }
}
</style>