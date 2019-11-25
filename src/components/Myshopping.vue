<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-15 17:24:17
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
                    <p>聪明购</p>
                </div>
            </div>
        </div>
        <div class="MidServer">
            <img src="static/img/shopping.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"Myshopping"
}
</script>
<style scoped>
.server{
    width:100%;
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
    width:98%;
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
height:.3rem;
display: flex;
align-items: center;
}
.redBox{
    width:.03rem;
    height:100%;
    background:red;
    margin-right:.06rem;
}
.MidServer{
    width:96%;
    height:1rem;
    /* background:rgb(89, 199, 89); */
    margin:0 auto;
}
.MidServer img{
    width:100%;
    height: 100%;
}
</style>