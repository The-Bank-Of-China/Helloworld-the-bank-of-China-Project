<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-15 15:37:46
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
                    <p>热门优惠券</p>
                </div>
                <span>更多</span>
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div id="imgBox" class="swiper-slide" v-for="(img,index) in Hotimgs" :key="index"  >
                    <a v-bind:href="img.href"><img :src="img.src" ></a>
                </div>
            </div>   
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name:"Hotdiscount",
    data(){
        return{
            Hotimgs:[]
        }
    },
    created(){
        fetch("/api/Hotimgs")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.Hotimgs = data;
            console.log(data)
            this.$nextTick(function(){
            let dom = document.getElementsByClassName("swiper-wrapper")[0];
                 console.log(dom.innerHTML);
                let swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 10,
                freeMode: true,
                });
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
 @import url(https://unpkg.com/swiper/css/swiper.css);
.server{
    width:100%;
    border-bottom:10px solid #e9edf0;
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
.swiper-container{
    width:96%;
    margin:0 auto;
    display: flex;
    border-top:1px solid #e9edf0;
}
#imgBox{
    margin-top:.05rem;
    margin-bottom:.05rem;
}
.swiper-container img{
  width:100%;
  height: 100%;
}
</style>