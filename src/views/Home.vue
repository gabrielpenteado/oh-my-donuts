<template>
  <div class="home-background">
    <h1>Home</h1>
    <div class="home-buttons">
      <CustomButton path="donuts" text="Donuts" />
      <CustomButton path="orders" text="Orders" />
    </div>
  </div>

  <!-- <CustomButton class="home-button" path="/donuts" text="Donuts" />
  <CustomButton path="/orders" text="Orders" /> -->
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  components: { CustomButton },
  name: "Home",
};
</script>

<style>
.home-background {
  background-image: url("/images/background.png");
  background-size: cover;
  height: 84vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
