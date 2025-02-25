<template>
  <div class="container">
    <nav>
      <RouterLink to="/">🏠 Home</RouterLink>
      <RouterLink to="/completed">✅ Completed</RouterLink>
      <RouterLink to="/placeholderTasks">ℹ️ Place Holder Tasks</RouterLink>
      <RouterLink to="/agGridTasks">ℹ️ Tasks IN AG Grid </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
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
