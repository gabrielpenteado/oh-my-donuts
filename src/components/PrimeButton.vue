<template>
  <div>
    <div v-if="route.name === 'orders'">
      <router-link to="/">
        <Button label="Home" severity="warn" size="large"></Button>
      </router-link>
    </div>
    <div v-else>
      <router-link to="/orders">
        <Button label="Orders" severity="info" size="large"></Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import { useRoute } from "vue-router";

export default {
  components: {
    Button,
  },
  computed: { route: () => useRoute() },
  name: "PrimeButton",
};
</script>

<style scoped></style>
