
<template>
    <div class="extendlist">
        <ul class="liMain">
            <li class="listNav" v-for="(picture,index) in pictures" :key="index" >
                <a :href="picture.icon_index_url" class="iconImg">
                    <img :src="picture.icon_index_pic" alt="">
                </a>
                <span class="liname">{{picture.icon_index_name}}</span>
            </li> 
            <li class="listNav">
                <a href="#" class="iconmore">
                    <span class="iconfont icon-gengduo"></span>
                </a>
                <span class="liname">更多</span>
            </li> 
        </ul>
    </div>
</template>

<script>
    
    export default {
    data(){
        return {
            pictures:[]
        }
    },
    created:function(){
        fetch('/api/index/Icon_index',{
            method:"GET"
        })
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            
            this.pictures = data;
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
      
  }
}
</script>

<style scoped>
ul li{
    list-style: none;
    width: .65rem;
}
    .extendlist{
        height: 1.7rem;
        width: 100%;
        background: #ffffff;
        border: 1px solid rgb(255, 254, 254);
    }
    .extendlist .liMain{
        height: 100%;
        width: 92%;
        background: #ffffff;
        margin: 0 auto;
        margin-top: -0.1rem;
        border-radius: .1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
       box-shadow:1px 1px 8px 1px #f0f0f0;
        align-content: space-around;
    }
    .iconImg{
        display: block;
        height: .35rem;
        width: .35rem;
        margin: 0 auto;
    }
    .iconImg img{
        height: 100%;
        width: 100%;
        display: block;
    }
    .listNav span{
        font-size: .14rem;
        display: block;
    }
    .iconmore{
        display: block;
        color: #bebebe;
        height: .35rem;
        width: .35rem;
        line-height: .35rem;
        margin: 0 auto;
    }
    .iconmore .icon-gengduo{
        font-size: .3rem;
        /* text-align: center; */
    }
    .liname{
        text-align: center;
    }
    .listNav>span{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
        text-overflow:ellipsis;
    }

</style>
