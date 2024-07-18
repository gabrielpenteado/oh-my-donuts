<template>
  <div class="navbar">
    <div class="navbar-buttom" v-if="route.name === 'Orders'">
      <CustomButton path="/" text="Home" />
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
  background-color: aqua;
  height: 12vh;
  justify-content: flex-end;
  align-items: center;
}
</style>
