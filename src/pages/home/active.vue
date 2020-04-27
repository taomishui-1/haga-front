<template>
    <ul class="active">
        <router-link to="/store" tag="li">
            <img src="@/assets/images/home/shop.png" alt="" class="img">
            <p>商城</p>
        </router-link>
        <router-link to="/ranking" tag="li">
            <img src="@/assets/images/home/ranking.png" alt="" class="img">
            <img src="@/assets/images/home/icon_award.png" alt="" class="icon pulse">
            <p>榜单</p>
        </router-link>
        <li>
            <img src="@/assets/images/home/redpacket.png" alt="" class="img">
            <p>幸运红包</p>
        </li>
        <li>
            <img src="@/assets/images/home/7day.png" alt="" class="img">
            <img src="@/assets/images/home/icon_telcharge.png" alt="" class="icon pulse">
            <p>七日福利</p>
        </li>
        <li>
            <img src="@/assets/images/home/cat.png" alt="" class="img">
            <p>招财猫</p>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.active{
    width:100%;
    height: 7.5rem /* 120/16 */;
    // background: violet;
    margin-top: 3.125rem /* 50/16 */;
    display:flex;
    justify-content: space-between;
    align-items: center;
    li{
        position: relative;
        .img{
            width:5.25rem /* 84/16 */;
            height: auto;
        }
        p{
            font-size: .125rem /* 2/16 */;
            margin-top:.75rem /* 12/16 */;
            font-weight: 900;
        }
        .icon{
            width: 4.6875rem /* 75/16 */;
            border:.1875rem /* 3/16 */;
            height: 1.8125rem /* 29/16 */;
            border-radius: .9375rem /* 15/16 */;
            position: absolute;
            top:-.75rem /* 12/16 */;
            right:-2.1875rem /* 35/16 */;
        }
    }
}
</style>