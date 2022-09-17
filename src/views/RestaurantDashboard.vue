<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = 
  {
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
        "updatedAt": "2022-09-17T08:42:22.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
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
    }
}

 export default {
  data() {
    return {
      restaurant: dummyData.restaurant,
    };
  },

}
</script>
