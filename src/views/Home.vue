<template>
  <div class="home-container">
    <div class="logo">
      <Image src="/images/logo.png" alt="logo" width="500px" />
    </div>
    <Form></Form>
  </div>
</template>

<script>
import Image from "primevue/image";
import Form from "../components/Form.vue";

export default {
  components: { Form, Image },
  name: "Home",
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  padding-left: 350px;
  align-items: center;
}
</style>
