<template>
  <div class="carousel-inner" role="listbox">
    <div
      v-for="(book, index) in newestBooks"
      :key="book.id"
      :class="{ item: true, active: index > 0 }"
    >
      <div class="row">
        <div class="col-sm-5">
          <div class="general-img-wrap">
            <img :src="book.first_image.large" alt="Book Image" />
          </div>
        </div>
        <div class="col-sm-7">
          <div class="mb-60">
            <h1>{{ book.title }}</h1>
            <p class="lead">{{ book.description.substring(0, shortDescriptionLength) }}</p>
            <p class="lead small">{{ book.authors_full_names }}</p>
            <div class="general-align">
              <button @click="addToCart(book.id)" class="btn btn-primary">
                {{ t('.by_now') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newestBooks: Array, // Assuming newestBooks is passed as a prop
    currentOrder: Object // Assuming currentOrder is passed as a prop
  },
  data() {
    return {
      shortDescriptionLength: 100 // Define the length of the truncated description
    }
  },
  methods: {
    addToCart(bookId) {
      // Logic to add the book to the cart
    },
    t(key) {
      // Your translation logic here
    }
  }
}
</script>

<style scoped>
/* Your component-specific styles here */
</style>
