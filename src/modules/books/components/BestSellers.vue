<template>
  <div class="row">
    <div v-for="book in bestSellers" :key="book.id" class="col-sm-6 col-md-3">
      <div class="general-thumb-wrap">
        <div class="thumbnail general-thumbnail">
          <div class="img-shadow general-thumbnail-img">
            <img :src="book.first_image.large" alt="Book Image" />
          </div>
          <div class="thumb-hover">
            <div class="general-thumb-link-wrap">
              <router-link :to="{ name: 'book', params: { id: book.id } }" class="thumb-hover-link">
                <i class="fa fa-eye thumb-icon" aria-hidden="true"></i>
              </router-link>
              <button @click="addToCart(book.id)" class="thumb-hover-link book-icon-shop">
                <i class="fa fa-shopping-cart thumb-icon"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="mb-35 clearfix">
          <p class="pull-right font-16 in-gold-500">{{ book.price }}</p>
          <p class="title mr-55">{{ book.title }}</p>
        </div>
        <span class="divider-sm"></span>
        <p class="lead small">{{ book.authors_full_names }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bestSellers: Array // Assuming bestSellers is passed as a prop
  },
  methods: {
    addToCart(bookId) {
      // Logic to add the book to the cart
    }
  }
}
</script>

<style scoped>
/* Your component-specific styles here */
</style>
