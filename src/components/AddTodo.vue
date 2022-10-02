<script>
import MyButton from '@/components/basics/MyButton.vue'

export default {
    components: {
        MyButton
    },
    data() {
        return {
            input: {
                todo: "",
                done: false
            },
            error: ""
        };
    },
    methods: {
        addTodo() {
            this.error = "";
            if (!this.input.todo) {
                this.error = "未入力です";
                return;
            }
            this.$emit("add-todo", this.input); // methodの中でもemitは使用できる
            this.input.todo = "";
        },
        removeTodos() {
            const doneTodos = this.todos.filter(todo => !todo.done);
            this.todos = doneTodos;
        }
    },
    emits: ["delete-done", "add-todo"]
}
</script>
<template>
    <input type="text" v-model="input.todo" />
    <MyButton @click="addTodo">
        追加
    </MyButton>
    <MyButton @click="$emit('delete-done')">
        完了済みを削除する
    </MyButton>
    <div v-if="error">{{error}}</div>

</template>