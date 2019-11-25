<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-15 17:09:04
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="serverMain">
    <Newheader></Newheader>
    <Newbotheader></Newbotheader>
    <!-- <router-view> -->
        <!-- <Noinfo></Noinfo> -->
    <!-- </router-view> -->
</div>
    
    <!-- <Newbotheader></Newbotheader> -->
</template>
<script>
import Newheader from '../components/Newheader'
import Newbotheader from '../components/Newbotheader'
// import Noinfo from '../components/Noinfo'

export default {
    name:"News",
    data(){
        return{

        }
    },
    components:{
        Newheader,Newbotheader
    }
}
</script>
<style scoped>
.serverMain{
    height:6.65rem;
    background:#f0eff5;
    /* padding-bottom:.6rem; */
}
</style>