<template>
  <button form="donuts-form" type="submit">
    <span class="txt">submit</span>
    <span class="txt2">sent!</span>
    <span class="loader-container">
      <span class="loader"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: "SubitButton",
};
</script>

<style scoped>
button {
  z-index: 1;
  background-color: #000;
  width: 14em;
  height: 3.3em;
  border: 4px solid #1abc9c;
  border-radius: 25px;
  font-weight: bold;
  text-transform: uppercase;
  color: #1abc9c;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

button .txt {
  transition: 0.4s ease-in-out;
  position: absolute;
  font-size: 17px;
}

button .txt2 {
  transform: translateY(1em) scale(0);
  color: #000;
  position: absolute;
  font-size: 17px;
}

button .loader-container {
  height: 100%;
  width: 100%;
  background-color: transparent;
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  overflow: hidden;
}

button .loader-container .loader {
  height: 100%;
  width: 100%;
  background-color: #1abc9c;
  border-radius: inherit;
  transform: translateX(-13em);
}

button:focus {
  transition: 0.4s ease-in-out 0.4s;
  animation: scaling 1.5s ease-in-out 0s 1 both;
}

button:focus .txt {
  position: absolute;
  transform: translateY(-5em);
  transition: 0.4s ease-in-out;
}

button:focus .txt2 {
  transform: translateY(0) scale(1);
  transition: 0.3s ease-in-out 1.7s;
}

button:focus .loader {
  display: block;
  transform: translate(0);
  transition: 0.8s cubic-bezier(0, 0.4, 1, 0.28) 0.4s;
  animation: loading;
}

@keyframes scaling {
  20% {
    height: 1.5em;
  }

  80% {
    height: 1.5em;
  }

  100% {
    height: 3.3em;
  }
}
</style>
