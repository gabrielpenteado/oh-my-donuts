<template>
  <div class="donut-card">
    <Image
      :src="donut.image"
      alt="donut"
      width="70"
      style="padding-right: 8px"
    />
    <PrimeVerticalCounter />
  </div>
</template>

<script>
import Image from "primevue/image";
import PrimeVerticalCounter from "./PrimeVerticalCounter.vue";

export default {
  components: {
    PrimeVerticalCounter,
    Image,
  },
  name: "PrimeCard",
  props: ["donut"],
};
</script>

<style scoped>
.donut-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
