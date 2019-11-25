<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-15 17:14:40
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="server">
    <div class="headerMain">
        <div class="header">
            <span class="iconfont icon-shangyibu1" @click="goback"></span>
            <p class="mess">消息详情</p>
            <span></span>
        </div> 
    </div>
    <div class="botBox">
        <div class="mes">
            <p class="con-p">关于电子渠道发售人民币“定利多”产品的公告</p>
        </div>
        <span>2019/06/27</span>
        <p class="context">&nbsp;&nbsp;关于电子渠道发售2019年第四期个人大额存单的公告<br>
            尊敬的客户:<br/>
            &nbsp;&nbsp;我行将于2019年3月6日起发售2019年第四期个人大额存单,具体发行公告可通过我行门户网站浏览。其中,部分产品可通过网上银行、手机银行购买,此类产品期限包括1个月至3年期,起点金额分为20万元、50万元、80万元三个类型(不同期限金额有所差异) ,最高年化利率为4.125%,到期付息,不可自动转存,存期内可全部提前支取、一次部分提前支取,提前支取计息规则说明如下:<br/>
            一、对于1个月和3个月期产品,提前支取按我行活期存款挂牌利率计息。<br>
            二、对于6个月至3年期产品,提前支取靠上一档我行整存整取定期存款挂牌利率。<br>
            &nbsp;&nbsp;以6个月期产品为例,若您持有4个月时提前支取则按我行3个月整存整取挂牌利率计息。具体产品信息,请见我行门户网站公告<br>
            
        </p>
    </div>
    <p class="bankchina">中国银行股份有限公司</p>
    <p class="bankchina">二〇一九年三月六日</p>
</div>
</template>
<script>
export default {
    name:"Newmessage",
    data(){
        return{
            serverMes:[]
        }
    },
    created(){
        fetch('http://localhost:3000/serverMes')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.serverMes = data;
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.server{
    padding-bottom: .7rem;
}
.headerMain{
    width:100%;
    height:.5rem;
    background:white;
    border-bottom:1px solid #e8e9ed;
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
.header .mess{
    font-weight: bold;
    font-size:18px;
}
.header .iconfont{
    font-size:.25rem;
}
.mes{
    width:80%;
    margin:0 auto;
}
.botBox .context{
    font-size:14px;
    line-height:.3rem;
    margin-top:.5rem;
    margin:0.5rem .18rem;
}
.botBox .con-p{
    font-size:.2rem;
    /* line-height:.2rem; */
    letter-spacing: 1px;
    text-align: center;
    margin:.2rem auto;
}
.botBox span{
    font-size:14px;
    display: block;
    text-align:center;
    /* margin-top:.1rem; */
}
.server .bankchina{
    font-size:14px;
    margin-left:1.5rem;
    line-height:.2rem;
} 
</style>