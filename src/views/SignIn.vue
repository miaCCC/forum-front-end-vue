<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    //最後一步:把promise改為Async/Await語法結構

    async handleSubmit(e) {// eslint-disable-line no-unused-vars
      // email或password空白或漏填，用Toast提示
      // return不繼續往後執行
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }

        this.isProcessing = true; //程序完成前不能再按submit

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });
        // 取得 API 請求後的資料
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 將 token 存放在 localStorage 內
        localStorage.setItem("token", data.token);
        // 成功登入後轉址到餐廳首頁
        this.$router.push("/restaurants");
      } catch (error) {
        // 將密碼欄位清空
        this.password = "";
        this.isProcessing = false; // 因登入失敗，submit還原可按

        // 顯示錯誤提示
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼",
        });
      }
    },
  },
};
</script>