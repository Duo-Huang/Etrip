<template>
  <div :class="$style.container">
    <!-- test code-->
    <button type="button" @click="chageLanguage">chageLanguage</button>
    <button type="button" @click="testApi">testAPi</button>
    <!-- test code-->
    <div :class="$style.msg">{{$t('lang.global.loginTip')}}</div>
    <div>
      <span>{{$t('lang.user.phoneNumber')}}:</span>
      <input type="text" />
      <br />
      <span>{{$t('lang.user.password')}}:</span>
      <input type="text" />
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
    },
    async testApi() {
      // 1
      const res1 = await this.$http.fetch({
        url: this.$http.apis.LOGIN,
        method: "post",
        params: {
          id: 123
        },
        data: {
          since: 1996
        }
      });
      console.log(res1);
      // 2
      const res2 = await this.$http.fetch({
        url: this.$http.apis.LOGIN,
        method: "get",
        params: {
          id: 123
        }
      });
      console.log(res2);

      // 3
      this.$http
        .fetch({
          url: this.$http.formmatUrl(this.$http.apis.product, { id: 123 }),
          method: "get"
        })
        .then(res => {
          console.log(res.data);
        });
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