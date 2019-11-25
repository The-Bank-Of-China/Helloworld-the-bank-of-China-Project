<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 19:22:20
 * @Description: 
 -->

<template>
  <div id="app">
      <div class="content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
html,body{
	height:100%;
}
html{
  font-size: 26.67vw;
}
body{
	color:rgb(39, 38, 38);
}

</style>
