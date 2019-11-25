<!--
 * @Author: renhui
 * @Date: 2019-11-11 21:24:01
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 01:02:04
 * @Description: ..
 -->
 <template>
   <div class="bgbox">
      <div class="titlebox">
          <p>金融超市</p>
          <router-link to="/Kefu" class="iconbox">
             <span class="iconfont icon-kefu"></span><br/>
             <p>客服</p>
          </router-link>
      </div>
      <div class="detilebox">
          <div class="boxp">
             <p>投资总金额(元)<p/>
             <span class="iconfont icon-zhengyan" v-show="eyes" @click="yanjing()"></span>
             <span class="iconfont icon-mima" v-show="!eyes" @click="yanjing()"></span>
          </div>
          <p class="tipp">{{tip}} 
             <span class="iconfont icon-icon"></span>
          </p>
      </div>
   </div>
 </template>
 
 <script scoped>
 export default {
    name:'Moneyheader',
     data(){
         return{
             tip:"0.00",
             eyes:true
         }
     },
     methods:{
         yanjing(){
             this.eyes=!this.eyes
             if(this.eyes==false){
                 this.tip="****"
             }else if(this.eyes==true){
                 this.tip="0.00"
             }
         }
     }
 }
 </script>
 
 <style scoped>
  .bgbox{
     width:100%;
     height:1.5rem;
     font-size:14px;
     background:url(../assets/img/bg.jpg) no-repeat;
     background-position:0px -152px;
     position: relative;
} 
.titlebox{
     font-size:16px;
     color:white;
     height:.6rem;
     display: flex;
     justify-content:center;
     align-items: center;
}
.icon-kefu{
    font-size:.3rem;
}
.iconbox{
    display: block;
    color: aliceblue;
    position:absolute;
    top:10%;
    right:5%;
    font-weight: 100;
}
.iconbox p{
    font-size:.14rem;
    padding-left:2px;
    margin-top:-5px;
}
.icon-zhengyan,.icon-mima{
     font-size:24px;
     padding-bottom:10px;
     padding-left:7px;
     color:white;
}
 .iconfont p{
     font-size:13px;
     color:black;
     margin-left:-.2rem;
     margin-top:.1rem;
 }
  .iconfont{
     margin-top:.1rem;
     padding-right:.2rem;
 }
 .iconfont span{
     font-size:13px;
     color:black;
     margin-left:-.1rem;
     margin-top:.1rem;
 }
 .detilebox .boxp{
     color:rgb(228, 222, 222);
     font-size:12px;
     padding-left: 45px;
     display: flex;
     justify-content:center;
     align-items: center;
     left:2%;
 }
 .detilebox .tipp{
     text-align: center;
     color:white;
     font-size:22px;
     margin-top:-10px;
 }
 .tipp span{
     margin-left:-12px;
 }
 </style>
