// import {onMounted, ref, watch} from "vue";
//
// const tasks = ref([]);
//
// export function useTask() {
//
//   onMounted(() => {
//     const tasksInLocalStorage = localStorage.getItem("tasks");
//     if (tasksInLocalStorage) {
//       tasks.value = JSON.parse(tasksInLocalStorage);
//     }
//   });
//
//   watch(tasks, (newTasks) => {
//     localStorage.setItem("tasks", JSON.stringify(newTasks));
//   }, {deep: true});
//
//   const removeTask = (index) => {
//     tasks.value.splice(index, 1);
//   }
//
//   const toggleTask = (index) => {
//     tasks.value[index].completed = !tasks.value[index].completed
//   }
//
//   return {
//     tasks,
//     removeTask,
//     toggleTask,
//   }
// }
