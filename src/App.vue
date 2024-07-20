<template>
  <!-- <Navbar></Navbar> -->
  <div class="container">
    <div></div>
    <div></div>
    <router-view></router-view>
    <div class="prime-button">
      <PrimeButton />
    </div>
  </div>
  <!-- <Footer></Footer> -->
</template>

<script>
import PrimeButton from "./components/PrimeButton.vue";

export default {
  components: {
    PrimeButton,
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

.container {
  background-image: url("/images/background.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  padding: 40px 40px;
  display: flex;
  justify-content: space-between;
}
</style>
