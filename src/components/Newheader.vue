<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-13 17:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="server">
    <div class="headerMain">
        <div class="header">
            <span class="iconfont icon-shangyibu1" @click="goback"></span>
            <p>消息</p>
            <span class="iconfont icon-shezhi1"></span>
        </div> 
    </div>
</div>
</template>
<script>
export default {
    name:"Newheader",
    data(){
        return{

        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.headerMain{
    width:100%;
    height:.5rem;
    background:white;
}
.header{
    width:96%;
    margin:0 auto;
    height:.5rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:16px;
    position:fixed;
    top:0;
    left:0;
    z-index: 1000;
}
.header p{
    font-weight: bold;
    font-size:18px;
}
.header .iconfont{
    font-size:.25rem;
}
</style>