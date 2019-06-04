

const addToDo = ({commit}, newTodo) => {
    commit('ADD_TODO', newTodo)
}

export default {
    addToDo
}