<template>
  <div class="bg-gray-100 rounded-xl py-2 px-4 my-4">
    <div v-if="!hasTodos" class="p-3">Nothing to do!</div>
    <div v-if="hasTodos && allDone" class="p-2 border-b">
      Yeah! All done! :)
    </div>
    <div v-if="hasTodos">
      <div
        class="flex pl-2 pt-2 pb-2"
        :class="{ 'border-t': idx > 0 }"
        v-for="(todo, idx) in sortedTodos"
        :key="todo.id"
      >
        <div class="flex-grow leading-8" :class="{ 'line-through': todo.done }">
          {{ todo.name }}
        </div>
        <div>
          <base-button :disabled="todo.done" @click="finishTodo(todo)">
            Done
          </base-button>
          <base-button color="red" @click="deleteTodo(todo)">Del</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { Todo } from "@/types/todo";

export default defineComponent({
  name: "TodoList",
  setup() {
    const store = useStore();

    const finishTodo = (todo: Todo) => {
      const updatedTodo: Todo = {
        ...todo,
        name: todo.name,
        done: true,
      };

      store.dispatch("updateTodo", updatedTodo);
    };

    const deleteTodo = (todo: Todo) => {
      store.dispatch("deleteTodo", todo);
    };

    return {
      hasTodos: computed(() => store.getters.getTodos.length > 0),
      sortedTodos: computed<Todo[]>(() => {
        const todos = store.getters.getTodos;
        todos.sort((a: Todo, b: Todo) =>
          b.done === a.done ? 0 : b.done ? -1 : 1
        );
        return todos;
      }),
      allDone: computed(
        () => !store.getters.getTodos.find((t: Todo) => !t.done)
      ),
      finishTodo,
      deleteTodo,
    };
  },
});
</script>
