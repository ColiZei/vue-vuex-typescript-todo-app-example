<template>
  <h1 class="todos text-gray-50 text-6xl font-normal leading-normal">
    My Todos
  </h1>
  <todo-create></todo-create>
  <todo-list></todo-list>
  <div class="text-center">
    <a
      href="https://github.com/ColiZei/vue-vuex-typescript-todo-app-example"
      target="_blank"
    >
      View source code on GitHub!
      <img
        class="mx-auto"
        src="../assets/Octocat.png"
        alt="GitHub - Octocat"
        width="128"
        height="128"
      />
    </a>
  </div>
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
