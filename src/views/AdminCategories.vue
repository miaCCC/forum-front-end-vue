<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory"
            :disabled="isProcessing"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/*scoped屬性，用來確保此CSS只會作用此component*/
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>

<script>
import AdminNav from "@/components/AdminNav";
// STEP 1: 匯入 adminAPI 和 Toast
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminNav,
  },
  // 定義Vue中使用data資料
  data() {
    return {
      id: -1,
      newCategoryName: "",
      categories: [], //放入createCategory新增類別
      isProcessing: false,
    };
  },
  // 調用fetchCategories
  created() {
    this.fetchCategories();
  },
  methods: {
    //1.帶入餐廳categories
    async fetchCategories() {
      try {
        // 向伺服器取得餐廳類別清單
        // 在每一個category中都添加一個isEditing屬性編輯
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories.map((category) => ({
          ...category,

          isEditing: false,
          nameCached: "", //暫存資料
        }));
      } catch (error) {
        // 在catch中進行錯誤處理
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },
    async createCategory() {
      //*原有(name)
      // TODO: 透過API告知伺服器欲新增的餐廳類別
      // 將新的類別添加到陣列中
      try {
        this.isProcessing = true; //避免連點
        if (!this.newCategoryName) {
          Toast.fire({
            icon: "warning",
            title: "請輸入欲新增的餐廳類別",
          });
          this.isProcessing = false;
          return;
        }
        // STEP 3: 透過 categories.create 方法帶入明name來向伺服器建立餐廳
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
        });
        this.isProcessing = false;
        this.newCategoryName = ""; //清空原本欄位中的內容
      } catch (error) {
        // 在catch中進行錯誤處理
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳類別，請稍後再試",
        });
      }
    },
    async deleteCategory(categoryId) {
      // TODO: 透過 API 告知伺服器欲刪除的餐廳類別
      // 將該餐廳類別從陣列中移除
      try {
        const { data } = await adminAPI.categories.delete({ categoryId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳類別，請稍後再試",
        });
      }
    },
    toggleIsEditing(categoryId) {
      //map掃瞄categories資料，id對照
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category, //spread operator 展開物件
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    //SAVE按鈕儲存功能:編輯後用PUT更新API，
    async updateCategory({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ 
          categoryId, //簡寫
          name })
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // TODO: 透過 API 去向伺服器更新餐廳類別名稱
        this.toggleIsEditing(categoryId);

      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法編輯餐廳類別，請稍後再試",
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId); //變回非編輯狀態
    },
  },
};
</script>