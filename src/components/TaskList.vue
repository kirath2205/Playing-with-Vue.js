<script setup>

import TaskItem from "@/components/TaskItem.vue";
import {watch} from "vue";

defineProps(["tasks"])
const emit = defineEmits(["delete-task", "toggle-task"])

const removeTask = (title) => {
  emit("delete-task", title)
}

const toggleTask = (title) => {
  emit("toggle-task", title)
}

</script>

<template>
  <div class="grid">
    <ul>
      <pre>{{ tasks }}</pre>
      <TaskItem v-for="(task, index) in tasks"
                :key="index" :task="task"
                @remove-task="removeTask(task.id ? task.id : task.title)"
                @toggle-task="toggleTask(task.id ? task.id : task.title)"/>
    </ul>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 10px;
  padding: 0;
  list-style-type: none;
  width: 100%;
  max-width: 400px;
}
</style>
