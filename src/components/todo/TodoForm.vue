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
            <b-button class="rounded-0" variant="warning" @click="cancel()">Cancel</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',
    props: {
        todo: {
            type: Object
        }
    },
    data () {
        return {
            newTodo: {
                id: 0,
                title: '',
                description: ''
            },
            editTodo: this.todo !== null || this.todo !== undefined ? this.todo: this.newTodo,
        }
    },
    methods: {
        saveTodo() {
            this.newTodo = {
                id: this.editTodo.id,
                title: this.editTodo.title,
                description: this.editTodo.description
            }
        },
        cancel() {
            this.$router.push({name: 'todo-list'})
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
