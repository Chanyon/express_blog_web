<template>
  <div class="details">
    <div class="details-list">
      <div class="details-list-top">
        <h4>{{detailsList.articlename}}</h4>
        <div>
          <span>创建于{{detailsList.createdAt | date}}</span>
          <span>·</span>
          <span>更新于{{detailsList.updatedAt | date}}</span>
          <span v-if="detailsList.category[0].name ==='' " class="identification">#</span>
          <span v-else class="identification">#{{detailsList.category[0].name}}</span>
        </div>
      </div>
      <div class="details-list-body">
        <p v-html="detailsList.description"></p>
      </div>
      <!-- 相关文章 -->
      <div class="related">
        <h4><em>相关文章</em></h4>
        <div class="related-title">
          <router-link :to="`/details/${item._id}`" v-for="(item,index) in detailsList.related" :key="index">
            &#10150;{{item.articlename}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: '',
  props: {
    id: String
  },
  filters:{
    date(val){
      return dayjs(val).format('YYYY-MM-DD');
    }
  },
  data(){
    return{
      detailsList:null,
    }
  },
  methods:{
    async getDetails(){
      const res = await this.$http.get(`/articles/details/${this.id}`)
      this.detailsList = res.data.detailsData;
    }
  },
  created(){
    this.getDetails();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.details{
  display: flex;
  justify-content: center;
  .details-list{
   width: 1024px;
   height: auto;
   box-sizing:border-box;
   background-color: #2d2a2e;
   padding:10px 25px;
   .details-list-top{
    color:#fcfcfa;
    h4{
      font-size: 28px;
    }
    div{
      margin-top: 20px;
      span{
        font-size: 12px;
        padding-right:5px;
      }
      .identification{
        color: #ffd866;
      }
    }
   }
   .details-list-body{
    color:#fcfcfa;
    margin-top: 20px;
   }
   .related{
    margin-top: 80px;
    h4{
      color: #fcfcfa;
      font-size: 20px;
    }
    .related-title{
      width: 320px;
      display: flex;
      flex-direction: column;
      a{
        width: auto;
        color: #ffd866;
        padding:5px 5px;
        text-decoration: none;
        text-overflow:ellipsis;
      }
      a:hover{
        color: #ff6188;
        cursor: pointer;
        text-decoration: underline;
      }
    }
   }
 }
}
</style>
