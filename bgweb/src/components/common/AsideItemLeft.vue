<template>
  <div class="asideleft">
    <div v-for="(item,index) in articles" :key="index" class="asidel-b">
      <div class="asideleft-top">
        <router-link tag="a" :to="`/details/${item._id}`" class="asideleft-link">{{item.articlename}}</router-link>
        <div>
         <span>创建于{{item.createdAt | date}}</span>
         <span>·</span>
         <span>更新于{{item.updatedAt | date}}</span>
         <span class="asideleft-top-span">+{{item.articategory}}</span>
       </div>
     </div>
     <div class="asideleft-bottom">
      <p v-html="item.description.slice(0,30)"></p>
     </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import dayjs from 'dayjs'
export default {
  name: 'AsideItemLeft',
  components: {
    
  },
  props:['articles'],
  filters:{
    date(val){
      return dayjs(val).format('YYYY-MM-DD');
    }
  }
}
</script>
<style scoped lang="less">
.asideleft{
  .asidel-b{
    border-bottom: 1px solid #f2f2f2;
    .asideleft-top{
      a{
        display: inline-block;
        font-size: 18px;
        color: #ffd866;
        padding: 13px 5px;
        text-decoration: none;
      }
      a:hover{
        color: #ff6188;
        cursor: pointer;
        text-decoration: underline;
      }
      span{
        font-size: 14px;
        color: #fcfcfa;
      }
      .asideleft-top-span{
        padding-left:20px;
        font-size: 14px;
        color: #03a9f4;
      }
    }
    .asideleft-bottom{
      padding:16px 5px;
      font-size: 16px;
      color: #fcfcfa;
    }
  }
}
</style>