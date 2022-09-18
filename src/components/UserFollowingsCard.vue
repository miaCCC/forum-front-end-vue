<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followings.length}}</strong> followings (追蹤者)
    </div>
    <div
      class="card-body">
      <a 
        v-for="following in followings"
        :key="following.id"
        href="/users/following.id">
        <img 
          :src="following.image"
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
  props: {
    followings: {
      type: Array,
      required: true,
    },
  },
};
</script>