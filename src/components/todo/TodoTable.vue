<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">
                    <input class="check-complete" type="checkbox" @change="checkAll()">
                </th>
                <th scope="col" style="width: 80%">Title</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in getTodoList" :key="todo.id"
                :class="{completed : todo.completed}">
                <td>
                    <input type="checkbox" v-model="todo.completed">
                </td>
                <router-link 
                    tag="td"
                    class="title"
                    style="width: 80%" 
                    :to="{ name: 'todo-detail', params: { id: todo.id }}">
                        {{ todo.title }}
                </router-link>
                <td>
                    <b-button
                        class="btn-sm rounded-circle" variant="danger"
                        @click="delTodo(todo)">&times;
                    </b-button>
                </td>
            </tr>
            <tr v-if="getTodoList.length < 1">
                <td colspan="3" class="text-center text-muted">
                    No todo item
                </td>
            </tr>
        </tbody>
    </table>
    
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    name: 'TodoTable',
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState('todolist', ['todos']),
        ...mapGetters('todolist', ['getTodoList'])
    },
    methods: {
        ...mapActions('todolist', ['addToDo', 'deleteTodo']),
        
        addNewTodo(todo) {
            if (this.newTodo.title.trim().length == 0 && this.newTodo.description.trim().length == 0) {
                return
            }

            if (this.newTodo.title.trim().length == 0 && this.newTodo.description.trim().length != 0) {
                this.newTodo.title = 'Untitled'
            }

           let newTodo = {
                id: this.newId,
                title: this.newTodo.title,
                description: this.newTodo.description,
                completed: false
            }

            this.addToDo(newTodo);

            // this.reset()
            // this.newId++
        },
        saveTodo() {
            // if (this.todos.filter((todo) => todo.id == this.newTodo.id).length > 0) {
            //     var todo = this.todos.filter((todo) => todo.id == this.newTodo.id)[0];
            //     this.todos[this.todos.indexOf(todo)].title = this.newTodo.title
            //     this.todos[this.todos.indexOf(todo)].description = this.newTodo.description
            //     this.reset()
            // }
        },
        delTodo(todo) {
            this.deleteTodo(todo)
        },
        checkAll() {
            this.getTodoList.forEach((todo) => {
                todo.completed = !todo.completed;
            });
        }
    }
}
</script>

<style scope lang="scss">
    .title {
        cursor: pointer;
    }
    .completed {
        color: gray;
        background-color: #94fb8c;
    }
    .completed .title {
        text-decoration: line-through;
    }
</style>
