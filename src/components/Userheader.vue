<!--
 * @Author: renhui
 * @Date: 2019-11-11 21:24:01
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-13 09:17:16
 * @Description: ..
 -->
 <template>
   <div class="userbox">
       <span class="iconfont icon-shangyibu1" @click="back()"></span>
       <p>我的个人信息</p>
   </div>
 </template>
 
 <script scoped>
 export default {
    name:'Userheader',
    data(){
      return{

      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
 }
 </script>
 
 <style scoped>
 .userbox{
    width:100%;
    height:.5rem;
    background-color: white;
    position: relative;
 }
 p{
   line-height: .5rem;
   text-align: center;
   font-size:15px;
   font-weight:600;
 }
 .iconfont{
   font-size:24px;
 }
 span{
   position: absolute;
   left:2%;
   top:25%;
   color:black;
 }
 </style>
