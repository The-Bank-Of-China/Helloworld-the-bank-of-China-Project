<!--
 * @Author: renhui
 * @Date: 2019-11-13 11:22:15
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 20:10:31
 * @Description: ..
 -->
 <template>
    <div class="autoboxTop">
       <span class="iconfont icon-shangyibu1" @click="back()"></span>
       <p>手动添加</p>
       <span></span>
   </div>
 </template>
 
 <script>
 export default {
    name:'Addautoheader',
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
 p{
    font-size: .14rem;
 }
 .autoboxTop{
    width:100%;
    height:.5rem;
    background-color: white;
    display: flex;
    justify-content:space-between;
    align-items:center;
    left:2.5%;
 }
 p{
   line-height: .5rem;
   text-align: center;
   font-size:.14rem;
   font-weight:600;
 }
 .iconfont{
   font-size:24px;
 }
 .icon-shangyibu1{
   padding-left:8px;
 }
 </style>
