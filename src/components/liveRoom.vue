<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 18:54:42
 * @Description: "直播间"
 -->

<template>
    <div class="liveRoom">
        <div class="top1">
            <span class="title">中银直播间</span>
            <a href="#" class="more">更多</a>
        </div>
        <a href="#" class="bottom">
            <img class="p1" src="../assets/img/play1.png" alt="">
            <img class="p2" src="../assets/img/play2.png" alt="">
        </a>
    </div>
</template>

<script>

</script>

<style scoped>
    .liveRoom{
        height: 1.3rem;
        width: 100%;
        padding: .1rem;
        box-sizing: border-box;
        background-color: #fff;
    }
    .top1{
        height: .3rem;
        line-height: .3rem;
        display: flex;
        justify-content: space-between;
    }
    .title{
        font-size: .16rem;
        font-weight: bold;
    }
    .more{
        font-size: .13rem;
        color: #000;
    }
    .bottom{
        height: .9rem;
        width:100%;
        display: block;
        display: flex;
    }
    .bottom .p1{
        width: 30%;
        height: 100%;
        display: block;
    }
    .bottom .p2{
        width: 70%;
        display: block;
        height: 100%;
    }
</style>
