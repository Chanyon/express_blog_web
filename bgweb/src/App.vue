<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      d-xs-flex
    >
    <Navitem></Navitem>
    </v-app-bar>
    <v-main>
      <v-container>
        <keep-alive include="ArtiDetails">
           <router-view :key="$route.path"/>
        </keep-alive>
      </v-container>
    </v-main>
    <v-footer
    dark
    padless
    >
    <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Navitem from './components/common/Navitem.vue'
import Footer from './components/common/Footer.vue'
export default {
  name: 'App',
  components:{
    Navitem,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
<style type="text/css">
@import 'assets/ress.css'
</style>
