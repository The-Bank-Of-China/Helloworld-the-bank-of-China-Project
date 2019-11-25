<!--
 * @Author: renhui
 * @Date: 2019-11-13 15:36:26
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-13 16:27:44
 * @Description: ..
 -->
  <template>
   <div class="autobox">
      <Addautoheader></Addautoheader>
      <Addautocontent></Addautocontent>
   </div>
   
 </template>
 
 <script>
 import Addautoheader from '../components/Addautoheader'
 import Addautocontent from '../components/Addautocontent'
 export default {
    name:'Addauto',
    data(){
      return{

      }
    },
    components:{
      Addautoheader,Addautocontent
    }
 }
 </script>
 
 <style scoped>
 
 </style>
