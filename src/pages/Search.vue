<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 02:39:17
 * @Description: 
 -->

<template>
  <div id="Search">
      <SearchTop></SearchTop>
      <Searchhistory></Searchhistory>
      <HotSearch></HotSearch>
    <router-view/>
  </div>
</template>

<script>
import SearchTop from '../components/SearchTop'
import HotSearch from '../components/HotSearch'
import Searchhistory from '../components/Searchhistory'
export default {
  name: 'Search',
  components:{
      SearchTop,HotSearch,Searchhistory
  }
}
</script>

<style scoped>
  body{
    background:#fff;
  }
  
  
</style>
