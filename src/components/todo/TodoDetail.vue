<template>
    <div>
        <!-- {{$route.params.id}} -->
        <b-card v-bind:title="title">
            <b-card-text>
                {{ description }}
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
          type: Object,
          required: true
      }
  },
  data () {
    return {
      'id': this.todo.id,
      'title': this.todo.title,
      'description': this.todo.description
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
