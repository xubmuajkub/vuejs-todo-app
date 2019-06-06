

const addTodo = ({commit}, newTodo) => {
    commit('ADD_TODO', newTodo)
}

const deleteTodo = ({commit}, todo) => {
    commit('DELETE_TODO', todo)
}

const updateTodo = ({commit}, todo) => {
    commit('UPDATE_TODO', todo)
}

const markAsComplete = ({commit}, id) => {
    commit('MARK_AS_COMPLETE', id)
}

export default {
    addTodo,
    deleteTodo,
    updateTodo,
    markAsComplete
}