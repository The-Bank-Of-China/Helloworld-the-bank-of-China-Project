<!--
 * @Author: renhui
 * @Date: 2019-11-11 09:58:58
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 18:46:34
 * @Description: ..
 -->
<template>
  <div class="top">
      <div class="leftIcon">
          <img src="../assets/img/logo.png" alt="中国银行">
      </div>
      <div class="right">
          <p>立即登录</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'Mymessage',
    data(){
        return{
            
        }
    }
}
</script>

<style>
.top{
    width:100%;
    height:1rem;
    background:url(../assets/img/bg.jpg) no-repeat;
    background-position:0px -180px;
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
    padding-bottom:.2rem;
    margin-left:.2rem;
}
.right p{
    font-size:.14rem;
    margin-left:.2rem;
    color:white;
    font-weight: 600;
}
</style>