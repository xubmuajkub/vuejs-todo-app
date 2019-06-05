<template>
    <div class="row">
        <div class="col-md-12 mb-3">
            <router-link :to="{name: 'add'}">
                <button class="btn btn-outline-info">Add Todo</button>
            </router-link>
        </div>
        <div class="col-md-12">
            <TodoTable/>
        </div>
    </div>
</template>

<script>
import TodoTable from './../../components/todo/TodoTable'
export default {
    name: 'TodoList',
    components: {
        TodoTable
    }
}

</script>

<style scope lang="scss">
    
</style>