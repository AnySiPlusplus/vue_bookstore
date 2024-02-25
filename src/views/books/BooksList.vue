<template>
  <div class="container">
    <h1> Books</h1>
    <div class="book-container">
      <div class="book">Book 1</div>
      <div class="book">Book 2</div>
      <div class="book">Book 3</div>
      <div class="book">Book 4</div>
      <div class="book">Book 5</div>
      <div class="book">Book 6</div>
      <div class="book">Book 7</div>
      <div class="book">Book 8</div>
      <div class="book">Book 9</div>
      <div class="book">Book 10</div>
      <div class="book">Book 1</div>
      <div class="book">Book 2</div>
      <div class="book">Book 3</div>
      <div class="book">Book 4</div>
      <div class="book">Book 5</div>
  </div>
  </div>
</template>

<style scoped>
  .book-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 20px;
  }

  .book {
      padding: 10px 20px;
      margin: 5px;
      border: 1px solid #333;
      border-radius: 5px;
      width: 18%;
      text-align: center;
  }
</style>
