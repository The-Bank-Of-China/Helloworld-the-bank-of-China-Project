<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 19:01:00
 * @Description: "这是汇率展示"
 -->

<template>
    <div class="myfocus">
        <div class="top1">
            <span class="tuijian">我的关注</span>
            <a href="#" class="more">定制</a>
        </div>
        <ul class="list1">
            <li>
                <p class="lef">
                    <span class="precent">2.23%</span>
                    <span class="dir">七日年化收益率</span>
                </p>
                <div class="rig">
                    <p class="tit">中银证券管家A(003316)</p>
                    <p class="con">
                        <span class="cls"> 基金 </span>
                        <span class="cot">0.01元起购</span>
                    </p>
                </div>
            </li>
            <li>
                <p class="lef">
                    <span class="precent">2.23%</span>
                    <span class="dir">七日年化收益率</span>
                </p>
                <div class="rig">
                    <p class="tit">中银证券管家A(003316)</p>
                    <p class="con">
                        <span class="cls"> 基金 </span>
                        <span class="cot">0.01元起购</span>
                    </p>
                </div>
            </li>
            <li>
                <p class="lef">
                    <span class="precent">2.23%</span>
                    <span class="dir">七日年化收益率</span>
                </p>
                <div class="rig">
                    <p class="tit">中银证券管家A(003316)</p>
                    <p class="con">
                        <span class="cls"> 基金 </span>
                        <span class="cot">0.01元起购</span>
                    </p>
                </div>
            </li>
        </ul>
        <div class="bottom1">
            <div class="dollar lis">
                <img src="../assets/img/nat.png" alt="">
                <p class="classmoney">美元</p>
                <p class="time">11/12 15:52:56 </p>
            </div>
            <div class="in lis">
                <p class="tt">银行汇买价</p>
                <p class="num">698.78</p>
            </div>
            <div class="out lis">
                <p class="tt">银行汇卖价</p>
                <p class="num">701.75</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.myfocus{
    width: 100%;
    padding: 0 .1rem;
    padding-top: .1rem;
    padding-bottom: .2rem;
    box-sizing: border-box;
    background-color: #fff;
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
   .more{
       font-size: .13rem;
       display: block;
       color: #000;
   } 
   .list1 li{
       margin-top: .1rem;
       height: .6rem;
       width: 100%;
       display: flex;
   }
   .lef{
       width: 40%;
       height: 100%;
       font-size: .14rem;
   }
   .lef span{
       display: block;
       text-align: center;
   }
   .precent{
       font-size: .18rem;
       margin: .06rem 0;
       color: rgb(223, 69, 69);
   }
   .dir{
       font-size: .13rem;
       color: rgb(110, 108, 108);
   }
   .rig{
       width: 60%;
       height: 100%;
       font-size: .14rem;
   }
   .tit{
       margin: .07rem 0;

   }
   .cls{
       border: 1px solid rgb(110, 108, 108);
       font-size: .13rem;
       color: rgb(110, 108, 108);
       border-radius: .04rem;
       text-align: center;
       margin-right: .05rem;
   }
   .cot{
       font-size: .12rem;
       color: rgb(110, 108, 108);
   }
   .bottom1{
       padding-top: .2rem;
       height: .9rem;
       display: flex;
       justify-content: space-around;
   }
   .lis{
       height: 100%;
       width: 32%;
       /* background-color: rgb(151, 107, 107); */
       text-align: center;
   }
   .dollar img{
       padding-top: .07rem;
       height:.4rem;
       width: 60%;
       margin: 0 auto;
       display: block ;
   }
   .classmoney{
       font-size: .14rem;
       font-weight: 700;
       height: .24rem;
       line-height: .24rem;
   }
   .time{
       font-size: .13rem;
       color: rgb(82, 80, 80);
   }
   .tt{
       font-size: .14rem;
       margin-top: .1rem;
       color: rgb(68, 67, 67);
   }
   .num{
       font-size: .17rem;
       height: .4rem;
       font-weight: 700;
       line-height: .4rem;
   }
</style>
