<!--
 * @Author: renhui
 * @Date: 2019-11-12 16:58:01
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 18:42:38
 * @Description: ..
 -->
 <template>
   <div class="currentbox">
        <div class="curtitle">
           <p>活期投资</p>
           <span>更多</span>
        </div>
        <ul class="currul">
            <!-- <li v-for="(curr,index) in currentdatas" :key="index">
                <a href="#">
                    <p class="news1">{{curr.new1}}</p>
                    <p class="news2">{{curr.new2}}</p>
                    <p class="news3">{{curr.new3}}</p>
                    <p class="news4">{{curr.new4}}</p>
                </a>
            </li> -->
            <li>
                <a href="#">
                    <p class="news1">中银活期宝</p>
                    <p class="news2">2.37%</p>
                    <p class="news3">七年日化收益率</p>
                    <p class="news4">点滴积累 足够美好</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p class="news1">中银证券现金管家B</p>
                    <p class="news2">2.49%</p>
                    <p class="news3">七年日化收益率</p>
                    <p class="news4">管好现金持好家</p>
                </a>
            </li> 
        </ul>

   </div>
 </template>
 
 <script>
 export default {
     name:'Moneycurrent',
     data(){
         return{
            //  currentdatas:[]
         }
     },
    //  created:function(){
    //       fetch('/api/shenghuo/sh1')
    //      .then(res=>{
    //          return res.json();
    //      })
    //      .then(data=>{
    //          console.log(data);
    //          this.currentdatas = data;
    //      })
    //      .catch(err=>{
    //          console.log(err);
    //      })
    //  }
 }
 </script>
 
 <style scoped>
 p{
     font-size: .14rem;

 }
 .currentbox{
     width:100%;
     height:1.5rem;
 }
 .curtitle{
     width:95%;
     height:.3rem;
     font-size:15px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-top:6px;
 }
 .curtitle p{
     font-size:16px;
     font-weight: 600;
     padding-left:10px;
 }
 .currul li{
     width:43%;
     height:1.3rem;
     list-style: none;
     text-align: center;
     border:0.5px solid rgb(240, 238, 238);
     box-shadow: 2px 2px 2px rgb(230, 228, 228);
 }
 li p {
     margin-top:10px;
 }
 ul{
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin-top:10px;
 }
 .news1{
     font-weight: 600;
 }
 .news2{
     color:red;
     font-size:16px;
     font-weight: 600;
 }
li .news3,.news4{
     font-family: "微软雅黑";
     font-size:12px;
 }
 li .news4{
     color:gray;
 }
 </style>
