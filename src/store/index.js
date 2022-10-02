import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //目前登入使用者
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false

  },
  mutation: {
    //參數state為預設，參數currentUser來自外部(API取得)
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser, //先複製一份
        // 將API取得的currentUser覆蓋掉Vuex state中的currentUser
        ...currentUser
      }
      // 將使用者登入狀態改為true
      state.isAuthenticated = true
    }

  },
  actions: {

  },
  modules: {

  }
})