<script setup>

import {placeHolderStore} from "@/stores/placeHolderStore.js";
import TaskList from "@/components/TaskList.vue";
import {RouterView} from "vue-router";
import {onMounted} from "vue";

const { tasks, fetchTasks, toggleTask, removeTask , loading, error} = placeHolderStore();

onMounted(fetchTasks);
</script>

<template>

  <p v-if="loading">Loading tasks...</p>
  <p v-if="error" class="error">{{ error }}</p>

  <div class="container">
    <h1>📝 Placeholder To-Do List</h1>
    <TaskList :tasks="tasks"
              @delete-task="removeTask"
              @toggle-task="toggleTask"
    />
  </div>
  <RouterView />

</template>

<style scoped>

</style>
