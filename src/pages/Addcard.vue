<!--
 * @Author: renhui
 * @Date: 2019-11-13 11:22:15
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-13 11:34:25
 * @Description: ..
 -->
 <template>
   <div class="Addbox">
     <Addcardheader></Addcardheader>
     <Addcardcontent></Addcardcontent>

   </div>
 </template>
 
 <script scoped>
 import Addcardheader from '../components/Addcardheader'
 import Addcardcontent from '../components/Addcardcontent'

 export default {
    name:'Addcard',
    data(){
      return{

      }
    },
    components:{
        Addcardheader,Addcardcontent
    }
 }
 </script>
 
 <style scoped>
 
 </style>
