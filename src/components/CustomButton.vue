<template>
  <div>
    <router-link :to="path">
      <a class="click-btn customButton">{{ text }}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["path", "text"],
  name: "CustomButton",
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.click-btn {
  text-decoration: none;
  display: flex;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  line-height: 35px;
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  transition: all 0.35s;
  box-sizing: border-box;
}

.customButton {
  $btn-color: #dd6395;
  text-decoration: none;
  font-family: "Segoe Print", sans-serif;
  font-size: larger;
  font-weight: 700;
  position: relative;
  border-color: $btn-color;
  color: $btn-color;
  overflow: hidden;
  &::before {
    width: 15%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $btn-color;
    transform: rotateZ(-45deg) translate(-50%, -50%);
    transition: all 0.3s;
    content: "";
    z-index: -1;
  }
  &:hover {
    color: #fff;
    transition-delay: 0.35s;
    // background-color:$btn-color;
    &::before {
      animation: ani507 0.6s forwards;
    }
  }
}
@keyframes ani507 {
  10% {
    width: 0;
    transform: rotateZ(-45deg) translate(-100%, -50%);
  }
  20% {
    width: 0;
    transform: rotateZ(0) translate(-100%, 85%);
  }
  60% {
    width: 100%;
    transform: rotateZ(0) translate(0, 85%);
  }
  100% {
    width: 100%;
    transform: rotateZ(0) translate(0, 0);
  }
}
</style>
