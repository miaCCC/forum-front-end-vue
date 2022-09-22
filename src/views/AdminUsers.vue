<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td 
           v-if="user.isAdmin"
           >
            admin
          </td>
          <td v-else>user</td>
          <td>
            <button
              @click.stop.prevent="toggleUserRole(user.id)" 
               v-if="currentUser.id !== user.id" 
               type="button" 
               class="btn btn-link">
              {{ user.isAdmin? 'set as user' : 'set as admin'}}           
            <!--登入為管理者時，不顯示 set as user 的選項-->
            <!--使用者admin顯示set as user；否則顯示set as admin-->
            </button>
           
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";

//  2. 定義暫時使用的資料
const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$y3CrryR5Dc1L7qvltM6.3ec28/Fx05PgUZvvXADJ1ITaQW827lhLS",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$bVBo7Q1oSJjZL9blKCf02eePwDcG2s2TbtatTTqQpODRQRUMiOjgC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$9VdsD/EAxidtPgHuydNI7O9ZUnZmZ6iANdUn.aCM78PCBzOzU7KtC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-13T17:21:06.000Z",
            "updatedAt": "2022-09-13T17:21:06.000Z"
        }
    ]
}
const dummyUser = {
       "profile": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$y3CrryR5Dc1L7qvltM6.3ec28/Fx05PgUZvvXADJ1ITaQW827lhLS",
        "isAdmin": true,
        "image": null,
   }
}


export default {
  components: {
    AdminNav,
  },
  // 3. 定義Vue中使用data資料
  data() {
    return {
      users: [],
      currentUser: {},
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    // 4. fetchUsers把dummyData帶入Vue物件
    fetchUsers() {
      this.users = dummyData.users.map((user) => ({
        ...user,  
      }));
      this.currentUser = dummyUser.profile
      },
    toggleUserRole(userId)//eslint-disable-line no-unused-vars
     {
      //map掃瞄users資料，id對照
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user, //spread operator 展開物件
            isAdmin: !user.isAdmin,
          };
        }
        return user
      });
    },
}
}

</script>