<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-16 01:12:52
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\components\Myheader.vue
 -->
<template>
    <div class="headmain">
        <div class="header">
            <router-link to="/Login">
                <div class="addressBox">
                    <span>北京</span>
                    <i class="iconfont icon-dizhi"></i>
                </div>
            </router-link>
            <p class="titleLift">生活</p>
            <router-link to="./Kefu" class="customer">
                <span class="iconfont icon-kefu"></span>
                <span>客服</span>
            </router-link >
        </div>
    </div>
    
</template>
<script>
export default {
    name:"Myheader"
}
</script>
<style scoped>
.headmain{
    height: .6rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #fff;
}
    .header{
        width:94%;
        height:.6rem;
        margin:0 auto;
        /* background:pink; */
        display: flex;
        justify-content: space-between;
        align-items:center;
        /* position:fixed;
        left:0;
        top:0;
        z-index:10;
        background:white; */
    }
    .addressBox{
        /* width:.5rem; */
        height:.5rem;
        display: flex;
        align-items: center;
    }
    span{
        font-size:16px;
    }
    .icon-dizhi{
        color:#00aaef;
    }
    .header .address{
        font-size:.3rem;
    }
    .titleLift{
        font-size:16px;
    }
    .customer{
        /* display: flex; */
        text-align: center;
        line-height:-.5rem;
    }
    .icon-kefu{
        font-size:.3rem;
    }
    .customer span{
        /* margin-top: -.25rem; */
        /* float: right; */
        /* margin:0 auto; */
        display: block;
        color: #000;
    }
    .headset{
        font-size:.3rem;
        display: block;
        line-height: .5rem;
    }
</style>