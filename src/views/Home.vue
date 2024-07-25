<template>
  <div class="home-container">
    <div class="logo">
      <img src="/images/logo.png" alt="logo" />
    </div>
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
img {
  width: 350px;
}
.home-container {
  display: flex;
  flex-direction: column;
  padding-left: 350px;
  align-items: center;
}

@media (max-width: 1560px) {
  img {
    width: 240px;
  }

  .home-container {
    display: flex;
    flex-direction: column;
    padding-left: 460px;
    align-items: center;
    width: 90vw;
    height: 100%;
    justify-content: center;
  }
}
</style>
