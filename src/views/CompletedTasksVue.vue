<template>
  <div>
    <h1>✅ Completed Tasks</h1>
    <TaskList :tasks="completedTasks"
              @delete-task="removeTask"
              @toggle-task="toggleTask"/>
  </div>
</template>

<script setup>
import {useTaskStore} from "@/stores/taskStore.js";
import TaskList from "@/components/TaskList.vue";
import {computed} from "vue";

const {tasks, removeTask, toggleTask } = useTaskStore();
const completedTasks = computed(() => tasks.filter(task => task.completed));

</script>
