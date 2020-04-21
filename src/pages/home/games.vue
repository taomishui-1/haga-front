<template>
    <div class="games">
        <div class="recomment">
            <img src="@/assets/images/home/game_recom.png" alt="">
        </div>
        <div class="gamesList">
            <div class="game_item" v-for="(item,index) of list" :key="index">
                <img :src="item.imgUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    imgUrl:require('@/assets/images/home/game01.png'),
                    name:'快乐连消'
                },
                {
                    imgUrl:require('@/assets/images/home/game02.png'),
                    name:'快乐连消'
                },
                {
                    imgUrl:require('@/assets/images/home/game03.png'),
                    name:'快乐连消'
                },
                {
                    imgUrl:require('@/assets/images/home/game04.png'),
                    name:'快乐连消'
                },
                {
                    imgUrl:require('@/assets/images/home/game05.png'),
                    name:'快乐连消'
                },
                {
                    imgUrl:require('@/assets/images/home/game06.png'),
                    name:'快乐连消'
                },
                {
                    imgUrl:require('@/assets/images/home/game01.png'),
                    name:'快乐连消'
                },
                {
                    imgUrl:require('@/assets/images/home/game02.png'),
                    name:'快乐连消'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.games{
    margin-top:2.9375rem /* 47/16 */;
    .recomment{
        margin-bottom:1.75rem /* 28/16 */;
        img{
            width:100%;
            height: auto;
        }
    }
    .gamesList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .game_item{
            width:49%;
            height: 8.75rem /* 140/16 */;
            margin-bottom:1.5rem /* 24/16 */;
            &:nth-of-type(odd){
                // margin-right: .9375rem /* 15/16 */;
            }
            img{
                width:100%;
                height: auto;
            }
        }
    }
}

</style>