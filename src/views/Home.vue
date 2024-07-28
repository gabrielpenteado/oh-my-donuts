<template>
  <div class="home-container">
    <div class="images">
      <img class="logo" src="/images/logo.png" alt="logo" />
      <img class="price" src="/images/price.png" alt="price" />
    </div>
    <span class="message" v-show="$store.state.message">{{
      $store.state.message
    }}</span>
    <Form></Form>
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  components: { Form, SubmitButton },
  name: "Home",
};
</script>

<style scoped>
.images {
  display: flex;
  justify-content: space-evenly;
}

.logo {
  width: 350px;
}

.price {
  width: 250px;
}

.home-container {
  display: flex;
  flex-direction: column;
  padding-left: 350px;
  align-items: center;
}

@media (max-width: 1560px) {
  .logo {
    width: 240px;
  }

  .price {
    width: 150px;
  }

  .home-container {
    display: flex;
    flex-direction: column;
    padding-left: 460px;
    align-items: center;
    width: 80vw;
    height: 100%;
    justify-content: center;
  }
}
</style>
