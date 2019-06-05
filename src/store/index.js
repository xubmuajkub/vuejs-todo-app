import Vue from 'vue'
import Vuex from 'vuex'
import todolist from './modules/todolist'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        todolist
    },
    strict: debug,
    plugins: debug ? [createLogger] : []
})