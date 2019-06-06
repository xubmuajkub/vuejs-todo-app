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
        ...mapActions('todolist', []),
        backToList() {
            this.$router.push({name: 'todo-list'})
        },
        saveTodo(newTodo) {
            
            console.log(newTodo)

            // let newTodo = {
            //     id: this.editTodo.id,
            //     title: this.editTodo.title,
            //     description: this.editTodo.description,
            //     completed: this.editTodo.completed
            // }
            
            // if (!this.isValidTodo(newTodo)) {
            //     return
            // }

            // if (newTodo.title == null) {
            //     newTodo.title = 'Untitled'
            // } else if (newTodo.title.trim().length == 0) {
            //     newTodo.title = 'Untitled'
            // }

            // if (this.todo == undefined) {
            //     newTodo.id = this.increment
            //     this.addTodo(newTodo)
            // } else {
            //     this.updateTodo(newTodo)
            // }
            
            this.backToList()
        }
    }
}

</script>

<style scope lang="scss">
    
</style>