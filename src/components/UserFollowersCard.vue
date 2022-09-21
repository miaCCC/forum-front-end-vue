<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
    <a
      v-for="follower in followers"
      :key="follower.id"
      href="/users/follower.id"
    >
      <img :src="follower.image" width="60" height="60" class="avatar" />
    </a>
    </div>
  </div>
</template>

<script>
export default {
  //mixins: [emptyImageFilter],
  props: {
    followers: {
      type: Array,
      required: true,
    },
  },
};
</script>