<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 01:49:01
 * @Description: "这是新闻轮播"
 -->

<template>
    <div class="newsBanner">
        <a href="#" class="left">
            <img src="../assets/img/news.png" alt="">
        </a>
        <div class="swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(book,index) in books" :key="index"  >
                    <a :href="book.url">{{book.head}}</a>
                </li>
            </ul>        
      </div>
      </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name:"newsBanner",
    data(){
        return {
            books:[
            ]
        }
    },
    created:function(){
        fetch('/api/index/selectHeader')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.books = data;
            console.log(data);
            console.log(data);
            this.$nextTick(function(){
                 let dom = document.getElementsByClassName("swiper-wrapper")[0];
                 console.log(dom.innerHTML);
                 let mySwiper = new Swiper ('.swiper-container',{
                    direction: 'vertical', // 垂直切换选项
                    // loop: true, // 循环模式选项
                    autoplay:true,
                    speed:300,
                    slidesPerView: 2,
                    grabCursor:true
                })
            });
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
    .newsBanner{
        height: .5rem;
        width: 100%;
        background: #fff;
        display: flex;
    }
    .left{
        height: 100%;
        width: .5rem;
        margin-left: .1rem;
    }
    .left img{
        height: .45rem;
        width: .45rem;
        display: block;
        margin: .025rem;
    }
    .swiper-container{
        width: 80%;
        height: 100%;
         overflow: hidden;
    }
    .swiper-wrapper{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
       
    }
    .swiper-container li {
        list-style-position: inside;
        white-space: nowrap;
        overflow: hidden;
        font-size: .18rem;
        height: .2rem;
        line-height: .2rem;
        text-overflow: ellipsis;
    }
    .swiper-container li a{
	    color:#000;
        font-size: .16rem;
    }
</style>
