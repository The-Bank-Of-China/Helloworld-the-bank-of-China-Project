<!--
 * @Author: renhui
 * @Date: 2019-11-11 20:58:29
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-12 00:43:24
 * @Description: ..
 -->
<template>
  <div class="box">
      <Userheader></Userheader>
      <Usermessage></Usermessage>
      <Usercontent></Usercontent>
  </div>
</template>

<script>
import Userheader from '../components/Userheader'
import Usermessage from '../components/Usermessage'
import Usercontent from '../components/Usercontent'

export default {
    name:'User',
    data(){
        return{

        }
    },
    components:{
        Userheader,Usermessage,Usercontent
    }
}
</script>

<style scoped>
.box{
     background-color: #f0eff5;
}
</style>