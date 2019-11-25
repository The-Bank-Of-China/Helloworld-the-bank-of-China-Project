<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 12:14:49
 * @Description: "000"
 -->

<template>
  <div id="ques">
      <p class="tt">热门问题</p>
      <ul class="quesclass">
          <li v-for="(cla,index) in classes.hot" :key="index" @touchstart="changetype(cla.id)">{{cla.hname}}</li>
      </ul>
      <Kefuqueslist :typeid="currtype"></Kefuqueslist>
  </div>
</template>

<script>
import Kefuqueslist from './Kefuqueslist';

export default {
    data(){
        return {
            classes:[
            ],
            ques1:[
                
            ],
            currtype:""
        }
    },
    components:{
      Kefuqueslist
    }, 
    created:function(){
        fetch('/api/else/hot',{
            method:"GET"
        })
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            
            this.classes = data;
            // this.ques1 = data.hot1;
            // console.log(2222222222222);
            // console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
      changetype(typeid){
        //   console.log(typeid);
          this.currtype = typeid;
        //   console.log(this.currtype);

      }
  }
}
</script>

<style scoped>
    #ques{
        background: #fff;
    }
    .tt{
        height: .4rem;
        background-color: #fff;
        line-height: .4rem;
        font-size: .18rem;
        padding: 0 .1rem;
    }
   .quesclass{
       height: .45rem;
       background-color: #fff;
       font-size: .14rem;
       display: flex;
        align-items: center;
        overflow-x: auto;
        border-bottom: 1px solid rgb(223, 223, 223);
       /* margin:0 .1rem; */
   }
   .quesclass li{
       /* padding: 0 .1rem; */
        margin:0 .1rem;
        flex-shrink: 0;
   }
   .quesclass li:hover{
       color: rgb(45, 141, 219);
   }
   .quesclass li:last-child{
       padding-right: .1rem;
   }
   .queslist{
       padding: 0 .1rem;
   }
   .queslist li{
       height: .4rem;
       /* background-color: rgb(177, 124, 124); */
       display: flex;
       justify-content: space-between;
       align-items: center;
       border-bottom: 1px solid rgb(223, 223, 223);
   }
   .quest{
       font-size: .14rem;
   }
   i{
       font-size: .18rem;
   }
   .el-icon-refresh{
       color: rgb(12, 176, 241);
   }
   .change span{
       color: rgb(12, 176, 241);
       font-size: .13rem;
   }
   .change{
       display: flex;
       justify-content: center;
       height: .4rem;
       align-items: center;
   }
   ul li{
       list-style: none;
   }
</style>
