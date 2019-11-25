<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 01:56:50
 * @Description: "直播间"
 -->

<template>
    <div class="recommond">
        <div class="top1">
            <span class="tuijian">为您推荐</span>
            <a href="#" class="more">更多</a>
        </div>
        <ul class="reclist">
            <li v-for="(info,index) in infos" :key="index">
                <a :href="info.url">
                    <p class="t1">{{info.recom1}}</p>
                    <p class="t2">{{info.recom2}}</p>
                    <p class="t3">{{info.recom3}}</p>
                    <p class="t4">{{info.recom4}}</p>
                </a>
                
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
    name:"recommond",
    data(){
        return {
            infos:[
            ]
        }
    },
    created:function(){
        fetch('/api/index/selectLicai')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            
            this.infos = data;
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
   .recommond{
       height: 2rem;
       width: 100%;
       background: #fff;
       padding-bottom: .1rem;
   }
   .recommond .top1{
       padding: 0 .1rem;
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
   .reclist {
       height: 1.3rem;
       width: 100%;
       display: flex;
       justify-content: space-between
   }
   .reclist li{
       list-style: none;
       height: 100%;
       width:32%;
       background-color: #f9f9f9;
       box-sizing: border-box;
       padding-top: .05rem;
   }
   li a{
       height: 100%;
       width: 100%;
       color: #000;
   }
     .reclist p{
         text-align: center;
         height: .3rem;
         line-height: .3rem;
    }
    .t1{
        font-size: .14rem;
    }
    .t2{
        font-size: .13rem;
        color: rgb(78, 78, 78);
    }
    .t3{
        font-size: .16rem;
        color: rgb(209, 69, 69);
    }
    .t4{
        font-size: .13rem;
        color: rgb(133, 131, 131);
    }
</style>
