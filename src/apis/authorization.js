// signIn:資料給伺服器驗證後，取得token放入localStorage儲存使用
// signUp:建立新帳號時，資料傳給伺服器


import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn({ email, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp({ name, email, password, passwordCheck }) {
    return apiHelper.post('/signup',{
      name, 
      email, 
      password, 
      passwordCheck
    })
  }
}