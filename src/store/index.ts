import { createStore } from "vuex";
import { Todo } from "@/types/todo";

type TodoState = {
  todos: Todo[];
};

const state: TodoState = {
  todos: [],
};

export default createStore({
  state,
  mutations: {
    addTodo(state, newTodo: Todo) {
      state.todos.unshift(newTodo);
    },
    updateTodo(state, updatedTodo: Todo) {
      const currTodos = [...state.todos];
      const index = currTodos.findIndex((t) => t.id === updatedTodo.id);

      if (index !== -1) {
        currTodos[index] = updatedTodo;
      }

      state.todos = currTodos;
    },
    deleteTodo(state, todo: Todo) {
      const currTodos = [...state.todos];
      state.todos = currTodos.filter((t) => t.id !== todo.id);
    },
  },
  actions: {
    addTodo({ commit }, newTodo: Todo) {
      commit("addTodo", newTodo);
    },
    updateTodo({ commit }, updatedTodo: Todo) {
      commit("updateTodo", updatedTodo);
    },
    deleteTodo({ commit }, todo: Todo) {
      commit("deleteTodo", todo);
    },
  },
  getters: {
    getTodos: (state) => {
      return state.todos;
    },
  },
  modules: {},
});
