<!--
 * @Author: renhui
 * @Date: 2019-11-12 21:35:19
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-13 09:23:12
 * @Description: ..
 -->
<template>
   <div class="userbox">
       <span class="iconfont icon-shangyibu1" @click="back()"></span>
       <p>账户总览</p>
       <span class="iconfont icon-kefu"></span>
   </div>
 </template>
 
 <script scoped>
 export default {
    name:'Userheader',
    data(){
      return{

      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
 }
 </script>
 
 <style scoped>
 .userbox{
    width:100%;
    height:.5rem;
    background-color: white;
    display: flex;
    justify-content:space-between;
    align-items:center;
    left:2.5%;
 }
 p{
   line-height: .5rem;
   text-align: center;
   font-size:15px;
   font-weight:600;
 }
 .iconfont{
   font-size:24px;
 }
 .icon-shangyibu1{
   padding-left:8px;
 }
 .icon-kefu{
   padding-right:20px;
 }
 </style>
