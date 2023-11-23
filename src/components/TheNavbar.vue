<template>
  <nav class="navbar">
    <h3>
      Freelance
    </h3>

    <ul class="navbar-menu">
      <li>
        <router-link :class="{ 'navbar-menu--active': $route.path === '/' }" to="/">Все задачи</router-link>
      </li>
      <li>
        <router-link :class="{ 'navbar-menu--active': $route.path === '/newTask' }" to="/newTask">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>