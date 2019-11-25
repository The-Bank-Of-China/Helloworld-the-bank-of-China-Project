<!--
 * @Author: 陈晶华
 * @Date: 2019-11-06 21:19:00
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-16 02:34:34
 * @Description: "这是首页的头部搜索框"
 -->
    <template>
        <div class="SearchTop">
          <i class="el-icon-arrow-left" @touchstart="back()"></i>
           <div class="inp">
                <!-- <el-select v-model="value" placeholder="全部" class="down1">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :size="item.small"
                    :value="item.value">
                    </el-option>
                </el-select> -->
                 <!-- <el-input
                    placeholder="请输入"
                    suffix-icon="el-icon-right"
                    v-model="input1" class="get">
                </el-input> -->
                <input type="text" class="get" v-model="input1">
           </div>
           <span class="cancle" @click="seach()">搜索</span>
           <div class="result" ref="res" v-show="isshow()">
              <p v-for="(item,index) in results.search" :key="index">{{item.searchname}}</p>
           </div>
        </div>
    </template>
    <script>
      export default {
        data() {
          return {
            input1:"",
            results:[],
            options: [{
              value: '选项1',
              label: '全部'
            }, {
              value: '选项2',
              label: '功能'
            }, {
              value: '选项3',
              label: '产品'
            }, {
              value: '选项4',
              label: '常见问题'
            }],
            value: ''
          }
        },
        methods:{
          seach(){
            // console.log(this.input1)
            fetch('/api/else/history?searchname='+this.input1)
              .then(res=>{
                  return res.json();
              })
              .then(data=>{
                  this.results = data;
                  console.log(data);
              })
              .catch(err=>{
                  console.log(err);
              })
            },
            isshow(){
              if(this.results.length!=0){
                  return true;
              }else{
                return false;
              }
            },
            back(){
              this.$router.go(-1)
            }

        }
  }
    </script>
    <style>
        .inp .el-input__inner{
            border: 1px solid #fff;;
             outline: 0;
             box-sizing: border-box;
            border-radius: 0;
        }
        .el-select>.el-input{
            height: 100%;
        }
    </style>
    <style scope>
        .SearchTop{
            height: .55rem;
            width: 100%;
            background: #fff;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgb(194, 194, 194);
            justify-content: space-around;
            position: relative;
        }
        .el-icon-arrow-left{
          font-size: .2rem;
        }
        .result{
          position: absolute;
          top: .55rem;
          width: 100%;
          font-size: .14rem;
          background: #fff;
        }
        .result p{
          height: .4rem;
          line-height: .4rem;
          border-bottom: 1px solid rgb(194, 194, 194);
        }
        .inp{
            width: 76%;
            height: .34rem;
            display: flex;
            border-radius: .05rem;
            overflow: hidden;
            border: 1px solid rgb(194, 194, 194);

        }
        .inp .down1{
            display: block;
             height: 100%;
            width: 10%;
            
        }
        .get{
            width: 75%;
            height: 100%;
            border: none;
             outline: 0;
        }
        .cancle{
            font-size: .16rem;
            color: rgb(133, 132, 132);
        }
    </style>
   