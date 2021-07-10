<template>
  <h1 class="todos text-gray-50 text-6xl font-normal leading-normal">
    My Todos
  </h1>
  <todo-create></todo-create>
  <todo-list></todo-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TodoCreate from "@/components/TodoCreate.vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "Todos",
  components: {
    TodoCreate,
    TodoList,
  },
});
</script>
