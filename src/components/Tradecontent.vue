<!--
 * @Author: renhui
 * @Date: 2019-11-14 23:31:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 10:04:54
 * @Description: ..
 -->
<template>
  <div class="tradebox"> 
      <div class="acc">
          <p>付款账户</p>
          <div class="ico">
             <p class="inico">{{cards.data.card.card}}</p>
          </div>
      </div>
      <p class="pp">可用余额:<span>人民币 {{cards.data.card.account}}</span></p>
      <div class="count">
          <div class="count1">
              <p>币种 <span>人民币元</span></p>
          </div>
          <div class="count2">
               <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="转账金额" style="fontWeight:600"> </el-form-item>
                    <input type="text" v-model="trmoney" id="trademoney" placeholder="请输入" oninput = "value=value.replace(/[^\d]/g,'')">
               </el-form>
          </div>
          <div class="bcc">
            <p class="bccp">收款人名称</p>
            <div class="ico">
                <input type="text" id="tradename" v-model="trname" placeholder="请输入">
            </div>
          </div>
          <div class="bcc bcc1">
            <p class="bccp">收款账号</p>
            <div class="ico">
                <input id="tradeaccount" v-model="traccount" type="text" placeholder="请输入" oninput = "value=value.replace(/[^\d]/g,'')">
            </div>
          </div>
          <div class="fcc bcc bcc1">
              <p>附言</p>
              <div class="ico">
                 <input id="trademes" v-model="trmes" type="text" placeholder="选填，最多10个汉字">
              </div>
          </div>
            <div class="add">
                <div class="addContent">
                    <p>密码</p>
                    <input id="tradepass" v-model="trpass" type="password" placeholder="输入六位数密码" oninput = "value=value.replace(/^(\d{4})(\d{4})(\d{4})$/)">
                </div>
                <div class="btn">
                    <input @click="gotrade" type="button" value="确认转账">
                </div>
            </div>
          
      </div>
    
  </div>
</template>

<script>
import axios from 'axios'; 
export default {
    name:'Tradecontent',
    data(){
        return{
            cards:[],
            labelPosition: 'right',
            formLabelAlign: {
            name: '',
            region: '',
            type: '',
            trmoney:'',
            trname:'',
            traccount:'',
            trmes:'',
            trpass:''
            }
        }
    },
    methods:{
        gotrade:function(){
            console.log(this.trmoney)
            console.log(this.trname)
            console.log(this.traccount)
            console.log(this.trmes)
            console.log(this.trpass)
            
            if(this.trmoney==null && this.trname==null && this.traccount==null && this.trpass==null){
                alert("输入内容不允许为空")
            }else{
            axios.post('api/zhu/zhuanzhang?trademoney='+this.trmoney+"&tradename="+this.trname+"&tradeincard="+this.traccount+"&trademess="+this.trmes+"&password="+this.trpass+"&tradedate="+"2019-4-6")
            .then(res=>{
                console.log(res.data)
                if(res.data.info=="1"){
                    alert("银行卡与姓名有误，这是您的卡嘛！")
                }else if(res.data.info=="2"){
                    alert('亲！您没钱啦！')
                }else if(res.data.info=="3"){
                    alert('不好意思！密码错误')
                }else if(res.data.info=="4"){
                    alert('亲！您还没绑卡！')
                }else if(res.data.info=="5"){
                    alert('请登录')
                }else if(res.data.info=="6"){
                    alert('转账成功')
                    this.$router.push({
                        path:'/Index'
                    }) 
                }
            })
                    
            }
                
        }
    },
     created(){
        fetch('/api/trade/selectiaccount')
        .then(res=>{
           return res.json();
        })
        .then(data=>{
           this.cards = data;
           console.log(data)
        })
        .catch(err=>{
            console.log(err);
         })
     }
}
</script>

<style>
.count2 .el-form-item__label{
    color: black;
}
</style>
<style scoped>
.acc,.bcc,.fcc{
    width:95%; 
    height:.5rem;
    background-color: white;
    margin-top:.2rem;
    margin-left:2.5%;
    font-size:14px;
    border-radius:2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:0.5px solid rgb(219, 219, 219); 
}
.bcc .bccp{
    margin-left:5px;
}
.count .fcc{
    margin-top:.2rem;
}
.tradebox .pp{
    font-size: 12px;
}
.count .bcc p{
    font-weight: 600;
    margin-left:-20px;
    color:black;
}

.tradebox .count .fcc p{
    margin-left:-50px;
}
.bcc .ico .inico{
    margin-left:-52px;
    font-weight: 300;
}
.count .bcc p{
    font-weight: 600;
    margin-left:-42px;
    color:black;
}
.bcc1{
    margin-top:0;
    border-bottom:0;    
}
.tradebox .acc p{
    font-size:14px;
    color:black;
    font-weight: 600;
    margin-left:-30px;
}
.tradebox .ico span{
    color:black;
}
input{
    border:none;
    outline:none;
}
.tradebox p{
    line-height: 0.4rem;
    color:rgb(189, 185, 185);
    font-size: 14px;
    margin-left:4%;
}
.tradebox span{
    color:#ffaa01;
    font-weight: 600;
}
.count1{
    width:95%;
    background-color: white;
    margin-left:2.5%;
    border-bottom:0.5px solid rgb(219, 219, 219); 
}
.count1 p{
    font-weight: 600;
    color:black;
}
.count2{
    height:0.8rem;
    width:95%;
    background-color: white;
    margin-left:2.5%;
    display: flex;
    flex-direction:column;
    border-radius:2px;
    align-items: left;
}
.count2 input{
    display:block;
    font-size:18px;
    width:95%;
    margin-top:-14px;
    margin-left:4%;
}
.add .addContent p{
    color:black;
    margin-left:-48px;
}
.add .addContent input::-webkit-input-placeholder { 
/* WebKit browsers */ 
    color: rgb(221, 221, 221); 
}
.count2 input::-webkit-input-placeholder { 
/* WebKit browsers */ 
    color: rgb(221, 221, 221); 
} 
.ico input::-webkit-input-placeholder { 
/* WebKit browsers */ 
    color: rgb(221, 221, 221); 
} 
.count1 span{
    float:right;
    margin-right:4%;
    color:black;
    font-weight: 400;
}

.count .btn input{
    width:95%;
    margin-top: 30px;
    margin-left:2.5%;
    height:.4rem;
    color:white;
    border-radius:4px;
    font-size:16px;
    background-color:rgb(78, 133, 235);
 }
</style>

 <style scoped>
 .addContent{
    width:95%;
    height:.5rem;
    background-color: white;
    margin-top:.2rem;
    margin-left:2.5%;
    border-radius:2px;
    display:flex;
    align-items:center;
    justify-content:space-around;
 }
 .addContent p{
    font-weight: 700;
 }
  input{
    display:block;
    outline:none;
    border:none;
 }
 .adddetile{
    margin:20px 2.5% 0;
 }
 .adddetile p{
    font-size:13px;
    color:rgb(165, 163, 163);
 }
 .btn input{
    width:95%;
    margin: 40px auto 0;
    height:.4rem;
    color:white;
    border-radius:4px;
    font-size:16px;
    background-color:rgb(78, 133, 235);
 }
 </style>
