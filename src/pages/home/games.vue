<template>
    <div class="games">
        <div class="recomment">
            <img :src="gameRecommend.icon" alt="">
        </div>
        <div class="gamesList">
            <div class="game_item" v-for="(item,index) of gameList" :key="item.id">
                <img :src="item.icon" alt="">
                <span>{{item.num}}人在玩</span>
                <img src="@/assets/images/home/jackpot.png" alt="" class="jackpot" v-show="index==0">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        gameList:{
            type:Array
        },
        gameRecommend:{
            type:Object
        }
    },
    data(){
        return {
            list:[
                {
                    imgUrl:require('@/assets/images/home/game01.png'),
                    name:'快乐连消',
                    num:'12.3万'
                },
                {
                    imgUrl:require('@/assets/images/home/game02.png'),
                    name:'快乐连消',
                    num:'10.1万'
                },
                {
                    imgUrl:require('@/assets/images/home/game03.png'),
                    name:'快乐连消',
                    num:'1526'
                },
                {
                    imgUrl:require('@/assets/images/home/game04.png'),
                    name:'快乐连消',
                    num:'5124'
                },
                {
                    imgUrl:require('@/assets/images/home/game05.png'),
                    name:'快乐连消',
                    num:'3526'
                },
                {
                    imgUrl:require('@/assets/images/home/game06.png'),
                    name:'快乐连消',
                    num:'8531'
                },
            ]
        }
    },
    created(){
        // console.log("games",this.gameList,this.gameRecommend)
    },
    mounted(){
        console.log("games",this.gameList,this.gameRecommend)
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.games{
    margin-top:1.2rem;
    // margin-top:2.9375rem /* 47/16 */;
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
            position: relative;
            &:nth-of-type(odd){
                // margin-right: .9375rem /* 15/16 */;
            }
            img{
                width:100%;
                height: auto;
            }
            span{
                position: absolute;
                font-size: 1.25rem /* 20/16 */;
                color: #fff;
                bottom:1rem;
                right: 1.5rem /* 24/16 */;
                font-weight: 500;
            }
            .jackpot{
                position: absolute;
                width:8rem /* 128/16 */;
                top:-.75rem /* 12/16 */;
                left:-.25rem /* 4/16 */;
            }
        }
    }
}

</style>