<!--
 * @Author: renhui
 * @Date: 2019-11-12 16:58:01
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 18:43:46
 * @Description: ..
 -->
 <template>
   <div class="regularbox">
        <div class="curtitle">
           <p>定期投资</p>
           <span>更多</span>
        </div>
        <ul class="currul">
            <li>
                <a href="#">
                    <p class="news1">三个月内</p>
                    <p class="news2">2.32%</p>
                    <p class="news3">七年日化收益率</p>
                    <p class="news4">大成月月盈短时间内</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p class="news1">六个月</p>
                    <p class="news2">0.99%</p>
                    <p class="news3">日涨幅</p>
                    <p class="news4">中银证券瑞日益中银证券</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p class="news1">一年</p>
                    <p class="news2" id="coloral">-0.08%</p>
                    <p class="news3">日涨幅</p>
                    <p class="news4">国富美元债券日涨幅</p>
                </a>
            </li>
        </ul>

   </div>
 </template>
 
 <script>
 export default {
     name:'Moneyregular',
     data(){
         return{
         }
     }
 }
 </script>
 
 <style scoped>
 p{
     font-size: .14rem;

 }
 .regularbox{
     width:100%;
     height:1.5rem;
     margin-top:.5rem;
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
     width:30%;
     height:1.3rem;
     list-style: none;
     text-align: center;
     border:0.5px solid rgb(240, 238, 238);
     box-shadow: 2px 2px 2px rgb(230, 228, 228);
     background-color: #f8f8f8;
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
li .news4{
    width:100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:gray;
 }
#coloral{
    color:green;
 }
li .news3,.news4{
     font-family: "微软雅黑";
     font-size:12px;
 }
 </style>
