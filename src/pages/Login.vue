<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-12 17:18:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="loginBox">
    <Loginchild></Loginchild>
</div>
</template>
<script>
import Loginchild from '../components/Loginchild'
export default {
    name:"Login",
    data(){
        return{

        }
    },
    components:{
        Loginchild
    }
}
</script>
<style scoped>
    .loginBox{
        width: 100%;
    }
</style>