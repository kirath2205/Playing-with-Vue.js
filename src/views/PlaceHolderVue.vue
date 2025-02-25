<script setup>

import {placeHolderStore} from "@/stores/placeHolderStore.js";
import TaskList from "@/components/TaskList.vue";
import { onMounted, computed } from "vue";

const store = placeHolderStore();
const tasks = computed(() => store.tasks);

onMounted(() => {
  store.fetchTasks();
});

</script>

<template>
  <div class="container">
    <h1>📝 Placeholder To-Do List</h1>

    <p v-if="store.loading">Loading tasks...</p>
    <p v-if="store.error" class="error">{{ store.error }}</p>

    <TaskList
      :tasks="tasks"
      @delete-task="store.removeTask"
      @toggle-task="store.toggleTask"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
