import {defineStore} from "pinia";
import {ref, watch} from "vue";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const placeHolderStore = defineStore("placeHolderStore", target => {
  const tasks = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchTasks = async () => {

    watch(tasks, (newTasks) => {
      console.log("Updated tasks in UI:", newTasks);
    }, { deep: true });

    loading.value = true;

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
  }

  const toggleTask = async (id) => {
    const index = tasks.value.findIndex(task => task.id === id);
    if (index !== -1) {
      try {
        await axios.put(`${API_URL}/${id}`, {
          title: tasks.value[index].title,
          completed: !tasks.value[index].completed
        });

        // ✅ Reassign entire object to trigger Vue reactivity
        tasks.value[index] = { ...tasks.value[index], completed: !tasks.value[index].completed };
        tasks.value = [...tasks.value];  // ✅ Forces Vue to detect changes

        console.log("Task toggled, new list:", tasks.value);
      } catch (err) {
        error.value = "Failed to update task!";
      }
    }
  };

  const removeTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // API uses IDs
      tasks.value = tasks.value.filter(task => task.id !== id);
      console.log("Task removed, current list - ", tasks.value);
    } catch (err) {
      error.value = "Failed to remove task!";
    }
  };

  return { tasks, fetchTasks, toggleTask, removeTask, loading, error };
})
