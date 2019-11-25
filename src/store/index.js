/*
 * @Author: 陈晶华
 * @Date: 2019-11-14 18:03:36
 * @LastEditors: 陈晶华
 * @LastEditTime: 2019-11-15 20:28:27
 * @Description: "000"
 */

import Vue from 'vue'
import VueX from 'vueX'


Vue.use(VueX)

export default new VueX.Store({
    state: {//存储数据
        footCls: [
            true,
            false,
            false,   
            false
        ]
    },
    mutations: {//跟踪状态
        changeFootCls(state,Index){
            // console.log(Index)
            // 合法性判断
            if(Index<0 || Index>state.footCls.length-1){
                return;
            }
            state.footCls.forEach((item,index,arr)=>{
                arr[index] = false;
            });
            state.footCls[Index] = true;
        }
    }
})