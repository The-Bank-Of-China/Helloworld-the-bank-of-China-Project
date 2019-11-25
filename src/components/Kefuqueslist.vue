<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 11:57:18
 * @Description: "000"
 -->

<template>
  <div id="ques">
      <ul class="queslist" >
          <li @click="drawer = true" type="primary" style="margin-left: 16px;" v-for="(item,index) in ques1" :key="index" >
              <span class="quest">{{item.hname}}</span>
              <i class="el-icon-arrow-right"></i>
          </li>
      </ul>
       <div style="display:none" >{{typeid}}</div>
      <div class="change">
          <i class="el-icon-refresh"></i>
          <span>换一批</span>
      </div>
      <!-- <el-drawer
            title="热门问题"
            id="cont"
            :visible.sync="drawer"
            :direction="direction">
            <span id="ans">111111111111111111</span>
        </el-drawer> -->
  </div>
</template>

<script>
export default {
    props:['typeid'],
    data(){
        return {
            ques1:[],
            drawer: false,
            direction: 'btt',
            oldtype: ""
        }
    },
// computed:{
    created(){
        console.log(this.typeid)
        fetch('/api/else/hotson?id='+this.typeid)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            this.ques1 = data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    updated(){
        if(this.typeid!=this.oldtype){
            this.oldtype = this.typeid;
            fetch('/api/else/hotson?id='+this.typeid)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                console.log(data);
                this.ques1 = data;
            })
            .catch(err=>{
                console.log(err);
            })
        }

    }

// }
    
}
</script>

<style scoped>
    #ques{
        background: #fff;
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
   #ans,#cont{
       font-size: .14rem;
   }
    #ans{
        display: block;
        padding:0 .2rem ;
        margin-bottom: .5rem;
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
