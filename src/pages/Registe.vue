<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-15 20:14:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="registeBox">
    <Registechild></Registechild>

</div>
</template>
<script>
import Registechild from '../components/Registechild'
export default {
    name:"Registe",
    data(){
        return{

        }
    },
    components:{
        Registechild
    }
}
</script>
<style scoped>
    .registeBox{
        width: 100%;
    }
</style>