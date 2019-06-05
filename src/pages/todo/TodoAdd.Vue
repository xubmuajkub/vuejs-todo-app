<template>
    <div class="row">
        <div class="col-md-12">
            <TodoForm
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
        ...mapActions('todolist', [])
    }
}

</script>

<style scope lang="scss">
    
</style>