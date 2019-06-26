<template>
  <div :class="$style.container">
    <!-- test code-->
    <button @click="chageLanguage">chageLanguage</button>
    <!-- test code-->
    <div :class="$style.msg">{{$t('lang.global.loginTip')}}</div>
    <div>
      <span>{{$t('lang.user.phoneNumber')}}:</span>
      <input type="text">
      <br>
      <span>{{$t('lang.user.password')}}:</span>
      <input type="text">
    </div>
    <button>{{$t('lang.user.login')}}</button>
    <button>{{$t('lang.user.register')}}</button>
  </div>
</template>

<script>
import { changeLanguage } from "../../global/utils/commonFunc";
export default {
  name: "Login",
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
.container {
  height: 100vh;
  background: #faa;

  .msg {
    font-size: rem-calc(24);
    font-weight: 700;
  }
}
</style>