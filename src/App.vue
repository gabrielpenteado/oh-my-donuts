<template>
  <div>
    <Navbar></Navbar>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  max-width: 1920px;
  min-width: 320px;
}
</style>
