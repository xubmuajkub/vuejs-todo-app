
const getTodoList = state => { return state.todos }

const getTodo = state => id => {
    let todo
    if ( (todo = state.todos.filter((todo) => todo.id === parseInt(id))).length > 0 ) {
        return todo[0];
    }
}

export default {
    getTodoList,
    getTodo
}