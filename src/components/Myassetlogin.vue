<!--
 * @Author: renhui
 * @Date: 2019-11-11 15:14:58
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 04:19:27
 * @Description: ..
 -->
 <template>
   <div class="myassetlogin">
      <div class="mobbile">
            <div class="mobbileTop">
                <p>中国移动全球通专属</p>
                <span class="iconfont icon01 icon-icon"></span>
            </div>
            <div class="bottom">
                <span class="iconfont icon01 icon-diqiux"></span>
                <span class="iconfont icon01 icon-zaixiankaihu-icon"><br/><p>中银证券开户</p></span>
                <span class="iconfont icon01 icon-huafeichongzhi"><br/><span>话费充值</span></span>
            </div>
      </div>
      <div class="mymoney">
          <div class="moneyTop">
              <span class="iconfont icon01 icon-wodezijin"></span>
              <p>我的资产</p>
              <span class="iconfont icon01 icon-zhengyan" v-show="eyes" @click="yanjing()"></span>
              <span class="iconfont icon01 icon-mima" v-show="!eyes" @click="yanjing()"></span>
          </div>
          <div class="moneyDetile" >
              <div class="div.detileLeft">
                  <p>资产(人民币元)</p>
                  <p>{{cards.data.card.account}}</p>
              </div>
              <div class="div.detileRight">
                  <p>负债(人民币元)</p>
                  <p>{{tip1}}</p>
              </div>
          </div>
      </div>
   </div>
 </template>
 
 <script>
 export default {
     name:'Myassetlogin',
     data(){
         return{
             cards:[],
             tip1:"0.00",
             eyes:true
         }
     },
     methods:{
         yanjing(){
             this.eyes=!this.eyes
             if(this.eyes==false){
                 this.tip1="****"
             }else if(this.eyes==true){
                 this.tip1="0.00"
             }
         }
    },
    created(){
        // console.log("created");
        fetch('/api/trade/selectiaccount')
        .then(res=>{
           return res.json();
        })
        .then(data=>{
           this.cards = data;
           console.log(data);
        })
        .catch(err=>{
            console.log(err);
         })
     }
 }
 </script>
 
 <style>
 .myassetlogin{
     margin-top:.12rem;
     width:100%;
     height:2.75rem;
 }
 .mobbile{
     background-color:white;
 }
 .mobbileTop p {
     font-size: 14px;
     margin-left:.1rem;
     margin-top:.12rem;
     padding-top:.05rem;
 }
 .mobbileTop{
     display: flex;
     justify-content: space-between;
     align-items: center;
     align-self:center;
}
 .icon01{
     margin-top:.1rem;
     padding-right:.2rem;
 }
 .bottom{
     display: flex;
     justify-content: space-around;
     align-items: center;
     padding-bottom:.2rem;
 }
 .icon-diqiux{
     font-size:70px;
     color:rgb(66, 170, 218);
     padding-top:.18rem;
 }
 .icon-zaixiankaihu-icon,.icon-huafeichongzhi{
     padding-top:.1rem;
     font-size:30px;
     color:rgb(66, 170, 218);
 }
 .icon01 p{
     font-size:13px;
     color:black;
     margin-left:-.2rem;
     margin-top:.1rem;
 }
 .icon01 span{
     font-size:13px;
     color:black;
     margin-left:-.1rem;
     margin-top:.1rem;
 }
 .mymoney{
     background-color:white;
     margin-top:.15rem;
     height:1rem;
     padding-bottom:.1rem;
 }
.moneyTop{
     font-size:15px;
     display: flex;
     justify-content:center;
     align-items: center;
     border-bottom: 0.7px solid rgb(187, 190, 190);
     margin-bottom:.1rem;
}
.icon-wodezijin{
     color:orange;
     padding-bottom:8px;
     padding-left:10px;
     margin-right:-10px;
}
.icon-zhengyan,.icon-mima{
     font-size:22px;
     padding-bottom:8px;
     padding-left:7px;
}
.moneyDetile{
    padding-top:.1rem;
     display: flex;
     justify-content:space-around;
     align-items: center;
}
.moneyDetile p{
     font-size:13px;
     color:black;
     text-align:center;
}
 </style>
