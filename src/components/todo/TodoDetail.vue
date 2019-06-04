<template>
    <div>
        {{$route.params.id}}
        <b-card v-bind:title="todo.title">
            <b-card-text>
                {{ todo.description }}
            </b-card-text>

            <b-link href="#" class="btn btn-warning" @click="$emit('close')">
                Close
            </b-link>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'todo-detail',
  props: {
      todo: {
          type: Object
      }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
