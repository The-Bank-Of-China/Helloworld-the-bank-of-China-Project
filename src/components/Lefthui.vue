<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-16 02:08:21
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
                    <p>聚“惠”生活</p>
                </div>
            </div>
        </div>
        <div class="MidServer">
            <img src="static/img/hui1.jpg" alt="">
        </div>
        <div class="botserverMain" >
            <div class="botServer" v-for="(manyimg,index) in liftimgs" :key="index">
                <a href="#"><img :src="manyimg.sh4_pic"></a>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Lefthui",
    data(){
        return{
            liftimgs:[]
        }
    },
    created(){
        fetch("/api/shenghuo/sh4")
        .then(res=>{
           return res.json();
        })
        .then(data=>{
            this.liftimgs = data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
.server{
    width:94%;
    margin:0 auto;
    /* height:2rem; */
    /* background:rgb(150, 194, 183); */
}
.serverBox{
    width:100%;
    height:.3rem;
    border-top:10px solid #e9edf0;
}
.topServer{
    width:100%;
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
    width:100%;
    height:.3rem;
    display: flex;
    align-items: center;
    margin-top:.1rem;
    border-top:1px solid #e9edf0;
    border-right:1px solid #e9edf0;
    margin-bottom: .1rem;
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
    margin:0 auto;
    height:.85rem;
    /* background:rgb(89, 199, 89); */
    margin:0 auto;
}
.MidServer img{
    width:100%;
    border:1px solid #e9edf0;
}
.serverMain{
    display: flex;
    justify-content: space-between;
}
.LeftServer{
    width:44%;
    height:100%;
    background:tomato;
}
.LeftServer img{
    width:100%;
    border:1px solid #e9edf0;    
    box-shadow: 0px 0 13px -3px grey;
}
.botserverMain{
    width:100%;
    /* background:pink;  */
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    margin:0 auto;
}
.botServer{  
    width:30%;
    height:.9rem;
}
.botServer img{
    width:100%;
    /* margin-right:.1rem; */
}
</style>