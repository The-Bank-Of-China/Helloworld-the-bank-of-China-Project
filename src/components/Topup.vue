<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-16 13:35:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\components\Myheader.vue
 -->
<template>
     <div class="server">
        <div class="serverBox">
            <div class="topServer">
                <div class="redAdd">
                    <div class="redBox"></div>
                    <p>充话费</p>
                </div>
                <div class="rightBox">
                    <span class="iconfont icon-chonghuafei1"></span>
                    <span class="two-span">充流量</span>
                </div>
                
            </div>
        </div>
        <div class="MidServer">
            <p class="number">号码</p>
            <input type="text" placeholder="请输入充值号码">
            <div class="addressBook">
                <span class="iconfont icon-tongxunlu"></span>
                <p>通讯录</p>
            </div>
        </div>
        <div class="bottomServer">
            <div class="botLittle">
                <li>50元</li>
                <li>100元</li>
                <li>300元</li>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Topup"
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
.two-span{
    margin-right: 0.1rem;
}
.MidServer{
    width:100%;
    height:.6rem;
    /* background:rgb(89, 199, 89); */
    margin:0 auto;
    display: flex;
    border-bottom:1px solid #e9edf0;
}
.MidServer input{
    font-size:16px;
    line-height: .6rem;
    margin-right:.2rem;
    border:none;
    outline: none;
}
.addressBook{
    color: #00aaef;
    margin:auto 0;
    margin-left: 0.2rem;
}
.addressBook p{
    font-size: 12px;
}
.icon-tongxunlu{
    font-size:.3rem;
    display: block;
}
.number{
    font-size:14px;
    width:1rem;
    margin-left:.1rem;
    line-height: .6rem;
}
.bottomServer{
    width:96%;
    height:.6rem;
    /* background:rgb(160, 199, 89); */
    margin:0 auto;
    display: flex;
}
.botLittle{
    width:96%;
    height:100%;
    /* background:white; */
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content: space-between;
}
.botLittle li{
    width:.8rem;
    height: 0.4rem;
    border:1px solid #e9edf0;
    border-radius:4px;
    font-size:16px;
    text-align: center;
    line-height: .4rem;
    list-style: none;
}
</style>