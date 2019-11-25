<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-16 02:06:25
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\components\Myheader.vue
 -->
<template>
     <div class="server">
         
         <div class="hotimg" v-for="(Hotidimg,index) in Hotidimgs" :key="index">
             <div class="leftBox">
                 <p>{{Hotidimg.sh3_info1}}</p>
                 <span>{{Hotidimg.sh3_info2}}</span>
             </div>
             <div class="rightBox">
                <img :src="Hotidimg.sh3_pic">
             </div>
         </div>
    </div>
</template>
<script>
export default {
    name:"Hotimg",
    data(){
        return{
            Hotidimgs:[]
        }
    },
     created(){
        fetch("/api/shenghuo/sh3")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data)
            this.Hotidimgs = data;
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
    display: flex;
    /* background:rgb(150, 194, 183); */
    flex-wrap: wrap;
}
.hotimg{
    /* flex-wrap: wrap; */
    width:49.7%;
    height:.7rem;
    /* background:yellowgreen; */
    border-right:1px solid #e9edf0;
    border-bottom:1px solid #e9edf0;
    margin:0 auto;
    display:flex;
}
.leftBox{
    width:54%;
    height:.4rem;
    /* background:pink; */
    font-size:14px;
    margin:auto .2rem;
    line-height:.2rem;
}
.leftBox span{
    color: #666666;
    font-size:12px;
}
.rightBox{
    width:30%;
    height:100%;
    /* background: pink; */
    margin:auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right:.1rem;
}
.rightBox img{
    width:100%;
    display: block;
    /* height:100%; */
}
</style>