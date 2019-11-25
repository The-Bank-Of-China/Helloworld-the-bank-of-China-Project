<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-14 09:45:59
 * @Description: 
 -->

<template>
  <div id="Kf">
      <router-link to="/Index" class="pic">
            <img src="../assets/img/kf.jpg" alt="">
            <p class="name">人工客服</p>
      </router-link>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
#Kf{
  height: 1.5rem;
  /* background-color: rgb(216, 142, 142); */
  background: linear-gradient(rgb(100, 187, 238), rgb(13, 136, 236));
  display: flex;
  justify-content: center;
  align-items: center;
}
.name{
  font-size: .14rem;
  text-align: center;
  color: azure;
  margin-top: .1rem;
}
 img{
      display: block;
      height: .7rem;
      width: .7rem;
      border-radius: 50%;
  }
  
  
</style>
