<template>
  <form @submit.prevent="onSubmit">
    <div class="inputs">
      <InputText name="name" type="text" text="Name" v-model="order.name" />
      <InputText name="phone" type="tel" text="Phone" v-model="order.phone" />
    </div>

    <div class="donut-table">
      <Card1
        type="number"
        name="number"
        text="number"
        v-model.number="order.chocoluxe"
      />
      <Card2
        type="number"
        name="number"
        text="number"
        v-model.number="order.berrilicious"
      />
      <Card3
        type="number"
        name="number"
        text="number"
        v-model.number="order.twixie"
      />
      <Card4
        type="number"
        name="number"
        text="number"
        v-model.number="order.frostique"
      />
      <Card5
        type="number"
        name="number"
        text="number"
        v-model.number="order.mochavibe"
      />
      <Card6
        type="number"
        name="number"
        text="number"
        v-model.number="order.cinnabreeze"
      />
    </div>
    <SubmitButton class="submitButton"></SubmitButton>
  </form>
  <!-- <span style="color: white">{{ JSON.stringify(order) }}</span> -->
</template>

<script>
import SubmitButton from "./SubmitButton.vue";
import InputText from "./InputText.vue";
import Card1 from "./donuts/Card1.vue";
import Card3 from "./donuts/Card3.vue";
import Card2 from "./donuts/Card2.vue";
import Card4 from "./donuts/Card4.vue";
import Card5 from "./donuts/Card5.vue";
import Card6 from "./donuts/Card6.vue";

export default {
  components: {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
    InputText,
    SubmitButton,
  },
  name: "Form",
  data() {
    return {
      order: {
        name: "",
        phone: "",
        chocoluxe: "0",
        berrilicious: "0",
        twixie: "0",
        frostique: "0",
        mochavibe: "0",
        cinnabreeze: "0",
      },
    };
  },

  //   computed: {
  //     donutsList() {
  //       return donutsData;
  //     },
  //   },
  //   created() {
  //     console.log(this.$store.state);
  //   },
  methods: {
    onSubmit() {
      console.log(this.order);
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: azure;
}

.donut-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 700px;
  gap: 20px;
  justify-self: center;
}

.inputs {
  padding-bottom: 30px;
  display: flex;
  gap: 70px;
  justify-self: center;
  margin: 0 auto;
}
.submitButton {
  width: 180px;
  align-self: center;
  margin-top: 50px;
}
</style>
