<template>
  <form @click.prevent="onSubmit">
    <div class="inputs">
      <div>
        <InputText
          type="text"
          id="name"
          placeholder="Name"
          v-model="formName"
        />
      </div>
      <div>
        <InputMask
          id="phone"
          v-model="formPhone"
          mask="(999) 999-9999"
          placeholder="(999) 999-9999"
          fluid
        />
      </div>
    </div>
    <div class="donut-table">
      <DonutTable />
    </div>
    <Button class="submitButton" type="submit" label="Submit"></Button>
  </form>
</template>

<script>
import InputText from "primevue/inputtext";
import DonutTable from "./DonutTable.vue";
import Button from "primevue/button";
import InputMask from "primevue/inputmask";

export default {
  components: {
    InputText,
    InputMask,
    DonutTable,
    Button,
  },
  name: "Form",

  methods: {
    onSubmit() {
      console.log("enviou");
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-color: azure;
  border: 1px solid white;
  border-radius: 20px;
  padding: 28px;
}

.inputs {
  padding-bottom: 30px;
  display: flex;
  gap: 90px;
  justify-self: center;
  margin: 0 auto;
}
.submitButton {
  width: 180px;
  align-self: center;
  margin-top: 30px;
}
</style>
