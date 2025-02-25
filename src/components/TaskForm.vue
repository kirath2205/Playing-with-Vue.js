<script setup>

import {ref} from "vue";

const taskName = ref("");
const dueDate = ref("");
const priority = ref("");
const category = ref("");

const emit = defineEmits(["add-task"]);

const submitTask = () => {
  if(!taskName.value.trim()) return;

  const task = {
    title: taskName.value,
    dueDate: dueDate.value || "No deadline",
    priority: priority.value,
    category: category.value || "General",
    completed: false,
  }

  emit("add-task", task);
}

</script>

<template>
  <form @submit.prevent="submitTask">
    <div class="form-group">
      <label> Task Name: </label>
      <input v-model="taskName" placeholder="Enter task" required />
    </div>

    <div class="form-group">
      <label>Due Date:</label>
      <input type="date" v-model="dueDate" />
    </div>

    <div class="form-group">
      <label>Priority:</label>
      <select v-model="priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>

    <div class="form-group">
      <label>Category:</label>
      <input v-model="category" placeholder="Work, Personal, etc." />
    </div>

    <button type="submit">Add Task</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
input, select, button {
  padding: 8px;
}
button {
  background-color: blue;
  color: white;
  cursor: pointer;
}
</style>
