<script setup>

  defineProps(["task"]);
  defineEmits(["remove-task", "toggle-task"])

</script>

<template>
  <li>
    <div class="task-content">
      <div class="task-info">
        <span class="task-text">{{ task.title }}</span>
        <div class="task-details">

<!--          <small><strong>Due:</strong> {{ task.dueDate || "No deadline" }}</small>-->
<!--          <small><strong>Priority:</strong> {{ task.priority || "Not set" }}</small>-->
<!--          <small><strong>Category:</strong> {{ task.category || "General" }}</small>-->
<!--        -->
        </div>
      </div>

      <div class="task-actions">
        <button class="cancelButton" @click="$emit('remove-task', task.id ? task.id : task.title)">❌</button>
        <button class="toggleButton" @click="$emit('toggle-task', task.id ? task.id : task.title)">
          {{ task.completed ? "Mark as Incomplete" : "Mark as Completed" }}
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped>

li {
  background: beige;
  border-radius: 8px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 500px;
  padding: 15px;
}

.task-content {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.task-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 1;
}

.task-details {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: gray;
  gap: 5px;
}

.task-actions {
  display: flex;
  gap: 10px;
}

button {
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
}

.cancelButton {
  background-color: white;
  color: white;
  border-radius: 5px;
}

.toggleButton {
  background-color: green;
  color: white;
  border-radius: 5px;
}
</style>
