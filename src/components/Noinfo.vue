<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-16 13:08:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="box">
    <div class="server">
        <div style="display:none">{{typeid}}</div>
        <ul> 
            <li v-for="(serverAdv,index) in serverAdvs" :key="index">
                <router-link to="/Newpage">
                    <div class="pBox">
                        <p>{{serverAdv.mess}}</p>
                    </div>
                    <span>2019/06/27</span>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="serverTwo"></div>
</div>
</template>
<script>
export default {
    name:"Noinfo",
    props:["typeid"],
    data(){
        return{
           serverAdvs:[],
           oldtype: ""
        }
    },
    created(){
        fetch('/api/else/message2?id='+this.typeid)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.serverAdvs = data;
        })
        .catch(err=>{
            console.log(err)
        })
    },
    updated(){
        if(this.typeid!=this.oldtype){
            this.oldtype = this.typeid;
            fetch('/api/else/message2?id='+this.typeid)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                console.log(data);
                this.serverAdvs = data;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }}
</script>
<style scoped>
.server{
    padding-bottom: .7rem;
}
   .server ul{
       font-size:16px;
       margin-top:.44rem;
   }
    .server ul li{
        width:100%;
        height:.6rem;
        border-bottom:1px solid #e8e9ed;
        padding-top:.2rem;
    } 
    .server ul li p{
       margin-left:.2rem;
       font-weight:bold;
       white-space:nowrap;
       overflow:hidden;
       text-overflow: ellipsis;
        color:#000;
    } 
    .server .pBox{
       width:94%;
    }
    .server ul li span{
       margin-left:.2rem;
       line-height:.3rem;
       font-size:14px;
       color:#999999;
    }
    .serverTwo{
        background-image: url(../../static/img/noinfo.jpg)
    } 
</style>