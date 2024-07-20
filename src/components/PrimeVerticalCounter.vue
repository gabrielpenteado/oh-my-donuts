<template>
  <div>
    <InputNumber
      class="input-number"
      v-model="value"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="20"
      style="width: 2.5rem"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus"></span>
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus"></span>
      </template>
    </InputNumber>
  </div>
</template>

<script>
import InputNumber from "primevue/inputnumber";

export default {
  data() {
    return {
      value: 0,
    };
  },
  name: "PrimeVerticalCounter",
  components: {
    InputNumber,
  },
};
</script>

<style scoped>
.pi {
  color: white;
}
</style>
