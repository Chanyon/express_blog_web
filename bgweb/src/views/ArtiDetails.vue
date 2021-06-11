<template>
  <div class="details d-flex justify-center">
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
    <div class="top-bottom hidden-top" :class="{displayTop:isTopActive}" @click="handleTop">
     <v-icon
     large
     color="orange darken-2"
     >
     mdi-arrow-up-bold-box-outline
   </v-icon>
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
      isTopActive:false,
    }
  },
  methods:{
    async getDetails(){
      const res = await this.$http.get(`/articles/details/${this.id}`)
      this.detailsList = res.data.detailsData;
    },
    handleScroll(){
      let scrollTop = window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 1000) {
        this.isTopActive = true;
      }else{
        this.isTopActive = false;
      }
    },
    handleTop(){
      let top = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
      const timetop = setInterval(()=>{
        window.scrollTop = document.documentElement.scrollTop = document.body.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timetop);
        }
      },50)
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  created(){
    this.getDetails();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.details{
  .details-list{
   width: 1161px;
   height: auto;
   box-sizing:border-box;
   background-color:#263238;
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
 .top-bottom{
  &.hidden-top{
    display: none;
  }
  &.displayTop{
    display: block;
    transition: all 0.5;
  }
  position: fixed;
  top: 700px;
  right: 16%;
  cursor: pointer;
 }
}
</style>
