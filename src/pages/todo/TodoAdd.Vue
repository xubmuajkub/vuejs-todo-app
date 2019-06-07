<template>
    <div class="row">
        <div class="col-md-12">
            <b-button class="rounded-0 mb-3" variant="outline-warning" @click="backToList()">Back</b-button>
            <TodoForm
            @save="saveTodo"
            ></TodoForm>
        </div>
    </div>
</template>

<script>
import TodoForm from './../../components/todo/TodoForm'
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    name: 'TodoAdd',
    components: {
        TodoForm
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters('todolist', [])
    },
    methods: {
        ...mapActions('todolist', ['addTodo']),
        backToList() {
            this.$router.push({name: 'todo-list'})
        },
        saveTodo(newTodo) {
            if (!this.isValidTodo(newTodo)) {
                return
            }
            if (newTodo.title == null) {
                newTodo.title = 'Untitled'
            } else if (newTodo.title.trim().length == 0) {
                newTodo.title = 'Untitled'
            }
            this.addTodo(newTodo)
            this.backToList()
        },
        isValidTodo(todo) {
            if (todo.title === null && todo.description === null) {
                return false
            }
            if (todo.description !== null) {
                if (todo.description.trim().length == 0) {
                    return false
                }
            }
            return true
        }
    }
}

</script>

<style scope lang="scss">
    
</style>