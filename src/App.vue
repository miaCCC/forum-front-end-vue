<template>
  <div id="restaurant-forum">
    <main
      role="main"
      class="mt-5 bg-white">
        <Navbar /> <!--簡寫直接載入-->
    </main>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar //Navbar: Navbar簡寫可直接定義
  }
}
</script>


