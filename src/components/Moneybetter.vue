<!--
 * @Author: renhui
 * @Date: 2019-11-12 16:58:01
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-12 21:15:38
 * @Description: ..
 -->
 <template>
   <div class="betterbox">
        <div class="curtitle">
           <p>优选权益</p>
           <span>更多</span>
        </div>
        <ul class="currul">
            <li>
                <a href="#">
                    <p class="news2">0.16%</p>
                    <p class="news4 news6">日涨幅</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p class="news2 news5">博时鑫惠混合A</p>
                    <p class="news4">掘新科创，精鑫配置</p>
                </a>
            </li>
        </ul>

   </div>
 </template>
 
 <script>
 export default {
     name:'Moneybetter',
     data(){
         return{
             currents:[

             ]
         }
     }
 }
 </script>
 
 <style scoped>
 .betterbox{
     width:100%;
     height:1.12rem;
     margin-top:.7rem;
 }
 .curtitle{
     width:95%;
     height:.2em;
     font-size:15px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-top:6px;
 }
 .curtitle p{
     font-size:16px;
     font-weight: 600;
     padding-left:10px;
 }
 .currul li{
     width:43%;
     height:1rem;
     list-style: none;
     text-align: center;
 }
 li p {
     margin-top:10px;
 }
 ul{
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin-top:16px;
 }
 .news2{
     color:red;
     font-size:16px;
     font-weight: 600;
 }
.news4{
     font-family: "微软雅黑";
     font-size:12px;
     color:rgb(116, 114, 114);
 }
 .news5{
     color:black;
 }
 .news6{
     margin-left:-12px;
 }
 </style>
