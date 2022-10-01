import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  //後台路由會處理到categories、restaurants、users不同資料，用categories: {}，規劃出命名空間
  categories: {
    get() {
      return apiHelper.get('/admin/categories', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  restaurants: {
    create({ formData }) {//POST請求，第二個參數是$emit子傳入的formData
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    get() {
      return apiHelper.get('/admin/restaurants', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
}