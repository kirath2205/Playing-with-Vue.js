<template>
  <div class="container">
    <TaskForm @add-task="addTask"/>
    <h1>📝 Vue To-Do List</h1>
    <TaskList :tasks="tasks"
              @delete-task="removeTask"
              @toggle-task="toggleTask"
    />
  </div>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
import {useTaskStore} from "@/stores/taskStore.js";

const { tasks, addTask, removeTask, toggleTask} = useTaskStore();

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 35vh;
  text-align: center;
}
</style>
