<template>
    <div class="row">
        <b-button block class="m-3" variant="primary" @click="isUpdate || viewing ? reset() : '';editing = true">Add New Todo</b-button>
        <div v-bind:class="{ 'col-md-12': !editing && !viewing, 'col-md-6': editing || viewing }">
            <b-list-group>
                <div 
                    v-for="todo in $store.state.todos" :key="todo.id"
                    class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                    href="#"
                    @dblclick="editTodo(todo)">
                    <span :class="{completed:todo.completed}">
                        <input class="check-complete" type="checkbox" v-model="todo.completed">
                        <span class="title" @click="viewTodoDetail(todo)">{{ todo.title }}</span>
                    </span>
                    <b-button
                            class="rounded-circle" variant="danger"
                            @click="deleteTodo(todo)">&times;</b-button>
                </div>
            </b-list-group>
        </div>
        <div class="col-md-6" v-if="editing" v-bind:class="{'col-md-12': $store.state.todos.length == 0}">
            <div class="form-group">
                <input type="text" v-model="newTodo.title" class="form-control rounded-0" placeholder="Title">
            </div>
            <div class="form-group">
                <textarea v-model="newTodo.description"  class="form-control rounded-0" rows="5" placeholder="Your to do detail"></textarea>
            </div>
            <input type="hidden" v-model="newTodo.id">
            <b-button class="rounded-0" variant="primary" @click="!isUpdate ? addTodo() : saveTodo()">Save</b-button>
            <b-button class="rounded-0" variant="warning" @click="reset()">Cancel</b-button>
        </div>
        <div class="col-md-6" v-if="viewing && !editing">
            <todo-detail
                v-bind:todo="newTodo"
                @close="reset()"
            ></todo-detail>
        </div>
    </div>
</template>

<script>

console.log(this.$store);

import TodoDetail from './TodoDetail'
export default {
    name: 'todo-list',
    components: {
        TodoDetail
    },
    data () {
        return {
            
            newTodo: {
                id: 0,
                title: '',
                description: ''
            },
            newId: 3,
            editing: false,
            isUpdate: false,
            viewing: false,
            
        }
    },
    methods: {
        
        addTodo(todo) {
            if (this.newTodo.title.trim().length == 0 && this.newTodo.description.trim().length == 0) {
                return
            }
            if (this.newTodo.title.trim().length == 0 && this.newTodo.description.trim().length != 0) {
                this.newTodo.title = 'Untitled'
            }
            this.$store.state.todos.push({
                id: this.newId,
                title: this.newTodo.title,
                description: this.newTodo.description,
                completed: false
            })
            this.reset()
            this.newId++
        },
        viewTodoDetail(todo) {
            this.reset()
            this.viewing = true;
            this.newTodo.title = todo.title
            this.newTodo.description = todo.description
        },
        editTodo(todo) {
            this.editing = true
            this.isUpdate = true
            this.newTodo.id = todo.id
            this.newTodo.title = todo.title
            this.newTodo.description = todo.description
        },
        saveTodo() {
            if (this.$store.state.todos.filter((todo) => todo.id == this.newTodo.id).length > 0) {
                var todo = this.$store.state.todos.filter((todo) => todo.id == this.newTodo.id)[0];
                this.$store.state.todos[this.$store.state.todos.indexOf(todo)].title = this.newTodo.title
                this.$store.state.todos[this.$store.state.todos.indexOf(todo)].description = this.newTodo.description
                this.reset()
            }
        },
        deleteTodo(todo) {
            this.$store.state.todos.splice(this.$store.state.todos.indexOf(todo), 1)
            if (this.$store.state.todos.indexOf(todo) === -1) {
                this.reset()
            }
        },
        reset() {
            this.newTodo = {
                title: '',
                description: ''
            }
            this.editing = false
            this.isUpdate = false
            this.viewing = false
        }
    }
}
</script>

<style scope lang="scss">
    .title {
        cursor: pointer;
        font-weight: 500;
        font-size: 1.5rem;
    }
    .completed {
        text-decoration: line-through;
        color: gray;
    }
    .check-complete {
        margin-right: 10px;
    }
</style>
