<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://ppt.cc/fi8Hjx@.jpg" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ favoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <router-link 
             :to="{name: 'user-edit', params: {id: profile.id} }">
             <button
               v-if="isCurrentUser" 
               type="submit" 
               class="btn btn-primary">
               edit
             </button>
            
            <div v-else>
             <button
              v-if="isFollowed"
              type="submit"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing">
               取消追蹤
             </button>

             <button
              v-else
              type="submit" 
              class="btn btn-primary"
              @click.stop.prevent="addFollowing">
               追蹤
              </button>
            </div>
            </router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //mixins: [emptyImageFilter],
  props: {
    profile: {
      type: Object,
      required: true,
    },
isCurrentUser: {
      type: Boolean,
      required: true
    },
    favoritedRestaurants: {
      type: Array,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
    },
    followings: {
      type: Array,
      required: true,
    },
     followers: {
      type: Array,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
    
  },
  data () {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  methods: {
    addFollowing () {
      this.isFollowed = true
    },
    deleteFollowing () {
      this.isFollowed = false
    }
  }
};
</script>
