<script>
import AddTodo from '@/components/AddTodo.vue'
import Todolist from '@/components/TodoList.vue'
import { useTodosStore } from '@/store/todo'
import { mapStores, mapActions } from 'pinia'

export default {
    components: {
        AddTodo,
        Todolist
    },
    // data() {
    //     return {
    //         todos: [],
    //     }
    // },
    computed: {
        ...mapStores(useTodosStore)
    },
    methods: {
        ...mapActions(useTodosStore, ['addTodo', 'deleteDoneTodos']),
        addNewTodo(input) {
            this.addTodo({ ...input })
        },
        // clearDoneTodos() {
        //     this.deleteDoneTodos() emitに直接記述する事も可
        // },
        debug(text) {
            console.log(text)
        }
    },
    mounted() {
        this.debug('mounted')
    },
    created() {
        this.debug('created')
    }
}
</script>
    
<template>
    <AddTodo @delete-done="deleteDoneTodos" @add-todo="addNewTodo" />
    <Todolist :todos="todosStore.todos" />
</template>
    
<style scoped>
body {
    background-color: #eee;
}

.todo-done {
    text-decoration: line-through;
}
</style>