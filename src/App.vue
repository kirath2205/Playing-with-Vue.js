<template>
  <div class="container">
    <nav>
      <RouterLink to="/">🏠 Home</RouterLink>
      <RouterLink to="/completed">✅ Completed</RouterLink>
      <RouterLink to="/placeholderTasks">ℹ️ Place Holder Tasks</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.container {
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: blue;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
