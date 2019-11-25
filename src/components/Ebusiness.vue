<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-15 16:56:59
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\components\Myheader.vue
 -->
<template>
     <div class="server">
        <div class="serverBox">
            <div class="topServer">
                <div class="redAdd">
                    <div class="redBox"></div>
                    <p>中银e商</p>
                </div>
            </div>
        </div>
        <div class="MidServer">
            <img src="static/img/e1.jpg" alt="">
        </div>
        <div class="MidServer">
            <img src="static/img/e2.jpg" alt="">
        </div>
        <div class="serverMain">
            <div class="LeftServer">
                <img src="static/img/e3.jpg" alt="">
            </div>
            <div class="LeftServer">
                <img src="static/img/e4.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Ebusiness"
}
</script>
<style scoped>
.server{
    width:94%;
    margin:0 auto;
    /* height:2rem; */
    /* background:rgb(150, 194, 183); */
}

.serverBox{
    width:100%;
    height:.3rem;
    border-top:10px solid #e9edf0;
    border-bottom:1px solid #e9edf0;
}
.topServer{
    width:100%;
    height:.3rem;
    background:white;
    font-size:14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.topServer span{
    color: #00aaef;
}
.redAdd{
    width:100%;
    height:.3rem;
    display: flex;
    align-items: center;
    margin-top:.1rem;
    border-top:1px solid #e9edf0;
    border-right:1px solid #e9edf0;
    margin-bottom: .1rem;
}
.redBox{
    width:.03rem;
    height:100%;
    background:red;
    margin-right:.06rem;
}
.two-span{
    margin-right: 0.1rem;
}
.MidServer{
    width:100%;
    margin:0 auto;
    height:.85rem;
    /* background:rgb(89, 199, 89); */
    margin:0 auto;
    margin-top: .1rem;
}
.MidServer img{
    width:100%;
    height: 100%;
    display: block;
    box-shadow: 0px 0 13px -3px grey;
}
.serverMain{
    display: flex;
    justify-content: space-between;
}
.LeftServer{
    width:44%;
    height:100%;
    /* background:tomato; */
}
.LeftServer img{
    width:100%;
    border:1px solid #e9edf0;    
    box-shadow: 0px 0 13px -3px grey;
}
</style>