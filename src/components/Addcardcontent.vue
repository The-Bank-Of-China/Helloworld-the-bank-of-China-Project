<!--
 * @Author: renhui
 * @Date: 2019-11-13 11:22:15
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 20:10:38
 * @Description: ..
 -->
 <template>
   <div class="add">
      <div class="addContent">
         <p>银行卡号</p>
         <input type="text" placeholder="输入银行卡号">
      </div>
      <router-link to="/Addauto">
         <div class="btn">
            <input type="button" value="下一步">
         </div>
      </router-link>
      
      <div class="adddetile">
         <p>1.支持中行借记卡、信用卡</p>
         <p>2.他行卡，目前只支持工商银行、农业银行、建设银行、交通银行、邮储银行。</p>
      </div>
   </div>
 </template>
 
 <script scoped>
 export default {
    name:'Addcardcontent',
    data(){
      return{

      }
    },
    methods:{

    }
 }
 </script>
 
 <style scoped>
 p{
    font-size: .14rem;
 }
 .addContent{
    width:95%;
    height:.5rem;
    background-color: white;
    margin-top:.2rem;
    margin-left:2.5%;
    border-radius:2px;
    display:flex;
    align-items:center;
    justify-content:space-around;
 }
 .addContent p{
    font-weight: 700;
 }
  input{
    display:block;
    outline:none;
    border:none;
 }
 .adddetile{
    margin:20px 2.5% 0;
 }
 .adddetile p{
    font-size:13px;
    color:rgb(165, 163, 163);
 }
 .btn input{
    width:95%;
    margin: 40px auto 0;
    height:.4rem;
    color:white;
    border-radius:4px;
    font-size:16px;
    background-color:rgb(78, 133, 235);
 }
 </style>
