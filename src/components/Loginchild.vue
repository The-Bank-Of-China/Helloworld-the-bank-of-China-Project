<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-19 20:54:00
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="Server">
    <div class="header" @click="backPage">
        <span class="iconfont icon-shangyibu1"></span>
    </div>
    <div class="banner">
        <img src="../assets/img/login.jpg" alt="">
    </div>
    <div class="midMain">
        <div class="MidServer">
            <p class="number"><span class="iconfont icon-lianxiren"></span></p>
            <input id="phone" v-model="tel" class="inputBox" type="text" placeholder="手机号" @blur="getel">
        </div>
        <div class="MidServer">
            <p class="number"><span class="iconfont icon-yanzhengma"></span></p>
            <input class="inputBox" type="text" placeholder="图形验证码">
            <div class="addressBook">
                <span></span>
            </div>
        </div>
        <div class="MidServer">
            <p class="number"><span class="iconfont icon-mima2 "></span></p>
            <input id="pass" v-model="userpass" class="inputBox" type="password" placeholder="请输入密码">
        </div>
        <div class="MidServer">
            <input class="check" type="checkbox" checked>
            <p class="number numberNext">记住手机号</p>
        </div>
        <p class="msgregiste">{{msg}}</p>
        <span @touchstart="nextregiste" class="nextFoot">登录</span>
    </div>
    <div class="botBox">
        <router-link to="/Registe">
            <p>自助注册&nbsp;</p>
        </router-link>
        <span>|</span>
        <p>&nbsp;快速查询余额</p>
    </div>
</div>
</template>
<script>
import axios from 'axios'; 
export default {
    name:"Loginchild",
    data(){
        return{
            tel:"",
            userpass:"",
            msg:""
        }
    },
    methods:{
        backPage(){
            this.$router.go(-1);
        },
        getel:function(){
            let phone = document.getElementById("phone").value;
            // console.log(this.tel)
            if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
                this.msg="手机号输入格式有误"
                this.tel=""
            }else{
                this.msg=""
            }
        },
        // getuserpass:function(){
        //     let pass = document.getElementById("pass").value;
        //     if(!(/^(?:(\d)(?!((?<=9)8|(?<=8)7|(?<=7)6|(?<=6)5|(?<=5)4|(?<=4)3|(?<=3)2|(?<=2)1|(?<=1)0){5})(?!\1{5})(?!((?<=0)1|(?<=1)2|(?<=2)3|(?<=3)4|(?<=4)5|(?<=5)6|(?<=6)7|(?<=7)8|(?<=8)9){5})){6}$/).test(pass)){
        //         this.msg="6位数字密码不能6个数字相同，也不能顺增或者顺减"
        //         this.userpass=""
        //     }else{
        //         this.msg=""
        //     }
        // },
        nextregiste:function(){
           axios.post('api/user/login?tel=' + this.tel + "&userpass=" + this.userpass)
            .then(res=>{
                // console.log(res.data)
                if(res.data.info=="ok"){
                    console.log(res.data.info)
                    this.$router.push({
                        path:'/Index'
                    })
                    window.localStorage.setItem('tel', this.tel);
                        console.log(this.tel)
                }else if(res.data.info=="no"){
                    console.log(res.data.info)
                    alert("手机号和密码不正确")
                    // this.msg='手机号和密码不正确'
                    this.userpass=""
                }
            })  
        }
    }
}
</script>
<style scoped>
.header{
    width: 96%;
    display: flex;
    margin-top:.1rem;
    margin-left:.1rem;
}
.header .iconfont{
    font-size:.25rem;
}
.banner{
    width:40%;
    height:1rem;
    margin:0.3rem auto;
}
.banner img{
    width: 100%;
    height:100%;
}
.midMain{
    width:94%;
    margin:0 auto;
}
.MidServer{
width:94%;
height:.6rem;
margin:0 auto;
display: flex;
/* justify-content: space-between; */
border-bottom:1px solid #e9edf0;
}
.MidServer .inputBox{
    width:1rem;
    font-size:16px;
    line-height: .6rem;
    border:none;
    outline: none;
}
.MidServer span{
    font-size:.2rem;
}
.number{
    font-size:16px;
    width:.4rem;
    margin-left:.1rem;
    line-height: .6rem;
}
.numberNext{
    width:1rem;
    margin-left:.2rem;
    color: grey;
}
.addressBook{
    color: #00aaef;
    margin:auto 0;
    margin-left: 0.2rem;
}
.addressBook span{
    display: block;
    width:1rem;
    height:.4rem;
    border:1px solid #e9edf0;
    margin: auto .3rem;
}
.MidServer .check{
    transform: scale(2); /* Safari and Chrome */
    margin-top: 0.26rem;
    outline: none;
    margin-left:.17rem;
}
.msgregiste{
    font-size:.18rem;
    color: #fd6766;
    margin-left:.2rem;
}
.nextFoot{
    display: block;
    width:94%;
    height:.5rem;
    background:#b50029;
    color: white;
    margin:.1rem auto ;
    border-radius: 6px;
    font-size: 16px;
    line-height: .5rem;
    text-align: center;
}
.botBox{
    font-size:.14rem;
    margin:0 auto;
    color:#00aaef;
    margin-top:1rem;
    width:1.6rem;
    display: flex;
}
.botBox span{
    color:#d2d5da;
}
</style>