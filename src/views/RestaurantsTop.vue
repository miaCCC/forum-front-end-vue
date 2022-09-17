<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1> 
      <!--v-for渲染、v-bind綁定在子元件props取值-->
      <RestaurantTop
        v-for="restaurant in restaurants" 
        :key="restaurant.id"
        :initial-restaurant="restaurant"/>
  
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantTop from './../components/RestaurantTop'

const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Alexane Bernier IV",
            "tel": "262.157.8289",
            "address": "74271 Kylee Points",
            "opening_hours": "08:00",
            "description": "Qui non odit rerum qui itaque animi non. Asperiore",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.685165239093813",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Carole Johns",
            "tel": "244-800-4854",
            "address": "467 Steuber Pike",
            "opening_hours": "08:00",
            "description": "Quas velit dolorem perspiciatis ut. Et id debitis ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.78020296203085",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Lexie Walker DDS",
            "tel": "(103) 994-9970",
            "address": "801 Veda Mission",
            "opening_hours": "08:00",
            "description": "Deserunt quia porro dolor ut omnis molestiae dolor",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.27105380158584",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Jude Grady Sr.",
            "tel": "165.892.0996 x47947",
            "address": "2816 Grady Radial",
            "opening_hours": "08:00",
            "description": "Eum nostrum commodi est debitis saepe enim dolore ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.49600468088263",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Alivia Herzog V",
            "tel": "020-527-9358",
            "address": "977 Maymie Underpass",
            "opening_hours": "08:00",
            "description": "Beatae molestiae fuga saepe impedit fuga cumque ac",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.943524305461919",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Edward Abernathy",
            "tel": "541-493-9811",
            "address": "07812 Cale Lane",
            "opening_hours": "08:00",
            "description": "Inventore nihil tempore harum enim fugit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.075747340705696",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Loma Labadie",
            "tel": "(107) 293-3466",
            "address": "3946 Schroeder Extension",
            "opening_hours": "08:00",
            "description": "reprehenderit velit voluptatibus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.21346155091109",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Corrine Murazik",
            "tel": "888-286-0835",
            "address": "12914 Larkin Locks",
            "opening_hours": "08:00",
            "description": "tempore maiores non",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.33358241959649",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Catharine Beahan",
            "tel": "908-978-0983 x19686",
            "address": "6823 Winston Glens",
            "opening_hours": "08:00",
            "description": "Illum iure dolores ullam sed eos enim numquam volu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.58329020766153",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Morgan Reinger",
            "tel": "1-119-356-0199",
            "address": "3501 Ziemann Center",
            "opening_hours": "08:00",
            "description": "Voluptates tenetur dolore. Dicta reiciendis quas d",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.58332443936187",
            "viewCounts": 0,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  components: {
    NavTabs, //簡寫
    RestaurantTop
  },
  data () {
    return {
      restaurants: [],
    }
  },
  created(){
    this.fetchRestaurants()
  },
  //dummyData內容放進Vue元件的函式(父子元件情況)
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    }
  }
}
</script>