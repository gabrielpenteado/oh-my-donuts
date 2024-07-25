<template>
  <div class="card1">
    <span>Cinnabreeze</span>
    <img src="/images/6.png" alt="donut" />
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      min="0"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String], // [String, Number] accept both
      default: "",
    },
  },
};
</script>

<style scoped>
span {
  font-size: 18px;
  font-family: "Segoe Print", sans-serif;
  color: #fff;
}

.card1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

img {
  width: 100px;
}

input:focus {
  border: 2px solid #bc2bff;
  outline: none;
}

input {
  font-size: 16px;
  padding: 6px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  border: 2px solid white;
}

input[type="number"]::-webkit-inner-spin-button {
  all: unset;
  min-width: 21px;
  min-height: 45px;
  margin: 17px;
  padding: 0px;
  background-image: linear-gradient(
      to top,
      transparent 0px,
      transparent 16px,
      #000 16px,
      #000 26px,
      transparent 26px,
      transparent 35px,
      #fff 35px,
      #fff 36px,
      transparent 36px,
      transparent 40px
    ),
    linear-gradient(
      to right,
      transparent 0px,
      transparent 10px,
      #fff 10px,
      #fff 11px,
      transparent 11px,
      transparent 21px
    );
  transform: rotate(90deg) scale(0.8, 0.9);
  cursor: pointer;
}

@media (max-width: 1560px) {
  img {
    width: 80px;
  }
}
</style>
