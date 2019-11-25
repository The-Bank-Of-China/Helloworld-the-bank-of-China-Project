<!--
 * @Author: your name
 * @Date: 2019-11-09 17:46:37
 * @LastEditTime: 2019-11-16 02:00:44
 * @LastEditors: 陈晶华
 * @Description: In User Settings Edit
 
 * @FilePath: \第三阶段c:\Users\123\Desktop\workspace\bankofchina\src\components\Myheader.vue
 -->
<template>
   <div class="myheader">
          <el-carousel :interval="5000" arrow="never" >
            <el-carousel-item v-for="(img,index) in imgs" :key="index" id="ban">
                <a href="#"  >
                    <img :src="img.pic_url" >
                </a>
            </el-carousel-item>
        </el-carousel>
    </div> 
</template>
<script>
export default {
  name:"Mybanner",
  data () {
    return {
      imgs:[
        ]
    }
  },
  created(){
    fetch('/api/index/selectIndex_lunbo')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.imgs = data;
         console.log(data) 
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>
<style scoped>
.myheader{
  width:100%;
  height: 1.5rem;/*400px*/
  overflow: hidden;
  margin-top: .6rem;
}
img{
  width:100%;
  height: 100%;
}
 #ban .el-carousel__container{
    height: 1rem;
}
.el-carousel__container .el-carousel__item{
    height: 1.5rem;
}
.el-carousel{
    height: 1.5rem;
}
</style>