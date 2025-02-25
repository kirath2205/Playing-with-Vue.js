<template>
  <div class="ag-theme-alpine" style="height: 400px; width: 100%;">
    <AgGridVue
      :rowData="rowData"
      :columnDefs="columnDefs"
      class="ag-theme-alpine"
      :pagination="true"
      :rowSelection="'multiple'"
      :modules="gridModules"
    />
  </div>
  <pre>{{ rowData }}</pre>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { ClientSideRowModelModule } from "ag-grid-community";

const gridModules = [ClientSideRowModelModule];
const rowData = ref([]);
const columnDefs = ref([
  { headerName: "ID", field: "id", sortable: true, filter: "agNumberColumnFilter" },
  { headerName: "Title", field: "title", sortable: true, filter: "agTextColumnFilter" },
  { headerName: "Completed", field: "completed", sortable: true, filter: "agSetColumnFilter", checkboxSelection: true }
]);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  rowData.value = await response.json();
});
</script>

<style>
@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-alpine.css";
</style>
