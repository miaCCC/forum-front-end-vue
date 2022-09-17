<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <RestaurantDetail 
      :initial-restaurant= "restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
      :restaurant-comments= "restaurantComments"
      @after-delete-comment="afterDeleteComment"/>
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Ruth Gleichner",
        "tel": "(128) 410-3517",
        "address": "06029 Funk Land",
        "opening_hours": "08:00",
        "description": "In qui mollitia sapiente.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.52122955001425",
        "viewCounts": 1,
        "createdAt": "2022-09-13T17:21:06.000Z",
        "updatedAt": "2022-09-17T08:42:22.942Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 1,
                "text": "Voluptatem quo autem fuga ex molestias id.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$y3CrryR5Dc1L7qvltM6.3ec28/Fx05PgUZvvXADJ1ITaQW827lhLS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-13T17:21:06.000Z",
                    "updatedAt": "2022-09-13T17:21:06.000Z"
                }
            },
            {
                "id": 51,
                "text": "Et quas perferendis eum possimus alias.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$bVBo7Q1oSJjZL9blKCf02eePwDcG2s2TbtatTTqQpODRQRUMiOjgC",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-13T17:21:06.000Z",
                    "updatedAt": "2022-09-13T17:21:06.000Z"
                }
            },
            {
                "id": 101,
                "text": "Nam dolore minima nihil aliquid et.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$9VdsD/EAxidtPgHuydNI7O9ZUnZmZ6iANdUn.aCM78PCBzOzU7KtC",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-13T17:21:06.000Z",
                    "updatedAt": "2022-09-13T17:21:06.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
  created () {
    //取得網址中對應到:id的內容
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    //restaurantId,需要告訴伺服器要請求的是哪一筆餐廳資料
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment (commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({ //payload內容放進陣列
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,//text: text 的縮寫
        createdAt: new Date()//直接抓當下的時間
      })
    }
  }
}
</script>