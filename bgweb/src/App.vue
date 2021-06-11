<template>
  <div id="app">
    <div class="nav">
      <Navitem></Navitem>
    </div>
    <div>
      <router-view :key="$route.path"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script type="text/javascript">
  import Navitem from './components/common/Navitem.vue'
  import Footer from './components/common/Footer.vue'
  export default{
    components:{
        Navitem,
        Footer
    }
  }
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
body{
  background-color:#212121;
}
</style>
