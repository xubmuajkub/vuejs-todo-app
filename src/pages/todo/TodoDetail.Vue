<template>
    <div class="row">
        <div class="col-md-12">
            <b-button class="rounded-0 mb-3" variant="outline-warning" @click="backToList()">Back</b-button>
            <TodoForm
                v-bind:todo="getTodo(this.$route.params.id)"
                @save="saveTodo"
            ></TodoForm>
        </div>
    </div>
</template>

<script>
import TodoForm from './../../components/todo/TodoForm'
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    name: 'TodoDetail',
    components: {
        TodoForm
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters('todolist', ['getTodo', 'getTodoList'])
    },
    methods: {
        ...mapActions('todolist', ['updateTodo']),
        saveTodo(newTodo) {
            if (!this.isValidTodo(newTodo)) {
                return
            }
            if (newTodo.title == null) {
                newTodo.title = 'Untitled'
            } else if (newTodo.title.trim().length == 0) {
                newTodo.title = 'Untitled'
            }
            if (this.getTodoList.filter(item => item.id === newTodo.id).length > 0) {
                let current = this.getTodoList.filter(item => item.id === newTodo.id)[0]
                if (current.title === newTodo.title && current.description === newTodo.description) {
                    this.backToList()
                    return
                }
            }
            
            this.updateTodo(newTodo)
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
        },
        backToList() {
            this.$router.push({name: 'todo-list'})
        }
    }
}

</script>

<style scope lang="scss">
    
</style>