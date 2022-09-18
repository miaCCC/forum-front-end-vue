<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments"
        :key="comment.id">
        <h4>
          <router-link
      :to="{ name: 'restaurant', params: {id: comment.Restaurant.id} }"
    >
            {{ comment.Restaurant.name }}
         </router-link>
        </h4>
        <p> {{ comment.text }}</p>by
        <router-link to="/users/1">
          {{ comment.User.name }}
        </router-link>
        {{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 先將 moment 載入進來(後用mixins)
//import moment from 'moment'
import { fromNowFilter } from './../utils/mixins'

export default {
  mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true,
    }
  }
}
</script>