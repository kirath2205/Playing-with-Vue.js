import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const placeHolderStore = defineStore("placeHolderStore", () => {
  const tasks = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchTasks = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get(API_URL+"?_limit=5");
      tasks.value = response.data.map(task => ({
        title: task.title,
        completed: task.completed,
        userId: task.userId,
        id: task.id
      }));
      console.log("Tasks fetched, current list - ", tasks.value);
    } catch(e) {
      console.log("Failed to fetch tasks from placeholder");
      error.value = "Failed to fetch tasks from placeholder"
    } finally {
      loading.value = false;
    }
  };

  const toggleTask = async (id) => {
    const taskIndex = tasks.value.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      console.error(`Task with id ${id} not found`);
      return;
    }

    const task = tasks.value[taskIndex];
    const newStatus = !task.completed;

    tasks.value = tasks.value.map((t, index) =>
      index === taskIndex ? { ...t, completed: newStatus } : t
    );

    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        ...task,
        completed: newStatus
      });

    } catch (err) {
      error.value = "Failed to update task on server";

      tasks.value = tasks.value.map((t, index) =>
        index === taskIndex ? { ...t, completed: !newStatus } : t
      );
    }
  };

  const removeTask = async (id) => {
    // Remove from UI first
    const taskToRemove = tasks.value.find(task => task.id === id);
    tasks.value = tasks.value.filter(task => task.id !== id);

    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (err) {
      error.value = "Failed to remove task";

      if (taskToRemove) {
        tasks.value = [...tasks.value, taskToRemove];
      }
    }
  };

  return {
    tasks,
    fetchTasks,
    toggleTask,
    removeTask,
    loading,
    error
  };
});
