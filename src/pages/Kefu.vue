<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 15:29:53
 * @Description: 
 -->

<template>
  <div id="kefu">
      <Newhead></Newhead>
      <Kefuhead></Kefuhead>
      <Kefulist></Kefulist>
      <Kefuquestion></Kefuquestion>
  </div>
</template>

<script>
import Kefuhead from '../components/Kefuhead'
import Newhead from '../components/Newhead'
import Kefulist from '../components/Kefulist'
import Kefuquestion from '../components/Kefuquestion'
export default {
  name: 'kefu',
  components:{
      Kefuhead,Kefulist,Kefuquestion,Newhead
  }
}
</script>

<style scoped>
  #kefu{
    background:rgb(245, 245, 245);
  }
  
  
</style>
