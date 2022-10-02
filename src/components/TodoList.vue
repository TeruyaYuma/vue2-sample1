<script>
import MyButton from './basics/MyButton.vue'

export default {
    components: {
        MyButton
    },
    props: {
        todos: Array
    },
    methods: {
        edit(todo) {
            this.$router.push('./edit')
        }
    }
}
</script>
<template>
    <ul v-if="todos.length">
        <li v-for="todo in todos">
            <input type="checkbox" v-model="todo.done" />
            <span :class="{'todo-done': todo.done}">{{todo.todo}}</span>
            <MyButton @click="edit(todo)">編集</MyButton>
        </li>
    </ul>
    <p v-else>まだTodoがありません</p>
</template>