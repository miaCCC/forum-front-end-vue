<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
         v-if="currentUser.isAdmin" 
         to="/admin" 
         class="text-white mr-3"> 
          管理員後台 
        </router-link>
        
        <!-- is user is login -->
        <template v-if="isAuthenticated"> <!-- 不用div避免影響樣式 -->
          <router-link to="#" class="text-white mr-3">
            {{ currentUser.name || "使用者" }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0">
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
// Step1：移除 dummyUser
// 模擬後端假資料呈現登入狀態(原有dummyData當currentUser)

export default {
  // Step2：移除 data 屬性
  // Step3：移除 created 和 fetchUser 的方法
  
  // Step4：新增 `mapState` 方法
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  // Vue 會在沒有資料時使用此預設值(未登入)
  //data() {
  //  return {
  //   currentUser: {
  //      id: -1,
  //      name: "",
  //      email: "",
  //      image: "",
  //      isAdmin: false,
  //    },
  //    isAuthenticated: false,
  //  };
  //},
  //生命週期觸發改變登入登出狀態
  //created() {
  //  this.fetchUser();
  //},
  //methods: {
  // fetchUser() {
  //   this.currentUser = {
  //      ...this.currentUser,
  //      ...dummyUser.currentUser,
        //key值相同，後面覆蓋前面
  //   };
  //    this.isAuthenticated = dummyUser.isAuthenticated;
  //  },
  //},
};
</script>