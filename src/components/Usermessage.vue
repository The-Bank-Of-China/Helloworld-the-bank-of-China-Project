<!--
 * @Author: renhui
 * @Date: 2019-11-11 21:24:01
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 03:43:23
 * @Description: ..
 -->
 <template>
   <div class="messagebox">
        <img src="../assets/img/logo.png" alt="中国银行">
        <br/>
        <p>{{username}}</p>
   </div>
 </template>
 
 <script>
 export default {
      name:'Usermessage',
      data(){
        return{
            username:""
        }
    },
     created:function(){
        this.username=window.localStorage.getItem("tel")
    }
    
 }
 </script>
 
 <style scoped>
 .messagebox{
     margin-top:.1rem;
     width:100%;
     height: 2rem;
     background-image: url(../assets/img/bg.jpg);
     background-position:0px -100px;
 }
 img{
    width:.6rem;
    height:.6rem;
    line-height: .6rem;
    margin-left:42%;
}
p{
  font-size: 16px;
  text-align: center;
}
 </style>
