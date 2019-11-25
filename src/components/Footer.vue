<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 11:42:08
 * @Description: "这是汇率展示"
 -->

<template>
    <div class="footer1">
        <router-link to="/Index" class="nav1">
            <div :class="{'Cls':footCls[0]}"  @touchstart="change(0)">
                <span class="iconfont icon-shouye"></span>
                <span class="title">首页</span>
            </div>
        </router-link>
        <router-link to="/Money" class="nav1">
            <div :class="{'Cls':footCls[1]}"  @touchstart="change(1)">
                <span class="iconfont icon-licai"></span>
                <span class="title">理财</span>
            </div>
        </router-link>
        <router-link to="/Life" class="nav1">
            <div :class="{'Cls':footCls[2]}"  @touchstart="change(2)">
                <span class="iconfont icon-shenghuo"></span>
                <span class="title">生活</span>
            </div>
        </router-link>
        <router-link to="/Mypage" class="nav1">
            <div :class="{'Cls':footCls[2]}"  @touchstart="change(3)">
                <span class="iconfont icon-wode"></span>
                <span class="title">我的</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Footer",
    data(){
        return{
           key:'0',
           oldIndex:'',
           index:''
        }
    },
    computed: {
        footCls(){
            // console.log(1111111)
            console.log(this.$store.state.footCls)
            return this.$store.state.footCls
        }
    },
    methods:{
        change(index){
            this.index=index
            // console.log(index)
            console.log(this.$store.state.footCls)
            this.$store.commit('changeFootCls',index)
        }
    }
}
</script> 

<style scoped>
.footer1{
    width: 100%;
    height: .5rem;
    background-color: rgb(250, 250, 250);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1001;
}
a{
    color: #000;
}
.footer1 .iconfont{
    font-size: .2rem;
    display: block;
}
.title{
    display: block;
    font-size: .14rem;
}
.nav1{
    text-align: center;
}
 /* .Cls span{
    color: rgb(252,85,92) !important;
} */
</style>
