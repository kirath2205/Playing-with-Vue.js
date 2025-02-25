import {defineStore} from "pinia";
import {onMounted, ref, watch} from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  onMounted(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks);
    }
  });

  watch(tasks, (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }, {deep: true});

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  const addTask = (task) => {
    tasks.value.push(task);
    saveTasks();
  };

  const removeTask = (title) => {
    const index = tasks.value.findIndex(task => task.title === title);
    if (index !== -1) {
      tasks.value.splice(index, 1);
      //tasks.value = [...tasks.value];// ✅ Directly removes the task (Vue detects change)
      saveTasks();
    }
  };

  const toggleTask = (title) => {
    const task = tasks.value.find(task => task.title === title);
    if (task) {
      task.completed = !task.completed;
      saveTasks();
    }
  };

  return { tasks, addTask, removeTask, toggleTask };

})
