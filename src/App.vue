<script>
import Home from '@/pages/Home.vue'

export default {
  components: {
    Home
  },
}
</script>

<template>
  <router-link to="/">Home</router-link>
  <br />
  <router-link to="/edit">Edit</router-link>
  <h1>My Todo App</h1>
  <router-view />
</template>

<style scoped>

</style>
