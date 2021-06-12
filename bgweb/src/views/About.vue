<template>
  <div class="about d-flex d-sm-flex d-md-flex d-lg-flex justify-center ">
    <div>
      <span style="color: #41b883;">网站技术栈:</span>
      <span>前后端分离使用vue2、vuetifyUI、elementUI、express@next、mongodb开发</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .about{
    div{
      width: 1161px;
      height: 900px;
      background-color: #263238;
      text-align: center;
      span{
        display: inline-block;
        margin-top: 20px;
        font-size: 28px;
        color: #fcfcfa;
      }
    }
  }
</style>
