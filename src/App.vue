<template>
  <Header/>
  <RouterView />
</template>

<script>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'

  export default {
  components: {
    Header
  }
}
</script>

<style>
  @import './assets/main.css';
</style>
