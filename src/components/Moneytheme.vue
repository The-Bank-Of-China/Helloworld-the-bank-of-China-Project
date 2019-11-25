<!--
 * @Author: renhui
 * @Date: 2019-11-12 16:58:01
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-12 21:15:27
 * @Description: ..
 -->
 <template>
   <div class="themebox">
        <div class="curtitle">
           <p>投资主题</p>
           <span>更多</span>
        </div>
        <ul class="currul">
            <li>
                <a href="#">
                    <img src="../assets/img/1.png" alt="安心养老">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/img/2.png" alt="全球视野">
                </a>
            </li>
        </ul>

   </div>
 </template>
 
 <script>
 export default {
     name:'Moneytheme',
     data(){
         return{
         }
     }
 }
 </script>
 
 <style scoped>
 .themebox{
     width:100%;
     height:1.9rem;
     margin-top:.1rem;
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
     height:2rem;
     list-style: none;
     text-align: center;
 }
 .currul{
     display: flex;
     justify-content: space-around;
     margin-top:20px;
 }
 img{
     width:100%;
     border-radius:5px;
 }
 </style>
