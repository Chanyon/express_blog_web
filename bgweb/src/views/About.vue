<template>
  <div class="about">
    <div>
      <span>什么都没有！</span>
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
    display: flex;
    justify-content: center;
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
