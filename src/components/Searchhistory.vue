<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 02:42:19
 * @Description: "这是汇率展示"
 -->

<template>
    <div class="hot">
        <p class="tit">
            <i class="el-icon-star-off"></i>
            历史记录
        </p>
        <div class="content">
            <span class="lis" v-for="(hot,index) in hots.history" :key="index" >
                <a href="#">{{hot.hisname}}</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
     name:"activeBanner",
    data(){
        return {
            hots:[
            ]
        }
    },
    created:function(){
        fetch('/api/else/search')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            
            this.hots = data;
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
    .hot{
        padding: .15rem .1rem;
        background-color: #fff;
    }
    .tit{
        font-size: .14rem;
        padding-bottom: .05rem;
        border-bottom: 1px solid rgb(194, 194, 194);
    }
    .content{
        padding-top: .15rem;
        display: flex;
        flex-wrap: wrap;
    }
    .lis{
        display: block;
        border: 1px solid rgb(194, 194, 194);
        border-radius: .03rem;
        font-size: .14rem;
        height: .22rem;
        padding: 0 .07rem;
        line-height:.22rem;
        margin-bottom: .1rem;
        margin-right: .1rem;
    }
    .lis a{
        color: #000;
    }
</style>
