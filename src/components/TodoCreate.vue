<template>
  <div class="bg-gray-100 rounded-xl p-4 my-4">
    <base-headline>Create Todo</base-headline>
    <form @submit.prevent="addTodo">
      <div class="my-3 flex">
        <input
          v-model="name"
          type="text"
          placeholder="New Todo"
          class="
            px-3
            py-3
            placeholder-blueGray-300
            text-blueGray-600
            relative
            bg-white
            rounded
            text-sm
            border-0
            shadow
            outline-none
            focus:outline-none focus:ring
            w-full
          "
        />
        <base-button type="submit" :disabled="name.length === 0">
          Add
        </base-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Todo } from "@/types/todo";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoCreate",
  setup() {
    const name = ref("");

    const store = useStore();

    const addTodo = () => {
      if (name.value) {
        const newTodo: Todo = {
          id: Math.random().toString(36).substr(2, 9),
          name: name.value,
          done: false,
        };

        store.dispatch("addTodo", newTodo);

        name.value = "";
      }
    };
    return {
      name,
      addTodo,
    };
  },
});
</script>
