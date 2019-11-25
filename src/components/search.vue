<!--
 * @Author: 陈晶华
 * @Date: 2019-11-06 21:19:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 12:45:38
 * @Description: "这是首页的头部搜索框"
 -->
<template>
    <header>
        <router-link to="./Login" class="my1" v-if="check()">
            <span class="iconfont icon-denglu"></span>
            <span class="tit1">登录</span>
        </router-link>
        <p class="my1" v-if="!check()" @click="esc()">
            <span class="iconfont icon-tuichu1"></span>
            <span class="tit1">退出</span>
        </p>
        <div class="inp">
            <span class="iconfont icon-sousuo"></span>
            <router-link to="./Search" class="sea">
                <input type="text" placeholder="请输入" class="search" @click="gosearch()">
            </router-link>
            <span class="iconfont icon-voice"></span>
        </div>
        <router-link to="./Kefu" class="kefu">
            <span class="iconfont icon-kefu"></span>
            <span class="tit1">客服</span>
        </router-link>
        <router-link to="./News" class="news">
            <span class="iconfont icon-xiaoxi1"></span>
            <span class="tit1">消息</span>
        </router-link>
    </header>
</template>
    <script>
    export default {
    name:"activeBanner",
    data(){
        return {
            test:[]
        }
    },
    created:function(){
        this.test=window.localStorage.getItem("tel")
        console.log(this.test)
    },
    mounted:function(){         
    },
    methods:{
        esc(){
            window.localStorage.removeItem('tel')
             this.$router.push({
                        path:'/Login'
                    })
        },
        check(){
            if(window.localStorage.getItem("tel")){
                return false;
            }else{
                return true;
            }
        }

    }
}
    </script>
    <style scoped>
        header{
            height: .5rem;
            width: 100%;
            background: #f6545f;
            font-size: .15rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
        }
        header span{
            display: block;
            text-align: center;
        }
        .kefu,.my1,.news{
            color: #fff;
        }
        .icon-denglu,.icon-xiaoxi1{
            font-size: .2rem;
        }
        .icon-kefu{
            font-size: .22rem;
        }
        .tit1{
            font-size: .12rem;
        }

        .inp{
            position: relative;
            height: .32rem;
            border: none;
             width: 55%;
        }
        .inp .icon-sousuo{
            position: absolute;
            left: .08rem;
            font-size: .14rem;
            height: 100%;
            line-height: .32rem;
        }
        .inp .icon-voice{
            position: absolute;
            right:.08rem;
            top: 0;
            display: block;
            font-size: .14rem;
            height: 100%;
            line-height: .32rem;
            z-index: 100;
        }
        .search{
            width: 100%;
            height: 100%;
            border: none;
            border-radius: .16rem;
            outline: none;
            padding-left: .3rem;
            padding-right: .3rem;
            box-sizing: border-box;
        }
    </style>