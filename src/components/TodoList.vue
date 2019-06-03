<template>
    <div class="row">
        <div class="col-md-6">
            <b-list-group>
                <b-list-group-item 
                    v-for="todo in todos" :key="todo.id"
                    class="d-flex justify-content-between align-items-center"
                    v-variant="todo"
                    href="#" >
                    {{ todo.title }}
                    <span>
                        <b-button v-if="!todo.completed" class="rounded-circle" variant="success" @click="markAsDone(todo)">&#10003;</b-button>
                        <b-button class="rounded-circle" variant="danger" @click="deleteTodo(todo)">&times;</b-button>
                    </span>
                </b-list-group-item>
            </b-list-group>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <input type="text" v-model="newTodo.title" class="form-control rounded-0" placeholder="Title">
            </div>
            <div class="form-group">
                <textarea v-model="newTodo.description"  class="form-control rounded-0" rows="5" placeholder="Your to do detail"></textarea>
            </div>
            <b-button class="rounded-0" block variant="primary" @click="addTodo()">Save</b-button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'todo-list',
    data () {
        return {
        newTodo: {
            title: '',
            description: ''
        },
        newId: 3,
        todos: [
            {
                id: 1,
                title: 'Take a shower',
                description: 'None of my business',
                completed: false
            },
            {
                id: 2,
                title: 'Read a book',
                description: 'Focusing on reading novel',
                completed: false
            }
        ]
        }
    },
    methods: {
            addTodo() {
                if (this.newTodo.title.trim().length == 0 && this.newTodo.description.trim().length == 0) {
                    return
                }
                if (this.newTodo.title.trim().length == 0 && this.newTodo.description.trim().length != 0) {
                    this.newTodo.title = 'Untitled'
                }
                this.todos.push({
                    id: this.newId,
                    title: this.newTodo.title,
                    description: this.newTodo.description,
                    completed: false
                })
                this.resetData()
                this.newId++
            },
            deleteTodo(todo) {
                this.todos.splice(this.todos.indexOf(todo), 1)
            },
            markAsDone(todo) {
                todo.completed = true
            },
            resetData() {
                this.newTodo = {
                    title: '',
                    description: ''
                }
            }
    },
    directives: {
        variant: {
            bind (el, binding, vnode) {
                if (binding.value.completed) {
                    el.class = 'list-group-item-action';
                }
            }
        }
    }
}

</script>

<style lang="scss">
    
</style>