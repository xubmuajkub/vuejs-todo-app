<template>
    <div class="row">
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
            <b-button class="rounded-0" variant="outline-primary" @click="saveTodo()">Save</b-button>
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
        saveTodo() {
            if (this.todo == undefined) {
                this.editTodo.id = this.increment
            }
            this.$emit('save', this.editTodo)
        },
        backToList() {
            this.$router.push({name: 'todo-list'})
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
