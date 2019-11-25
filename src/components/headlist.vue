<!--
 * @Author: 陈晶华
 * @Date: 2019-11-06 21:19:00
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 00:33:42
 * @Description: "这是头部的基本功能"
 -->
    <template>
       <ul class="headlist">
           <li>
               <div class="nav-icon">
                   <span class="iconfont icon-saoyisao"></span>
               </div>
               <span class="iconname">扫一扫</span>
           </li>
           <li>
               <div class="nav-icon">
                   <span class="iconfont icon-shoufukuan"></span>
               </div>
               <span class="iconname">收付款</span>
           </li>
           <li>
               <router-link to="/Trade" class="nav-icon">
                   <span class="iconfont icon-zhuanzhang-"></span>
               </router-link>
               <span class="iconname">转账</span>
           </li>
           <li>
               <div class="nav-icon">
                   <span class="iconfont icon-weibiaoti51"></span>
               </div>
               <span class="iconname">账户管理</span>
           </li>
       </ul>
    </template>
    <script>
     
    </script>
    <style scoped>
    ul li{
        list-style: none;
    }
    a{
        display:block;
    }
        .headlist{
            height: 1.2rem;
            width: 100%;
            background: rgb(252,85,92);
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: .5rem;
        }
        .headlist li span{
            display: block;
            text-align: center;
        }
        .iconname{
            font-size: .14rem;
            margin-top: .07rem;
            color: #ffe7e7;
            text-align: center;
        }
        .headlist li .nav-icon{
            height:.4rem;
            width:.4rem;
            margin: 0 auto;
            line-height: .4rem;
            border-radius: .07rem;
            background:linear-gradient(#f7e6dc,#fcc09e); 
        }
        .nav-icon .iconfont{
            text-align: center;
            font-size: .3rem;
            color: #ec3843;
        }
    </style>