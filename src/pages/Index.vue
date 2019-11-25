<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 01:20:58
 * @Description: 
 -->

<template>
  <div id="app">
      <search></search>
      <headlist></headlist>
      <extendlist></extendlist>
      <newsBanner></newsBanner>
      <rates></rates>
      <activeBanner></activeBanner>
      <liveRoom></liveRoom>
      <recommond></recommond>
      <Focus></Focus>
      <Active></Active>
      <Ecmonic></Ecmonic>
      <Special></Special>
      <!-- <Footer></Footer> -->

    <router-view/>
  </div>
</template>

<script>
import search from '../components/search'
import headlist from '../components/headlist'
import extendlist from '../components/extendlist'
import newsBanner from '../components/newsBanner'
import rates from '../components/rates'
import activeBanner from '../components/activeBanner'
import liveRoom from '../components/liveRoom'
import recommond from '../components/recommond'
import Focus from '../components/Focus'
import Active from '../components/Active'
import Ecmonic from '../components/Ecmonic'
import Special from '../components/Special'
// import Footer from '../components/Footer'
export default {
  name: 'App',
  components:{
      search,headlist,extendlist,newsBanner,rates,activeBanner,liveRoom,recommond,Focus,Active,Ecmonic,Special
  }
}
</script>

<style scoped>
  /* .activeBanner{
    box-sizing: border-box;
    padding-top: .07rem;
    padding-bottom: .07rem;
  }
  .recommond{
    box-sizing: border-box;
    padding-top: .07rem;
    padding-bottom: .07rem;
  } */
  #app{
    background: rgb(241, 241, 241);
  }
</style>
