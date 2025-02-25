import { createRouter, createWebHistory } from 'vue-router'
import TaskPageVue from "@/views/TaskPageVue.vue";
import CompletedTasksVue from "@/views/CompletedTasksVue.vue";
import PlaceHolderVue from "@/views/PlaceHolderVue.vue";
import AGGridVue from "@/views/AGGridVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: TaskPageVue },
    { path: "/completed", component: CompletedTasksVue },
    { path: "/placeholderTasks", component: PlaceHolderVue },
    { path: "/agGridTasks", component: AGGridVue }
  ],
})

export default router
