<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <!--v-for渲染、v-bind綁定在子元件props取值-->
    <RestaurantTop
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantTop from "./../components/RestaurantTop";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs, //簡寫
    RestaurantTop,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  //dummyData內容放進Vue元件的函式(父子元件情況)
  methods: {
    async fetchRestaurants() {
      try {
        // STEP 2：透過解構賦值，將所需要的資料從 response.data 取出
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
        console.log( { data } )
          } catch (error) {
            Toast.fire({
              icon: "error",
              title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>