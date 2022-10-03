import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  //namespaced: true,
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
  mutations: {
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
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data }  = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
    }

  },
  modules: {

  }
})