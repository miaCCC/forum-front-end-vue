<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
       
        <!--v-if 來檢查網址是否存在 -->
      <img
        v-if="user.image" 
        :src="user.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        /><!--上傳綁定change事件-->
      </div>

      <button 
        type="submit" 
        class="btn btn-primary">
        Submit
        </button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 1,
    name: "root",   
    image: null,
  },
};

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params //取網址的id才知在編輯哪筆
    this.fetchUser(id)
  },
  methods: {   
    fetchUser(userId)// eslint-disable-line no-unused-vars
     { 
      this.user = {
        id: dummyData.profile.id,
        name: dummyData.profile.name,
        image: dummyData.profile.image
      }
    },
     handleFileChange (e) {
    const { files } = e.target
    console.log('files', files)

  if (files.length === 0) {
    // 使用者沒有選擇上傳的檔案
    this.user.image = ''
  } else {
    // 否則產生預覽圖
    const imageURL = window.URL.createObjectURL(files[0])
    this.user.image = imageURL
  }
},
    handleSubmit (e) {
      const form = e.target  // <form></form>
      const formData = new FormData(form) //物件化
      for (let [name, value] of formData.entries()) {
        // TODO: 用 api把 form資料傳到後端伺服器
        console.log(name, ':', value)
      }
    }

  }
};
</script>