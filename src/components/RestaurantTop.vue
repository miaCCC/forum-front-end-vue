<template>
  <div>
    <hr>
    <div

      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters"
       :key="restaurant.id">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
              :to="{name: 'restaurant', params: {id: restaurant.id } }"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";



export default {

  //mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      //從initialRestaurant拿取資料給restaurant
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        // STEP 3: 用users.js寫好的addFavorite呼叫API，取得回傳內容data解構賦值
        const { data } = await usersAPI.addFavorite({ restaurantId });
        // STEP 4: 請求過程有錯，進到錯誤處理
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurant = {
          ...this.restaurant,
          FavoriteCount: this.restaurant.FavoriteCount + 1,
          isFavorited: true,
        };
          } catch (error) {
        // STEP 6: 請求失敗的話則跳出錯誤提示
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
        console.log("error", error);
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          FavoriteCount: this.restaurant.FavoriteCount - 1,
          isFavorited: false, 
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
        console.log("error", error);
      }
    },
  },
}
</script>