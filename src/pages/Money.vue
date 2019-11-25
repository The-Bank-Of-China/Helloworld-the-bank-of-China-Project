<!--
 * @Author: renhui
 * @Date: 2019-11-12 10:09:31
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 00:46:02
 * @Description: ..
 -->
<template>
  <div class="moneybox">
      <Moneyheader></Moneyheader>
      <extendlist></extendlist>
      <Moneycurrent></Moneycurrent>
      <Moneyregular></Moneyregular>
      <Moneybetter></Moneybetter>
      <Moneytheme></Moneytheme>
      <Moneycopy></Moneycopy>
  </div>
</template>

<script>
import Moneyheader from '../components/Moneyheader'
import extendlist from '../components/extendlist'
import Moneycurrent from '../components/Moneycurrent'
import Moneyregular from '../components/Moneyregular'
import Moneybetter from '../components/Moneybetter'
import Moneytheme from '../components/Moneytheme'
import Moneycopy from '../components/Moneycopy'

export default {
    name:'Money',
    data(){
        return{
            
        }
    },
    components:{
        Moneyheader,extendlist,Moneycurrent,Moneyregular
        ,Moneybetter,Moneytheme,Moneycopy
    }
}
</script>

<style scoped>

</style>