<template>
    <div class="container">
        <div class="col-md-12">
            <div class="form-group">
                <input type="text" v-model="editTodo.title" class="form-control rounded-0" placeholder="Title">
            </div>
            <div class="form-group">
                <textarea v-model="editTodo.description"  class="form-control rounded-0" rows="5" placeholder="Your to do detail"></textarea>
            </div>
            <input type="hidden" v-model="editTodo.id">
        </div>
        <div class="col-md-12">
            <b-button class="rounded-0" variant="primary" @click="saveTodo()">Save</b-button>
            <b-button class="rounded-0" variant="warning" @click="backToList()">Cancel</b-button>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    name: 'TodoForm',
    props: {
        todo: {
            type: Object
        }
    },
    data () {
        return {
            editTodo : this.todo !== undefined ? {
                id: this.todo.id,
                title: this.todo.title,
                description: this.todo.description,
                completed: this.todo.completed
            } : {
                id: 0, title: null, description: null, completed: false
            }
        }
        
    },
    computed: {
        ...mapGetters('todolist', ['increment'])
    },
    methods: {
        ...mapActions('todolist', ['addTodo', 'updateTodo']),

        saveTodo() {

            let newTodo = {
                id: this.editTodo.id,
                title: this.editTodo.title,
                description: this.editTodo.description,
                completed: this.editTodo.completed
            }
            
            if (!this.isValidTodo(newTodo)) {
                return
            }

            if (newTodo.title == null) {
                newTodo.title = 'Untitled'
            } else if (newTodo.title.trim().length == 0) {
                newTodo.title = 'Untitled'
            }

            if (this.todo == undefined) {
                newTodo.id = this.increment
                this.addTodo(newTodo)
            } else {
                this.updateTodo(newTodo)
            }
            
            this.backToList()
        },
        backToList() {
            this.$router.push({name: 'todo-list'})
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
