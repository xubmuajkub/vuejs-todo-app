<template>
    <b-list-group>
        <div 
            v-for="todo in todos" :key="todo.id"
            class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            href="#"
            @dblclick="$emit('edit')">
            <span :class="{completed:todo.completed}">
                <input class="check-complete" type="checkbox" v-model="todo.completed">
                <span class="title" @click="$emit('view-detail')">{{ todo.title }}</span>
            </span>
            <b-button
                class="rounded-circle" variant="danger"
                @click="$emit('delete')">
                &times;
            </b-button>
        </div>
    </b-list-group>
</template>

<script>
export default {
    name: 'todo-list',
    props: {
        todos: {
            type: Object
        }
    },
    components: {

    },
    data() {
        return {
            
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
