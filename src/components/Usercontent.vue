<!--
 * @Author: renhui
 * @Date: 2019-11-12 00:41:21
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-12 09:49:57
 * @Description: ..
 -->
<template>
   <div class="contentbox">
          <div class="list myCount1">
              <p>基本信息<br/><span>证件类型、证件号码等</span></p>
              <span class="iconfont iconfont2 icon-icon"></span>
          </div>
          <div class="list myCount2">
              <p>其他信息<br/><span>包含地址信息、工作信息、联系信息</span></p>
              <span class="iconfont iconfont2 icon-icon"></span>
          </div>
          <div class="list myCount3">
              <p>个人税收居民身份声明</p>
              <span class="iconfont iconfont2 icon-icon"></span>
          </div>
          <div class="list myCount4">
              <p>更新身份证有效期</p>
          </div>
          <p class="heart">
            温馨提示：为保障您的账户安全，如姓名、证件信息及手机号码发生变更，请您携带本人有效证件至我行任一网点进行修改，感谢您的支持与配合。
          </p>
   </div>
 </template>
 
 <script scoped>
 export default {
      name:'Usercontent',
      data(){
        return{

        }
    }
 }
 </script>
 
 <style scoped>
 .contentbox{
    margin-top:.1rem;
    font-size:15px;
    height:3.9rem;
}
 .list{
    width:100%;
    height:.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.7px solid rgb(187, 190, 190);
    background-color: #fff;
    padding-left:10px;
}
.list p{
  font-size: 14px;
  font-weight: 600;
}
.list span{
  font-size: 12px;
  color:rgb(145, 143, 143);
}
.iconfont{
  margin-right:.22rem;
}
.myCount4{
  border-bottom:none;
  margin-bottom:.15rem;
}
.heart{
  text-indent:8px;
  font-size: 12px;
  padding-top:8px;
  color:rgb(182, 180, 180);
}
 </style>
