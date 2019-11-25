<!--
 * @Author: renhui
 * @Date: 2019-11-14 20:47:09
 * @LastEditors: renhui
 * @LastEditTime: 2019-11-14 23:52:09
 * @Description: ..
 -->
 <template>
  <div class="box">
      <Tradeheader></Tradeheader>
      <Tradecontent></Tradecontent>
      
  </div>
</template>

<script>
import Tradeheader from '../components/Tradeheader'
import Tradecontent from '../components/Tradecontent'


export default {
    name:'Trade',
    data(){
        return{

        }
    },
    components:{
       Tradeheader,Tradecontent
    }
}
</script>

<style scoped>
.box{
     background-color: #f0eff5;
}
</style>
