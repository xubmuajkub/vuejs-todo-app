
const ADD_TODO = (state, todo) => {
  state.todos.push(todo);
  state.newId++
}

const DELETE_TODO = (state, todo) => {
  state.todos.splice(state.todos.indexOf(todo), 1)
}

const UPDATE_TODO = (state, newTodo) => {
  if (state.todos.filter((todo) => todo.id == newTodo.id).length > 0) {
    var todo = state.todos.filter((todo) => todo.id == newTodo.id)[0];
    state.todos[state.todos.indexOf(todo)].title = newTodo.title
    state.todos[state.todos.indexOf(todo)].description = newTodo.description
  }
}

const MARK_AS_COMPLETE = (state, id) => {
  let temp
  if ( (temp = state.todos.filter((item) => item.id == id)).length > 0) {
    state.todos[state.todos.indexOf(temp[0])].completed = !state.todos[state.todos.indexOf(temp[0])].completed
  }
}

export default {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  MARK_AS_COMPLETE
}