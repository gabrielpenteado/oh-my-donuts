<template>
  <div class="navbar">
    <CustomButton path="/" text="Home" />
    <div v-if="route.name === 'Donuts'">
      <CustomButton path="/orders" text="Orders" />
    </div>
    <div v-if="route.name === 'Orders'">
      <CustomButton path="/donuts" text="Donuts" />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import CustomButton from "./CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
  computed: { route: () => useRoute() },
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
}
</style>
