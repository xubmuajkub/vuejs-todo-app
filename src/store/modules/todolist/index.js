import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
    todos: [
        {
            id: 1,
            title: 'Take a shower',
            description: 'None of my business',
            completed: false
        },
        {
            id: 2,
            title: 'Read a book',
            description: 'Focusing on reading novel',
            completed: false
        }
    ],
    newId: 3
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}