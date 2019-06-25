<template>
  <div :class="$style.container">
    <button @click="chageLanguage">chageLanguage</button>
    <div :class="$style.msg">{{$t('language.login')}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { changeLanguage } from "./global/utils/commonFunc";
export default {
  name: "app",
  methods: {
    chageLanguage() {
      if (window.urlParams.lang === "zh") {
        changeLanguage("en");
      } else {
        changeLanguage("zh");
      }
    }
  }
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