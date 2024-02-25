<template>
  <div class="main container">
    <div id="slider" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li class="active" data-target="#slider" data-slide-to="0"></li>
        <li data-target="#slider" data-slide-to="1"></li>
      </ol>
      <div v-if="newestBooks.length > 0">
        <NewestBooks :books="newestBooks" />
      </div>
      <a class="left carousel-control" href="#slider" role="button" data-slide="prev">
        <span class="icon-prev" aria-hidden="true"></span>
        <span class="sr-only">{{ t('.previous') }}</span>
      </a>
      <a class="right carousel-control" href="#slider" role="button" data-slide="next">
        <span class="icon-next" aria-hidden="true"></span>
        <span class="sr-only">{{ t('.next') }}</span>
      </a>
    </div>

    <div class="container">
      <div class="jumbotron text-center mb-0">
        <h2 class="h1">{{ t('.welcome') }}</h2>
        <div class="mb-res-50">
          <p>{{ t('.favorite') }}</p>
        </div>
        <router-link :to="{ name: 'books' }" class="btn btn-default">{{
          t('.started')
        }}</router-link>
      </div>

      <div class="mb-35">
        <h3>{{ t('.best_sellers') }}</h3>
        <BestSellers />
      </div>
    </div>
  </div>
</template>

<script>
import NewestBooks from './NewestBooks.vue'
import BestSellers from './BestSellers.vue'

export default {
  name: 'HomePage',
  components: {
    // NewestBooks,
    // BestSellers
  },
  methods: {}
}
</script>

<style scoped></style>
