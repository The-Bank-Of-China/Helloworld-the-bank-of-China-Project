<!--
 * @Author: renhui
 * @Date: 2019-11-13 16:21:42
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 00:50:21
 * @Description: ..
 -->
 <template>
   <div class="add">
      <div class="addContent">
         <p>银行卡号</p>
         <input type="text" placeholder="输入银行卡号" >
      </div>
      <div class="addContent autoContent">
         <p class="autop">所属银行</p>
         <el-select v-model="value" filterable placeholder="请选择">
            <el-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </div>
      <div class="addContent autoContent">
         <p>手机号</p>
         <input type="text" placeholder="输入手机号">
      </div>
      <div class="adddetile">
         <p>此银行卡在所属行预留的手机号与登录手机号一致</p>
      </div>
      <div class="btn">
         <input type="button" value="确认" >
         <!-- <input type="button" value="下一步" @click="showToast"> -->
      </div>
      <div class="adddetile">
         <p>支持银行包括但不限于：中国银行、工商银行、农业银行、建设银行、交通银行、邮储银行、招商银行、光大银行等多家商业银行。</p>
      </div>
   </div>
 </template>
 
 <script scoped>
 import {MessageBox} from 'mint-ui';
 export default {
    name:'Addautocontent',
    data() {
      return {
         options: [{
          value: '选项1',
          label: '中国银行'
        }, {
          value: '选项2',
          label: '工商银行'
        }, {
          value: '选项3',
          label: '农业银行'
        }, {
          value: '选项4',
          label: '建设银行'
        }, {
          value: '选项5',
          label: '交通银行'
        }],
        value: ''
      }
    },
    methods: {
      showToast:function(){
      
      MessageBox.prompt('请输入密码')
      .then(({ value, action }) => {
         
      })
    }
   }
 }
 </script>
 <style>
 p{
    font-size: .14rem;
 }
 .el-input__inner{
     border:none;
     margin-left:12px;
     width: 1.9rem;
 }
 
 </style>
 <style scoped>
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
 /* .mint-msgbox-message{
    font-size: .14rem;
 } */
 .autoContent{
    margin-top:0;
    border-top: 0.5px solid rgb(221, 220, 220);
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
    margin:20px 5% 0;
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
 .autop{
     margin-left:14px;
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
 .add{
    padding-bottom: .7rem;
 }
 </style>

