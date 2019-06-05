

const addToDo = ({commit}, newTodo) => {
    commit('ADD_TODO', newTodo)
}

const deleteTodo = ({commit}, todo) => {
    commit('DELETE_TODO', todo)
}

export default {
    addToDo,
    deleteTodo
}