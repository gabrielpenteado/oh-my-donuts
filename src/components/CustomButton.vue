<template>
  <div>
    <router-link :to="path">
      <Button :label="text" severity="success" outlined></Button>
    </router-link>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  props: ["path", "text"],
  name: "CustomButton",
  components: {
    Button,
  },
};
</script>

<style scoped></style>
