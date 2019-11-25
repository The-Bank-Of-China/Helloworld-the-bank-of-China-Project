<!--
 * @Author: renhui
 * @Date: 2019-11-11 17:16:18
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 01:05:24
 * @Description: ..
 -->
<template>
  <div class="pagebox">
        <div class="pagelist1">
            <router-link to="/Count">
               <div class="list myCount1">
                    <span class="iconfont iconfont1 icon-wodezhanghu"></span>
                    <p>我的账户</p>
                    <span class="iconfont iconfont2 icon-icon"></span>
                </div> 
            </router-link>
            <div class="list myCount2">
                <span class="iconfont iconfont1 icon-qiyehezi-shouzhijilu"></span>
                <p>收支记录</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
            <div class="list myCount3">
                <span class="iconfont iconfont1 icon-fangzi1"></span>
                <p>我的网点</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
             <div class="list myCount4">
                <span class="iconfont iconfont1 icon-rili1"></span>
                <p>金融日历</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
            <div class="list myCount5">
                <span class="iconfont iconfont1 icon-yinsizhengce"></span>
                <p>安全中心与设置</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
        </div>
        <div class="pagelist2">
            <div class="list myCount1">
                <span class="iconfont iconfont1 icon-zaixiankefu"></span>
                <p>在线客服</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
            <div class="list myCount2">
                <span class="iconfont iconfont1 icon-caozuojilu"></span>
                <p>操作记录</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
            <div class="list myCount3">
                <span class="iconfont iconfont1 icon-wodejiangpin"></span>
                <p>我的奖品</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
        </div>
        <div class="pagelist3">
            <div class="list myCount1">
                <span class="iconfont iconfont1 icon-guanyuwomen1"></span>
                <p>关于我们</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
            <div class="list myCount2">
                <span class="iconfont iconfont1 icon-yinsizhengce-"></span>
                <p>隐私政策</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
        </div>
           <div class="pagelist4">
            <div class="list myCount1">
                <span class="iconfont iconfont1 icon-kaihu"></span>
                <p>在线开户</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
            <div class="list myCount2">
                <span class="iconfont iconfont1 icon-wodefenxiang"></span>
                <p>我的分享</p>
                <span class="iconfont iconfont2 icon-icon"></span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'Mypagebottom',
    data(){
        return{

        }
    }
    
}
</script>

<style>
.pagebox{
    margin-top:.1rem;
    font-size:15px;
    padding-bottom: .7rem;
}
.pagelist1{
    margin-top:.2rem;
    width:100%;
    height:2.54rem;
    background-color:white;
}
.pagelist2{
    margin-top:.1rem;
    width:100%;
    height:1.5rem;
    background-color:white;
}
.pagelist2 .myCount3{
    border:none;
}
.pagelist3{
    margin-top:.1rem;
    width:100%;
    height:1.05rem;
    background-color:white;
}
.pagelist3 .myCount2{
    border:none;
}
.pagelist4{
    margin-top:.1rem;
    width:100%;
    height:1.1rem;
    background-color:white;
}
.pagelist4 .myCount2{
    border:none;
}
.list{
    width:100%;
    height:.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .1rem;
    box-sizing: border-box;
    border-bottom: 0.7px solid rgb(187, 190, 190);
}
.list p{
    margin-left:-270px;
}
.iconfont1{
    color:rgb(175, 32, 32);
    margin-left:6px;
    margin-right:24px;
    font-size:20px;
}
.icon-qiyehezi-shouzhijilu{
    color:rgb(215, 228, 30);
    font-size:17px;
}
.icon-fangzi1{
    margin-left:4px;
    color:violet;
}
.myCount5{
    border:none;
}
.icon-rili1,.icon-guanyuwomen1{
    color:steelblue;
    font-size:18px;
}
.icon-yinsizhengce{
    margin-right:50px;
    color:seagreen;
}
.icon-zaixiankefu,.icon-kaihu{
    color:purple;
}
.icon-caozuojilu{
    color:red;
}
.icon-wodejiangpin,.icon-wodefenxiang{
    color:rgb(31, 211, 136);
    border-bottom:none;
}
</style>