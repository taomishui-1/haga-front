<template>
    <div class="arrowHeader">
        <div class="arrow">
            <img src="@/assets/icons/header/arrow_left.png" alt="" @click="returnPage()">
        </div>
        <div class="name">
            <p>{{name}}</p>
        </div>
        <div class="null"></div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            name:''
        }
    },
    methods:{
        returnPage(){
            // console.log('...',this.$route.path)
            if(this.$route.path.indexOf('ranking')>-1){
                this.$router.push({path:'/home'})
            }else{
                this.$router.go(-1)
            }
            
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        this.name=this.$route.name
    },
    mounted(){
        console.log('mounted')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    updated(){
        console.log("updated^",this.$route.name)
        // this.name=this.$route.name
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/main.less';
.arrowHeader{
    height:6rem /* 112/16 */;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 2.8125rem /* 45/16 */;
    border-bottom:1px solid #ccc;
    .arrow{
        width:1.2rem /* 27/16 */;
        img{
            width: 100%;
            height: auto;
        }
    }
    .name{
        height: 7rem /* 112/16 */;
        p{
            font-size: 2rem /* 32/16 */;
            line-height: 7rem /* 112/16 */;
            font-weight: 900;
        }
    }
}
</style>