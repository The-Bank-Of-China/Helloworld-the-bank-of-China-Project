<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-14 20:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="serverMain">
    <Newmessage id="id"></Newmessage>
</div>
</template>
<script>
import Newmessage from '../components/Newmessage'

export default {
    name:"Newpage",
    props:["id"],
    data(){
        return{

        }
    },
    components:{
       Newmessage
    }
}
</script>
<style scoped>
.serverMain{
    height:6.65rem;
    background:#fff;
}
</style>