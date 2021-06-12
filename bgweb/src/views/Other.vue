<template>
  <div class="home d-flex justify-center">
    <div class="homelist d-flex justify-space-between">
      <div class="left">
        <AsideItem :articles="articlesList"></AsideItem>
        <!-- <div>当前第{{currentPage}}页</div> -->
        <div class="pagesize">
          <ul class="pagination">
            <li @click="prevOrNest(-1)"><span>«</span></li>
            <li v-for="(item,index) in pages" :key="index" @click="select(item)">
              <span :class="{active: item=== currentPage}">{{item}}</span>
            </li>
            <li @click="prevOrNest(1)"><span>»</span></li>
          </ul>
        </div>
      </div>
      <!-- 分页结束 -->
      <div class="right">
       <AsideItemRight>
         <div slot="top" class="right-top">
           <img :src="getImage">
         </div>
         <div slot="midd" class="right-midd">
           <h4>分类</h4>
           <div class="catelist">
             <div>
               <span>{{getCategoryName}}-{{articlesList.length}}篇</span>
             </div>
           </div>
         </div>
       </AsideItemRight>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AsideItem from '../components/common/AsideItemLeft.vue'
import AsideItemRight from '../components/common/AsideItemRight.vue'
export default {
  name: 'Home',
  components: {
    AsideItem,
    AsideItemRight,
  },
  props:{
    id:{
      type:String,
    }
  },
  data(){
    return{
      currentPage:1,
      PageSize:6,
      totalPages:null,
      articlesList:[],
    }
  },
  methods:{
    select(item){
      if (item === this.currentPage) return;
      if (typeof item === 'string') return;
      this.currentPage = item;
      this.getArticleFeach(this.currentPage,this.PageSize);
    },
    prevOrNest(n){
       this.currentPage +=n;
      if (this.currentPage <= 1) {
        this.currentPage = 1;
      }else if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
      this.getArticleFeach(this.currentPage,this.PageSize);
    },
    async getArticleFeach(currentPage,PageSize){
      if (this.id) {
         const res = await this.$http.get(`/articles/list/${this.id}?currentPage=${currentPage}&PageSize=${PageSize}`);
      this.articlesList = res.data.info.artidata;
      this.totalPages = res.data.info.allpages;
      }
      // else{
      //    const res = await this.$http.get(`/articles/javascript/frontend?currentPage=${currentPage}&PageSize=${PageSize}`);
      // this.articlesList = res.data.info.artidata;
      // this.totalPages = res.data.info.allpages;
      // }
    },
    async getImageFeach(){
      const res = await this.$http.get(`/backimages/list`);
      this.image = res.data.backData
    }
  },
  computed: {
    pages() {
     const cp = this.currentPage;
     const tp = this.totalPages;
     let liList = []; 
     if (cp <= tp) {
       liList = [cp,cp+1,cp+2];
     }else if (cp >tp) {
       liList = ['...',cp,cp+1];
     }
    return liList;
  },
  getCategoryName(){
    let catename = this.articlesList.map(item =>{
      return item.category[0];
    });
    return catename[0].name;
  },
   getImage(){
     return this.$store.getters.dorandomImage
    }
},
  created(){
    this.getArticleFeach(this.currentPage,this.PageSize);
    this.getImageFeach();
  },
}
</script>

<style scoped lang="less">
  .home{
    .homelist{
      width: 1161px;
      height: auto;
      background-color: #263238;
      .left{
          width: 65%;
          margin:10px 40px;
          .pagesize{
            margin-top: 40px;
            .pagination{
              list-style:none;
              display: inline-block;
              li{
                display: inline;
                cursor: pointer;
                span{
                  color:#fcfcfa;
                  padding:8px 16px;
                  text-decoration: none;
                  transition: background-color .3s;
                }
                span.active{
                  background-color:#ffd866;
                  color: #fcfcfa;
                }
                span:hover:not(.active){
                  background-color:#403e41;
                  cursor: pointer;
                }
              }
            }
          }
      }
      .right{
        display: flex;
        flex-direction: column;
        align-items:center;
        width: 35%;
        margin:10px 40px;
        .right-top{
          display: flex;
          justify-content: center;
          align-items:center;
          margin-top: 80px;
          width: 210px;
          border-top:8px dashed #403e41;
          border-bottom:8px dashed #403e41;
          img{
            margin: 20px 0;
            width: 200px;
            height: 180px;
            // border:1px solid #f2f2f2;
            // border-radius: 10px;
          }
        }
      }
      .right-midd{
        margin-top: 25px;
        h4{
          color: #403e41;
        }
        .catelist{
          padding:12px 0;
          color: #41b883;
          display: flex;
          flex-wrap: wrap;
          span{
            padding: 5px;
          }
        }
      }
    }
  }
</style>