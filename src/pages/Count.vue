<!--
 * @Author: renhui
 * @Date: 2019-11-12 21:30:34
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 19:59:37
 * @Description: ..
 -->
 <template>
   <div class="Countbox">
       <Countheader></Countheader>
       <Countcontent></Countcontent>
   </div>
 </template>
 
 <script>
import Countheader from '../components/Countheader'
import Countcontent from '../components/Countcontent'


 export default {
     name:'Count',
     data(){
         return{

         }
     },
    components:{
        Countheader,Countcontent
    }
 }
 </script>
 
 <style scoped>
.Countbox{
     background-color: #f0eff5;
 }
 p{
     font-size: .14rem;
 }
 </style>
