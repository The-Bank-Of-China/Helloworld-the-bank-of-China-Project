<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 19:02:58
 * @Description: "这是汇率展示"
 -->

<template>
    <div class="special">
        <div class="top1">
            <span class="tuijian">特色专区</span>
        </div>
        <div class="bottom1">
            <img src="../assets/img/s1.png" alt="" class="pic">
            <div class="lis">
                <p>
                    <a href="#" class="iconfont icon-xiaofei"></a>
                    <span class="Tit">中银基金</span>
                </p>
                <p>
                    <a href="#" class="iconfont icon-xiaofei"></a>
                    <span class="Tit">中银基金</span>
                </p>
                <p>
                    <a href="#" class="iconfont icon-xiaofei"></a>
                    <span class="Tit">中银基金</span>
                </p>
                <p>
                    <a href="#" class="iconfont icon-xiaofei"></a>
                    <span class="Tit">中银基金</span>
                </p>
                <p>
                    <a href="#" class="iconfont icon-xiaofei"></a>
                    <span class="Tit">中银基金</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.special{
    width: 100%;
    padding: 0 .1rem;
    padding-top: .1rem;
    padding-bottom: .2rem;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: .65rem;
    margin-top: .1rem;
}
   .top1{
       box-sizing: border-box;
       height: .6rem;
       line-height:.6rem;
       display: flex;
       justify-content: space-between;
   }
   .tuijian{
       font-size: .16rem;
       font-weight: bold;
       display: block;
   }
.bottom1{
    /* padding: 0 .2rem; */
    /* box-sizing: border-box; */
    width: 92%;
    height: 1.6rem;
    border-radius: .1rem;
    box-shadow: 2px 2px 9px rgb(212, 205, 190);
    /* background: #888; */
    margin: 0 auto;
}
.pic{
    height: 60%;
    width: 100%;
    display: block;
}
.lis{
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around
}
.lis p{
    text-align: center;
}
.bottom1 .iconfont{
    font-size: .3rem;
    margin-top: .05rem;
    display: block;
    color:#f07817;
}
.Tit{
    font-size: .14rem;
    display: block;
    height: .27rem;
    line-height: .27rem;
}
</style>
