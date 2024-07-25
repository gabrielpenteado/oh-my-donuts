<template>
  <!-- <Navbar></Navbar> -->
  <div class="container">
    <div></div>
    <div></div>
    <router-view></router-view>
    <div class="customButton">
      <Button></Button>
    </div>
  </div>
  <!-- <Footer></Footer> -->
</template>

<script>
import Button from "./components/Button.vue";

export default {
  components: {
    Button,
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
  background-image: url("/images/background.jpg");
  background-size: cover;
  background-attachment: fixed;
}

.container {
  width: 100vw;
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
}
</style>
