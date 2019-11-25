<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-16 12:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="servernew">
    <div class="headerMainnew">
        <ul>
            <li v-for="(type,index) in types.mess" :key="index" @touchstart="changepage(type.id)">
                {{type.mess}}
                <div class="botGo"></div>
            </li>
            
        </ul>
    </div>
    <div class="content">
       <Noinfo :typeid="currtype"></Noinfo>  
    </div>
</div>
</template>
<script>
import Noinfo from "./Noinfo"
import Nonew from "./Nonew"
export default {
    name:"Newbotheader",
    data(){
        return{
            types:[],
            currtype:""
        }
    },
    created(){
        fetch('/api/else/message')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.types = data;
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        changepage(id){
            this.currtype=id
        }
    },
    components:{
        Noinfo,Nonew
    }
}
</script>
<style scoped>
ul li{
    list-style: none;
}
.headerMainnew{
    width:100%;
    background:white;
    position:fixed;
    top:.5rem;
    left:0;
    z-index: 400;
    font-size:16px;
    border-bottom:1px solid #f0eff5;
}
.headerMainnew ul{
    display: flex;
    width: 100%;
    height: .4rem; 
    align-items: center;
    overflow-x: auto;
    border-top:1px solid #f0eff5;
}
.headerMainnew li{
    width:1rem;
    margin-top:.15rem;
    flex-shrink: 0;
    text-align: center;
    color:#999999;
}
.botGo{
    width:.6rem;
    height:.06rem;
    background:#ff6766;
    margin-top:.1rem;
    opacity: 0;
    margin-left:.2rem;
}
.headerMainnew li:hover .botGo{
   opacity: 1;
   }
.headerMainnew li:hover{
color:#ff6766;
}
.content{
    width:100%;
    min-height:6rem;
    background:white;
}
</style>