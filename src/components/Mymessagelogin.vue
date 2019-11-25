<!--
 * @Author: renhui
 * @Date: 2019-11-11 09:58:58
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 03:38:55
 * @Description: ..
 -->
<template>
  <div class="top">
      <div class="leftIcon">
          <img src="../assets/img/logo.png" alt="中国银行">
      </div>
      <div class="right">
          <p>
              {{username}}<br/>    
              <span>HI.您好 </span>
          </p>
      </div>
      <div class="direc">
          <router-link to="/User">
            <span class="iconfont icon-icon"></span>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'Mymessagelogin',
    data(){
        return{
            username:''
        }
    },
     created:function(){
        this.username=window.localStorage.getItem("tel")
    },
}
</script>

<style>
.top{
    width:100%;
    height:1rem;
    background:url(../assets/img/bg.jpg) no-repeat;
    background-position:0px -180px;;
    display: flex;
    justify-content: left;
    align-items: center;
}
.leftIcon{
    height:1rem;
}
.leftIcon img{
    width:.6rem;
    height:.6rem;
    line-height: .6rem;
    padding-bottom:.22rem;
    margin-left:.2rem;
}
.right p{
    font-size:15px;
    margin-left:.2rem;
    color:white;
    font-weight: 600;
}
.right span{
    font-weight: 400;
}
.direc{
    height:1rem;
    display: flex;
    justify-content: right;
    align-items: center;
}
.direc a{
    font-size:18px;
    margin-left:1.4rem;
    color:white;
    font-weight: 600;
}
</style>