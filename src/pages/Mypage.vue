<!--
 * @Author: renhui
 * @Date: 2019-11-11 09:50:30
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-11 21:21:02
 * @Description: ..
 -->
 <template>
   <div class="box">
       <!-- <Mymessage></Mymessage>
       <Myasset></Myasset>-->

       <Mymessagelogin></Mymessagelogin> 
       <Myassetlogin></Myassetlogin>
       <Mypagebottom></Mypagebottom>
    </div>
 </template>
 
 <script>
 import Mymessage from '../components/Mymessage'
 import Mymessagelogin from '../components/Mymessagelogin'
 import Myasset from '../components/Myasset'
 import Myassetlogin from '../components/Myassetlogin'
 import Mypagebottom from '../components/Mypagebottom'


 
 export default {
     name:'Mypage',
     data(){
         return{
             
         }
     },
     components:{
         // Mymessage,Myasset
        Mymessagelogin,Myassetlogin,Mypagebottom
     }
 }
 </script>
 
 <style scoped>
 .box{
     background-color: #f0eff5;
 }
 </style>
