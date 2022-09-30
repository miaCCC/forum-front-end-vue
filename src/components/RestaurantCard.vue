<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >{{ restaurant.name }}
          </router-link>
          <span class="badge badge-secondary">{{
            restaurant.Category.name
          }}</span>
        </p>

        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// STEP 1: 載入 API 方法和 Toast 提示工具
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  //mixins: [emptyImageFilter],
  //父元件用v-ind取值
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      //從initialRestaurant拿取資料給restaurant
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    // STEP 2: 將 addFavorite 改成 async/await 語法
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
    async addLike(restaurantId) {
      try {
        const { data } = await usersAPI.addLike({ restaurantId })
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法對餐廳按讚，請稍後再試",
        });
        console.log("error", error);
      }
    },
    async deleteLike (restaurantId) {
      try {
        const { data } = await usersAPI.deleteLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法對取消讚，請稍後再試'
        })
      }
    },
  },
};
</script>