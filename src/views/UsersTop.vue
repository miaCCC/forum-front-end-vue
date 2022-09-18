<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link to="/users/1">
          <img
            :src="users.image ? users.image : 'https://ppt.cc/fi8Hjx@.jpg'"
            width="140px"
            height="140px"
          />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數 : {{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="follow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
const dummyData = {
    'users': [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$y3CrryR5Dc1L7qvltM6.3ec28/Fx05PgUZvvXADJ1ITaQW827lhLS",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$bVBo7Q1oSJjZL9blKCf02eePwDcG2s2TbtatTTqQpODRQRUMiOjgC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$9VdsD/EAxidtPgHuydNI7O9ZUnZmZ6iANdUn.aCM78PCBzOzU7KtC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
  components: {
    NavTabs //簡寫
  },
  data () {
    return {
      users: dummyData.users,
    }
  },
  methods: {
    follow (id) {      
      this.users.forEach(user =>{        
      if(user.id === id)        
      return user.isFollowed = true      
      })       
    },
    deleteFollow (id) {
      this.users.forEach(user =>{        
      if(user.id === id)        
      return user.isFollowed = false
      }) 
    }  
 }
    
}
</script>