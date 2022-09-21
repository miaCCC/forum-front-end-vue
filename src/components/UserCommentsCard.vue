<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <a
        v-for="comment in comments"
        :key="comment.id"
        href="/restaurants/comment.id"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  //mixins: [emptyImageFilter],
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>