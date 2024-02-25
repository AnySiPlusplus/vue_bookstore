<template>
    <Welcome />
    <div class="container">
        <div class="slider">
            Slider
        </div>
        <div class="new-books">
            <div class="new-book">New Book</div>
            <div class="new-book">New Book</div>
            <div class="new-book">New Book</div>
            <div class="new-book">New Book</div>
            <div class="new-book">New Book</div>
            <div class="new-book">New Book</div>
        </div>
    </div>
</template>

<script>
import Welcome from '../components/Welcome.vue'

export default {
  components: {
    Welcome
  }
}
</script>

<style scoped>
  .slider {
      margin-top: 20px;
      width: 80%;
      height: 250px;
      border: 1px solid #ccc;
      margin: 0 auto;
  }

  .new-books {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
  }

  .new-book {
      width: 100px;
      height: 150px;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>
