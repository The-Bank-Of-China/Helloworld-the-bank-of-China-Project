<!--
 * @Author: 陈晶华
 * @Date: 2019-11-04 19:08:33
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-14 00:34:44
 * @Description: "000"
 -->

<template>
  <div id="Kfli">
      <router-link to="/Index">
            <span class="iconfont icon-chaoshijiaoyiliushui-bian"></span>
            <p class="tit">交易限额</p>
      </router-link>
      <router-link to="/Index">
            <span class="iconfont icon-paiduijiaohao1"></span>
            <p class="tit">网点排队</p>
      </router-link>
      <router-link to="/Index">
            <span class="iconfont icon-_jilu"></span>
            <p class="tit">转账记录查询</p>
      </router-link>
      <router-link to="/Index">
            <span class="iconfont icon-shebaoqiaguashi"></span>
            <p class="tit">卡片挂失</p>
      </router-link>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
    #Kfli{
        height: .8rem;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: .1rem;
    }
    #Kfli .iconfont{
        font-size: .3rem;
        display: block;
        height: .32rem;
        line-height: .32rem;
        text-align: center;
    }
    #Kfli .chaoshijiaoyiliushui-bian{
        color: rgb(252, 160, 40);
    }
    #Kfli .icon-paiduijiaohao1{
        font-size: .34rem;
       color: rgb(19, 163, 115);
    }
    #Kfli .icon-_jilu{
        color: rgb(255, 169, 56);
    }
    #Kfli .shebaoqiaguashi{
        color: rgb(252, 82, 40);
    }
    #Kfli .tit{
        padding-top: .05rem;
        text-align: center;
        font-size: .14rem;
        color: #000;
    }
</style>
