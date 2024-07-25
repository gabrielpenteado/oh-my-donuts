<template>
  <div class="input-group">
    <input
      required=""
      :type="type"
      :name="name"
      autocomplete="off"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <label class="user-label">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: "InputText",

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
.input-group {
  position: relative;
}

.input {
  border: solid 2px #fff;
  border-radius: 10px;
  background: #000;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.user-label {
  position: absolute;
  left: 15px;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(0.7rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid {
  outline: none;
  border: 2px solid #bc2bff;
}

.input:focus ~ label,
input:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: #212121;
  padding: 0 0.2em;
  color: #bc2bff;
}
</style>
