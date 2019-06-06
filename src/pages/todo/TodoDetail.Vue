<template>
    <div class="row">
        <div class="col-md-12">
            <b-button class="rounded-0 mb-3" variant="outline-warning" @click="backToList()">Back</b-button>
            <TodoForm
                v-bind:todo="getTodo(this.$route.params.id)"
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
        ...mapGetters('todolist', ['getTodo'])
    },
    methods: {
        ...mapActions('todolist', ['']),
        backToList() {
            this.$router.push({name: 'todo-list'})
        }
    }
}

</script>

<style scope lang="scss">
    
</style>