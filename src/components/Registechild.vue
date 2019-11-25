<!--
 * @Author: your name
 * @Date: 2019-11-11 22:01:31
 * @LastEditTime: 2019-11-19 20:55:40
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\pages\News.vue
 -->
<template>
<div class="server">
    <!-- 注册的第一个页面 -->
    <div id="pervious" v-if="regBox1">
        <div class="headerMain">
            <div class="header">
                <span class="iconfont icon-shangyibu1" @click="goback"></span>
                <p>自动注册</p>
                <span class="iconfont icon-fenxiang1"></span>
            </div> 
        </div>
        <div class="midMain">
            <div class="MidServer">
                <p class="number">手机号</p>
                <input id="phone" v-model="tel" type="text" placeholder="请输入手机号" @blur="getel()">
            </div>
            <div class="MidServer">
                <p class="number">图形验证码</p>
                <input type="text" placeholder="请输入">
            <div class="addressBook">
                <span>
                    <img src="" alt="">
                </span>
            </div>
            </div>
            <div class="MidServer">
                <p class="number">密码</p>
                <input id="pass" type="password" v-model="userpass" placeholder="请输入密码" @blur="getuserpass()">
            </div>
            <div class="MidServer">
                <p class="number">确认密码</p>
                <input id="passok" type="password" v-model="surepass" placeholder="请确认密码" >
            </div>
            </div>
            <div class="readInfo">
                <input class="check" type="checkbox" checked>
                <p>本人已阅读并同意<span>《中国银行股份有限公司手机银行隐私政策》</span></p>
            </div>
            <p class="msgmain msggo">{{msg}}</p>
            <span @click="nextregiste" class="nextFoot">下一步</span>
    </div>
    <!-- 注册的第二个页面 -->
    <div v-else>
        <div class="headerMain">
        <div class="header">
            <span class="iconfont icon-shangyibu1" @click="backPage"></span>
            <p>填写身份信息</p>
            <span></span>
        </div> 
        </div>
        <div class="midMain">
            <div class="MidServer">
                <p class="number">姓名</p>
                <input v-model="username" type="text" placeholder="请输入">
            </div>
            <div class="MidServer">
                <p class="number">证件类型</p>
                <input type="text">
            <div class="addressBook">
                <span class="idcard">身份证</span>
            </div>
            </div>
            <div class="MidServer">
                <p class="number">证件号码</p>
                <input id="idcard" v-model="userid" type="text" placeholder="请输入" @blur="getuserid()">
                <div class="addressBook">
                    <span class="iconfont icon-mima2 idcard"></span>
                </div>
            </div>
        </div>
        <div class="readInfo">
            <input class="check checkTwo" type="checkbox" checked>
            <p class="readAgain">本人（甲方）已仔细阅读并提醒<span>《中国银行个人客户电子银行自助注册须知》</span>，完全同意和接受协议书全部条款和内容，愿意履行该协议书中约定的权利和义务</p>
        </div>
        <p class="msgmain msgregiste">{{ msgtwo}}</p>
        <span @click="goregister" class="nextFoot twoNext">注册</span>
    </div>
</div>
</template>
<script>
import axios from 'axios'; 
export default {
    name:"Registechild",
    data(){
        return{
            tel:"",
            userpass:"",
            surepass:"",
            username:"",
            userid:"",
            msg:"",
            msgtwo:"",
            regBox1:true
        }
    },
    methods:{
        jump(){
            // let dom = document.getElementById("nextJump")
            // let pervious = document.getElementById("pervious")
            // pervious.style.display = "none"
            // dom.style.display="block"
            return this.cur
        },
        backPage(){
            this.$router.go(-1)
        },
        goback(){
            this.$router.go(-1)
        },
        getel:function(){
            let phone = document.getElementById("phone").value;
            if(!(/^1[345789]\d{9}$/.test(phone))){
                 this.msg="手机号输入格式有误"
                 this.tel=""
            }else{
                this.msg=""
            }
        },
        // getuserpass:function(){
        //     let pass = document.getElementById("pass").value;
        //     if(!(/^(?:(\d)(?!((?<=9)8|(?<=8)7|(?<=7)6|(?<=6)5|(?<=5)4|(?<=4)3|(?<=3)2|(?<=2)1|(?<=1)0){5})(?!\1{5})(?!((?<=0)1|(?<=1)2|(?<=2)3|(?<=3)4|(?<=4)5|(?<=5)6|(?<=6)7|(?<=7)8|(?<=8)9){5})){6}$/).test(pass)){
        //          this.msg="6位数字密码不能6个数字相同，也不能顺增或者顺减"
        //          this.userpass=""
        //     }else{
        //         this.msg=""
        //     }
        // },
        getsurepass:function(){
            let pass = document.getElementById("pass").value;
            let passok = document.getElementById("passok").value;
            if(this.userpass!=this.surepass){
                 this.msg="两遍输入密码不一致"
                 this.surepass=""
                 
            }else{
                this.msg=""
            }
        },
        getuserid:function(){
            let userid = document.getElementById("idcard").value;
            if(!(/^\d{17}(\d|X)$/.test(userid))) {
                 this.msgtwo= "身份证不合格，身份证号（18位）"
                this.userid=""
            }else{
                this.msg=""
            }
        },
        nextregiste:function(){
            console.log(this.tel)
            console.log(this.userpass)
            let phone = document.getElementById("phone").value;
            let pass = document.getElementById("pass").value;
            if(phone.length==0||pass.length==0||passok.length==0||this.userpass!=this.surepass){
                alert("请重新输入")
            }
            else{
                // this.cur=!this.cur
                this.regBox1=false;
            }  
        },
        goregister:function(){
            // let phone = document.getElementById("phone").value;
            // let pass = document.getElementById("pass").value;
            // let passok = document.getElementById("passok").value;
            // let idcard = document.getElementById("idcard").value;
            if(this.userid==""){
                 this.msgtwo="身份证不能为空"
            }
            axios.post('api/user/registe?tel='+this.tel+'&userpass='+ this.userpass+'&username' +this.username +'&userid='+this.userid)
            .then(res=>{
                console.log(res.data.info)
                if(res.data.info=="ok"){
                    // return res.json()
                    this.$router.push({
                        path:'/Login'
                    })
                }else if(res.data.info=="no"){
                    
                    alert('已经被注册')
                }
            })
        }
    }

    
}
</script>
<style scoped>
.server{
    height:6.65rem;
    background:#f0eff5;
}
.headerMain{
    width:100%;
    background:white;
}
.header{
    width:96%;
    margin:0 auto;
    height:.5rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:16px;
}
.header p{
    font-weight: bold;
}
.header .iconfont{
    font-size:.25rem;
}
.midMain{
    width:94%;
    margin:0 auto;
    background:white;
    margin-top: .2rem;
    /* display:none; */
}
.readInfo{
    width:85%;
    height:.5rem;
    margin-top:.3rem;
    font-size:12px;
    display: flex;
    margin:0 auto;
    align-items: center;
    margin-top:.2rem;
}
.readInfo .check{
    font-size:.2rem;
    transform: scale(2); /* Safari and Chrome */
    margin-right:.1rem;
    margin-top:-.1rem;
    outline: none;
}
.readInfo .checkTwo{
    margin-top:-.05rem;
}
.readInfo p{
    letter-spacing: .03rem;
}
.readInfo span{
    color:#fd6766;
}
.readInfo .readAgain{
    margin-top:.3rem;
}
.msgmain{
    font-size:.16rem;
    color: #fd6766;
    margin-left:.2rem;
}
.msgregiste{
    margin-top:.25rem;
}
.MidServer{
width:94%;
height:.6rem;
margin:0 auto;
margin:0 auto;
display: flex;
border-bottom:1px solid #e9edf0;
}
.MidServer input{
    width:1rem;
    font-size:16px;
    line-height: .6rem;
    border:none;
    outline: none;
}
.number{
    font-size:16px;
    width:1rem;
    margin-left:.1rem;
    line-height: .6rem;
    font-weight:bold;
}
.addressBook{
    color: #00aaef;
    margin:auto 0;
    margin-left: 0.2rem;
}
.addressBook img{
    width:100%;
    height:100%;
}
.addressBook .idcard{
    font-size:14px;
    color: black;
    border:none;
    width: .4rem;
    display: block;
    line-height:.4rem;    
    margin-left: 0.5rem;
}
.addressBook .icon-mima2{
    color:#02a9ef;
    font-size:.25rem;
}
.addressBook span{
    display: block;
    width:1rem;
    height:.4rem;
    border:1px solid #e9edf0;
}
.nextFoot{
    display: block;
    width:94%;
    height:.5rem;
    background:#00aaef;
    color: white;
    margin:.1rem auto ;
    border-radius: 6px;
    font-size: 16px;
    line-height: .5rem;
    text-align: center;
}
.twoNext{
    margin-top:.2rem;
}
.serverMain{
    display: none;
}

</style>