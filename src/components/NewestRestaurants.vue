<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <!--v-for迴圈帶入restaurants資料-->
      <div v-for="restaurant in restaurants"
        :key="restaurant.id">
        <h4>
          <a href="#">{{ restaurant.name }}</a>
          &nbsp;
          <small>
            <!--如果是null就顯示未分類-->
            {{ restaurant.Category ? restaurant.Category.name : '未分類'}}
          </small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 先將 moment 載入進來
import moment from 'moment'

export default {
  filters: {
    fromNow (datetime) {
      //判斷傳入值是否存在
      if (!datetime) {
        return '-'
      }
      // 使用 moment 提供的 fromNow 方法
      return moment(datetime).fromNow()
    }
  },
  props: {
    restaurants: {
      type: Array,
      required: true,
    }
  }
}
</script>


<style scoped>
small {
  font-size: 10px;
}
</style>
