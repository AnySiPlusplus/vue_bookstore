<template>
  <header>
    <router-link to="/">
        <div class="logo">Logo</div>
    </router-link>
    <div class="buttons">
        <router-link to="/books">Books</router-link>
        <a href="#" class="button">Button 2</a>
        <div class="dropdown">
            <button class="button">Settings</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">LogIN</a>
            </div>
        </div>
    </div>
</header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style scoped>
  header {
      background-color: #181818;
      border-radius: 10px;
      width: auto;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
  }

  .logo {
      font-size: 24px;
  }

  .buttons {
      display: flex;
      align-items: center;
  }

  .button {
      border: none;
      background-color: #181818;
      margin-left: 10px;
      height: 40px;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 5px;
      color: hsla(160, 100%, 37%, 1);
      transition: 0.4s;
  }

  .dropdown {
      position: relative;
  }

  .dropdown-content {
      display: none;
      position: absolute;
      min-width: 120px;
  }

  .dropdown:hover .dropdown-content {
      display: block;
  }

  .dropdown-content a {
      padding: 12px 16px;
      text-decoration: none;
      display: block;
  }
</style>
