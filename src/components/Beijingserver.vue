<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-14 11:24:44
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
                    <p>北京专属服务</p>
                </div>
                <span>更多</span>
            </div>
        </div>
        <div class="bottomServer">
            <div class="botBox" v-for="(Beijingimg,index) in Beijingimgs" :key="index">
                <a :href="Beijingimg.href"><img :src="Beijingimg.sh1_pic"></a>
            </div>
            
            <!-- <img src="static/img/2.jpg"/>
            <img src="static/img/3.jpg"/>
            <img src="static/img/4.jpg"/>
            <img src="static/img/5.jpg"/>
            <img src="static/img/6.jpg"/> -->
        </div>
    </div>
</template>
<script>
export default {
    name:"extend",
    data(){
        return{
            Beijingimgs:[]
        }
    },
    created(){
        fetch("/api/shenghuo/sh1")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.Beijingimgs = data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
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
.bottomServer{
    width:96%;
    /* height:1.7rem; */
    /* background:rgb(89, 199, 89); */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin:0 auto;
}
.bottomServer img{
    width:1rem;
    height:.8rem;
    margin-top:.15rem;
}
</style>