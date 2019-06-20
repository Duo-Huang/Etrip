<template>
  <div :class="$style.container">
    <div :class="$style.msg">{{$t('hello')}}</div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss" module>
@import "./styles/variable.scss";

.container {
  height: 100vh;
  background: #faa;

  .msg {
    font-size: rem-calc(24);
    font-weight: 700;
  }
}
</style>