<script setup>
import TaskItem from "@/components/TaskItem.vue";
defineProps(["tasks"]);
const emit = defineEmits(["delete-task", "toggle-task"]);

const removeTask = (id) => {
  emit("delete-task", id);
};

const toggleTask = (id) => {
  emit("toggle-task", id);
};
</script>

<template>
  <div class="task-list-container">
    <p v-if="!tasks || tasks.length === 0">No tasks to display</p>

    <ul v-else>
      <TaskItem
        v-for="task in tasks"
        :key="task.id || task.title"
        :task="task"
        @remove-task="removeTask"
        @toggle-task="toggleTask"
      />
    </ul>
  </div>
</template>

<style scoped>
.task-list-container {
  width: 100%;
  max-width: 550px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
