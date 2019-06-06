<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">
                    <input class="check-complete" type="checkbox" :checked="noRemaining" @change="checkAll($event)">
                </th>
                <th scope="col" style="width: 80%">Title</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in getTodoList" :key="todo.id"
                :class="{completed : todo.completed}">
                <td>
                    <input type="checkbox" :value="todo.id" v-model="marked" @change="markAsDone(todo.id)">
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
    data() {
        return {
            marked: []
        }
    },
    computed: {
        ...mapState('todolist', ['todos']),
        ...mapGetters('todolist', ['getTodoList', 'getTodo']),
        noRemaining() {
            return this.marked.length === this.getTodoList.length
        }
    },
    methods: {
        ...mapActions('todolist', ['deleteTodo', 'markAsComplete']),
        
        delTodo(todo) {
            this.deleteTodo(todo)
            this.marked.splice(this.marked.indexOf(todo.id))
        },
        checkAll(event) {
            if (event.target.checked) {
                this.getTodoList.forEach((todo) => {
                    if (!this.marked.includes(todo.id)) {
                        this.marked.push(todo.id)
                        this.markAsDone(todo.id)
                    }
                });
            } else {
                this.marked = []
                this.getTodoList.forEach((todo) => {
                    this.markAsDone(todo.id)
                });
            }
        },
        markAsDone(id) {
            this.markAsComplete(id)
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
