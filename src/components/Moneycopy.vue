<!--
 * @Author: renhui
 * @Date: 2019-11-12 16:58:01
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 00:55:06
 * @Description: ..
 -->
 <template>
   <div class="copybox">
        <div class="curtitle">
           <p>模拟专区</p>
           <span>更多</span>
        </div>
        <img src="../assets/img/3.png" alt="贵金属模拟交易">
   </div>
 </template>
 
 <script>
 export default {
     name:'Moneycopy',
     data(){
         return{
         }
     }
 }
 </script>
 
 <style scoped>
 .copybox{
     padding-bottom: .7rem;
 }
 .betterbox{
     width:100%;
     height:3rem;
     margin-top:.3rem;
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
 img{
     width:100%;
     margin-top:20px;
     border-radius:5px;
 }
 </style>
