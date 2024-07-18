<template>
  <div>
    <h1>Home</h1>
  </div>
  <CustomButton path="/donuts" text="Donuts" />
  <CustomButton path="/orders" text="Orders" />
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  components: { CustomButton },
  name: "Home",
};
</script>

<style></style>
