<template>
  <div class="orders-container">
    <!-- <div v-for="(order, index) in orders" :key="index">
      <p>{{ order.name }}</p>
      <p>{{ order.phone }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Orders",
  created() {
    console.log(this.$store.state);

    // this.$store.dispatch("getOrderList");
  },
  //   computed: {
  //     orders() {
  //       return this.$store.state.orderList;
  //     },
  //   },
};
</script>

<style scoped>
p {
  color: white;
}
</style>
