<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments"
        :key="comment.id">
        <h4>
          <a href="#">
            {{ comment.Restaurant.name }}
          </a>
        </h4>
        <p> {{ comment.text }}</p>by
        <a href="#">
          {{ comment.User.name }}
        </a>
        {{ comment.createdAt | fromNow }}
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
    comments: {
      type: Array,
      required: true,
    }
  }
}
</script>