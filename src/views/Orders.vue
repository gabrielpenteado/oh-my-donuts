<template>
  <div class="orders-container">
    <img class="logo" src="/images/logo.png" alt="logo" />
    <div class="tbl-container">
      <h1>Orders:</h1>
      <div class="table">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Chocoluxe</th>
              <th scope="col">Berrilicious</th>
              <th scope="col">Twixie</th>
              <th scope="col">Frostique</th>
              <th scope="col">Mochavibe</th>
              <th scope="col">Cinnabreeze</th>
              <th scope="col">$Total</th>
              <th scope="col"></th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <!-- <th scope="row">1</th> -->
              <td class="orderId">{{ index + 1 }}</td>
              <td>{{ order.name }}</td>
              <td>{{ order.phone }}</td>
              <td>{{ order.chocoluxe }}</td>
              <td>{{ order.berrilicious }}</td>
              <td>{{ order.twixie }}</td>
              <td>{{ order.frostique }}</td>
              <td>{{ order.mochavibe }}</td>
              <td>{{ order.cinnabreeze }}</td>
              <td>${{ order.totalPrice }}</td>
              <td></td>
              <td>x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",

  computed: {
    orders() {
      return this.$store.state.orderList;
    },
  },
};
</script>

<style scoped>
.logo {
  padding-left: 480px;
  align-self: center;
}

.orders-container {
  display: flex;
  flex-direction: column;
}

.tbl-container {
  padding-left: 640px;
}

h1 {
  font-size: 2.5rem;
  color: white;
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
  padding-bottom: 4px;
  padding-top: 10px;
}

table {
  color: white;
  /* width: 100%; */
}

.table {
  width: 100%;
}

thead {
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  position: sticky;
  top: 0;
}

th {
  padding: 14px 10px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
  position: sticky;
  top: 0;
}

.orderId {
  color: rgb(245, 221, 8);
  font-size: large;
  font-weight: 800;
}

td {
  padding: 14px;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(172, 172, 172, 0.808);
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1560px) {
  .logo {
    width: 400px;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
