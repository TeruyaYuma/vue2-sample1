import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
    state: () => {
        return {
            todos: [
                { done: false, todo: 'pino global store' },
            ]
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo)
        },
        deleteDoneTodos() {
            this.todos = this.todos.filter((todo) => !todo.done)
        },
    },
})