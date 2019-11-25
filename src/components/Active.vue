<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 18:57:06
 * @Description: "这是汇率展示"
 -->

<template>
    <div class="active">
        <div class="top1">
            <span class="tuijian">热门活动</span>
            <a href="#" class="more">更多</a>
        </div>
        <div class="bottom">
            <div class="lefpic">
                <img src="../assets/img/pic.png" alt="">
            </div>
            <div class="center">
                <p class="tit1">缴费有惊喜</p>
                <p class="tit2">抽取视频会员、京东券</p>
            </div>
            <span class="look">去看看</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .active{
        margin-top: .07rem;
        margin-bottom: .07rem;
        height: 1rem;
        background: #fff;
    }
    .top1{
       box-sizing: border-box;
       height: .4rem;
       line-height:.4rem;
       display: flex;
       padding:  0 .1rem;
       justify-content: space-between;
   }
   .tuijian{
       font-size: .16rem;
       font-weight: bold;
       display: block;
   }
   .more{
       font-size: .13rem;
       display: block;
       color: #000;
   } 
   .lefpic{
       width: .75rem;
       height: .6rem;
   }
    .lefpic img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .center{
        margin-right: .2rem;
    }
    .center .tit1{
        font-size: .16rem;
    }
    .center .tit2{
        font-size: .14rem;
        color: rgb(95, 94, 94);
    }
    .look{
        display: block;
        font-size: .16rem;
        text-align: center;
        height: .2rem;
        line-height: .2rem;
        border: 1px solid #f9792e;
        color: #f9792e;
        width: .6rem;
        margin-left: .1rem;
        box-shadow: -2px 2px 9px rgb(221, 214, 202);
        border-radius: .1rem;
    }
    .bottom{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
