<template>
  <div class="donut-table">
    <DonutCard v-for="donut in donutsList" :key="donut.id" :donut="donut" />
  </div>
</template>

<script>
import DonutCard from "./DonutCard.vue";
import donutsData from "../data/data";

export default {
  components: {
    DonutCard,
  },
  computed: {
    donutsList() {
      return donutsData;
    },
  },

  name: "DonutTable",
};
</script>

<style>
.donut-table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 600px;
  gap: 40px;
}
</style>
