

const ADD_TODO = (state, todo) => {
      state.todos.push(todo);
}

const DELETE_TODO = (state, todo) => {
  state.todos.splice(state.todos.indexOf(todo), 1)
}

export default {
    ADD_TODO,
    DELETE_TODO
}