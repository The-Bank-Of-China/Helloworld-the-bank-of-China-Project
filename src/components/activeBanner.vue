<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 01:52:55
 * @Description: "活动轮播"
 -->

<template>
    <div class="activeBanner">
        <el-carousel :interval="5000" arrow="never" >
            <el-carousel-item v-for="(img,index) in imgs" :key="index" id="ban">
                <a href="#"  >
                    <img :src="img.pic_url" >
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name:"activeBanner",
    data(){
        return {
            imgs:[
            ]
        }
    },
    created:function(){
        fetch('/api/index/selectIndex_lunbo')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            
            this.imgs = data;
           
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
@import url(https://unpkg.com/swiper/css/swiper.css);
ul li{
    list-style: none;
}
   .activeBanner{
       height: 1.1rem;
       width: 100%;
       background: #fff;
       padding-top: .05rem;
       border: 1px solid #fff;
       box-sizing: border-box;
   }
   /* .swiper-container{
        height: 1rem;
        width:92%;
        overflow: hidden;
        margin: .05rem auto;
   }  */
   #ban .el-carousel__container{
       height: 1rem;
   }
    .el-carousel__container .el-carousel__item{
        height: 1rem;
    }
  img{
       height: 1rem;
       width: 100%;
       display: block;
       border-radius: .05rem;
   }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
