<!--
 * @Author: renhui
 * @Date: 2019-11-13 09:24:56
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 04:09:59
 * @Description: ..
 -->
 <template>
<div class="content">
 
    <div class="contentadd" >
       <div class="contenttop">
          <p>中行卡</p>
       </div>
       <div class="cont">
          <div class="cont1">
             <img :src="cards.c.pic_url" alt="">
             <div class="borrbox">
                 <p class="borr1">{{cards.data.card.card}}</p>
                 <p class="borr2">{{cards.data.card.card_info}}</p>
             </div>
             <div class="elbox">
                  <div class="elleft">
                     电子
                  </div>
                  <div class="elright">
                     现金 
                  </div>
             </div>
          </div>
          <div class="cont2">
             <p class="cott">账面余额</p>
             <p></p>
             <p class="cott1">人民币元<span>{{cards.data.card.account}}</span></p>
          </div>
          <div class="cont3">
            <p>交易明细</p>
            <p class="conn">|</p>
            <p>转账</p>
            <p class="conn">|</p>
            <p>买理财</p>
          </div>
       </div> 
    </div>
    <div class="contentbox">
       <router-link to="/Addcard">
          <div class="addbox">
            <p>
               <i>+</i>
               手动添加卡/账户<br/>
               <span>添加您的中行或他行账户</span>
            </p>
         </div> 
        </router-link>
    </div>
</div>
    
 </template>
 
 <script>

 export default {
     name:'Countercontent',
     data(){
        return{
           cards:[]
        }
     },
     created(){
        fetch('/api/trade/selectiaccount')
        .then(res=>{
           return res.json();
        })
        .then(data=>{
           this.cards = data;
         //   console.log("这是数据")
           console.log(data)
        })
        .catch(err=>{
            console.log(err);
         })
     }
 }
 </script>
 
 <style scoped>
 p{
    font-size: .14rem;
 }
 .content{
    padding-bottom: .7rem;
 }
 .contentadd{
    width:100%;
    margin-top:.2rem;
    margin-bottom:.1rem;
 }
 .contenttop{
    width: 100%;
    height:.25rem;
 }
 .contenttop p{
    margin-left:4%;
    font-size:12px;
    color:gray;
 }
 .cont{
    width:95%;
    margin-left:2.5%;
    height:1.55rem;
    background-color:white;
    border-radius: 7px;
    box-shadow:2px 2px 2px rgb(228, 227, 227);
 }
 .cont3 .conn{
    color:rgb(235, 235, 235);
 }
 .cont1{
    height:35%;
    display: flex;
    justify-content: space-around;
    align-items: center;
 }
 .cont1 img{
    width:.5rem;
    height: .3rem;
    display:block;
    margin-left:-6px;
    border-radius:2px;
 }
 .cont1 .borrbox{
    margin-left:-30px;
    height:100%; 
    margin-top:16px;
 }
 .borrbox .borr1{
    font-size:14px;
    font-weight:600;
    letter-spacing:1.5px; 
 }
 .borrbox .borr2{
    font-size:12px;
    letter-spacing:1px; 
    color:#666666;
 }
 .cont1 .elbox{
    height:.13rem;
    width:.45rem;
    text-align:center;
    border:1px solid #ffaa01;
    font-size:8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:-12px;
    margin-right:-6px;
 }
 .elbox .elleft{
    width:50%;
    height:.136rem;
    border:1px solid #ffaa01;
    background-color: #ffaa01;
    box-sizing: border-box;
    color:white;
 }
 .elbox .elright{
    width:50%;
    height:.136rem;
    color:#ffaa01;
 }
 .cont2{
    height:30%;
    background:#fbf8f1;
    display:flex;
    justify-content:space-around;
    align-items:center;
 }
 .cont2 .cott{
    margin-left:-22px;
    color:#747273;
 }
  .cont2 .cott1{
    color:#666666;
    margin-right:-24px;
    font-weight: 600;
 }
 .cont2 p,span{
    font-size:12px;
 }
.cott1 span{
    color:black;
    margin-left:5px;
 } 
 .cont3{
    height:35%;
    display:flex;
    justify-content:space-around;
    align-items:center;
 }
 .contentbox{
    width:100%;
    height:.7rem;
 }
 .addbox{
    width:95%;
    height:.7rem;
    margin-left:2.5%;
    margin-top:.2rem;
    background-color:white;
    border-radius: 7px;
    box-shadow:2px 2px 2px rgb(228, 227, 227);
 }
 .addbox span{
    font-size:12px;
    color:rgb(158, 158, 158);
 }
 .addbox p{
    padding-top:10px;
    text-align:center;
    color: rgb(97, 97, 216);
 }
 i{
    font-style:normal;
    font-size:20px;
 }
 </style>
 