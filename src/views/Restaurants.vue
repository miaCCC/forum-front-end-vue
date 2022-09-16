<template>
  <div class="container py-5">
     <!-- 使用 NavTabs 元件 -->
    <NavTabs />
     <!-- 餐廳類別標籤 RestaurantsNavPills -->
     <RestaurantsNavPills :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <!--v-for渲染、v-bind綁定在子元件props取值-->
      <RestaurantCard
        v-for="restaurant in restaurants" 
        :key="restaurant.id"
        :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Ruth Gleichner",
            "tel": "(128) 410-3517",
            "address": "06029 Funk Land",
            "opening_hours": "08:00",
            "description": "In qui mollitia sapiente.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.52122955001425",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Karley Kuvalis",
            "tel": "771.836.7482 x67538",
            "address": "2817 Gleichner Shoal",
            "opening_hours": "08:00",
            "description": "Quae esse culpa voluptatem dignissimos asperiores ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.909044855516074",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Mrs. Christelle Bruen",
            "tel": "415-643-1339 x059",
            "address": "7662 Evert Rapid",
            "opening_hours": "08:00",
            "description": "Et est sequi voluptatem quis neque ipsum et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.68349864490985",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Magnus Pollich",
            "tel": "(953) 311-8175",
            "address": "687 Mortimer Lane",
            "opening_hours": "08:00",
            "description": "Explicabo voluptatem dolor expedita quo modi volup",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.416553590620296",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Devonte Witting",
            "tel": "412-522-7642 x676",
            "address": "199 Terry Mountain",
            "opening_hours": "08:00",
            "description": "alias",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.762485644851395",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Mrs. Colt Marks",
            "tel": "812.297.9815 x961",
            "address": "91277 Ryan Prairie",
            "opening_hours": "08:00",
            "description": "Aut est et placeat nihil vel. Ut eum quia. Perspic",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.97191225778975",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Alexa Bernhard",
            "tel": "(117) 362-8727",
            "address": "226 Leffler Ramp",
            "opening_hours": "08:00",
            "description": "Soluta eligendi voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.570053145488025",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Oda Littel",
            "tel": "273-715-6682 x539",
            "address": "88018 Jammie Falls",
            "opening_hours": "08:00",
            "description": "nesciunt et aut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=64.17149410297085",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Anabelle Mosciski",
            "tel": "158.938.2987 x0626",
            "address": "0596 Nicolas Squares",
            "opening_hours": "08:00",
            "description": "atque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.85128845640325",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Maia Abbott",
            "tel": "618-603-9356 x7344",
            "address": "5999 Lockman Radial",
            "opening_hours": "08:00",
            "description": "Voluptatem quia aliquam occaecati praesentium nece",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.512760150901212",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-09-13T17:21:06.000Z",
                "updatedAt": "2022-09-13T17:21:06.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs, //簡寫
    RestaurantCard,
    RestaurantsNavPills
  },
  //data函式定義要用到的資料
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },
  // created階段觸發函式
   created(){
    this.fetchRestaurants()
  },
  //dummyData內容放進Vue元件的函式
  methods: {
    fetchRestaurants () {
      const { restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData //解構賦值
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }

  }
}
</script>