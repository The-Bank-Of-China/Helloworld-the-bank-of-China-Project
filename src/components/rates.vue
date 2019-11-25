<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 01:51:02
 * @Description: "这是汇率展示"
 -->

<template>
<div class="ratesMain">
    <div class="rates">
        <div class="rate ratemoney">
            <span>{{rates[0].moneyclass}}</span>
            <span>{{rates[0].moneyrates}}</span>
        </div>
        <div class="rate jingshu">
            <span>{{rates[0].jingchuclass}}</span>
            <span>{{rates[0].jingchurates}}</span>
        </div>
        <div class="rate uprate">
            <span>{{rates[0].uprate}}</span>
            <span>{{rates[0].uprates}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            rates:[
            ]
        }
    },
    created:function(){
        fetch('/api/index/selectJinrong')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            
            this.rates = data;
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    mounted:function(){         
    }
}
</script>

<style scoped>
    .ratesMain{
        width: 100%;
        height:.7rem;
        background: #fff; 
    }
    .rates{
        width: 92%;
        height: .6rem;
        background: #fef4f3;
        margin: 0 auto;
        border-radius: .05rem;
        display: flex;
        justify-content: space-around;
    }
    .rate{
        width: 30%;
        height: 100%;
        padding-top: .1rem;
    }
    .rate span{
        display: block;
        font-size: .15rem;
        text-align: center;
        height: .22rem;
    }
</style>
