<!--
 * @Author: your name
 * @Date: 2019-11-09 19:49:14
 * @LastEditTime: 2019-11-12 20:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\Life.vue
 -->
<template>
    <div class="lifeBox">
        <Myheader></Myheader>
        <div class="box">
            <Mybanner></Mybanner>
            <Extend></Extend>
            <Beijingserver></Beijingserver>
            <Topup></Topup>
            <Myshopping></Myshopping>
            <Hotdiscount></Hotdiscount>
            <Hotimg></Hotimg>
            <Ebusiness></Ebusiness>
            <Lefthui></Lefthui>
            <Tvappreciate></Tvappreciate>
        </div>
        
    </div>
</template>
<script>
    import Myheader from '../components/Myheader';
    import Mybanner from '../components/Mybanner';
    import Extend from '../components/Extend';
    import Beijingserver from '../components/Beijingserver';
    import Topup from '../components/Topup';
    import Myshopping from '../components/Myshopping';
    import Hotdiscount from '../components/Hotdiscount';
    import Hotimg from '../components/Hotimg';
    import Ebusiness from '../components/Ebusiness';
    import Lefthui from '../components/Lefthui';
    import Tvappreciate from '../components/Tvappreciate';
    export default {
        name:"Life",
        data(){
            return{

            }
        },
        components:{
            Myheader,Mybanner,Extend,
            Beijingserver,Topup,Myshopping,
            Hotdiscount,Hotimg,Ebusiness,
            Lefthui,Tvappreciate
        }
    }
</script>
<style scoped>
    .lifeBox{
        width:100%;
    }
    .box{
        flex:1;
        overflow-y:auto;
    }
</style>