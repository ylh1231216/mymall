import Vue from 'vue'
import Vuex from 'vuex'
import imgsrc from '../assets/imgsrc'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cargood: imgsrc,
        allselect: false
    },
    mutations: {
        add(state, payload) {
            state.cargood[payload.index].count = state.cargood[payload.index].count + 1
        },
        dec(state, payload) {
            if (state.cargood[payload.index].count > 1) {
                state.cargood[payload.index].count = state.cargood[payload.index].count - 1
            }
        },
        changeallstau(state) {
            state.allselect = !state.allselect
            for (let i of state.cargood) {
                i.stats = state.allselect
            }
        },
        changesinglestau(state, payload) {
            state.cargood[payload.index].stats = !state.cargood[payload.index].stats
                // console.log(state.cargood[payload.index].stats)
            for (let i of state.cargood) {
                if (i.stats) {
                    state.allselect = true
                } else {
                    state.allselect = false
                    break
                }
            }
        }
    },
    actions: {},
    modules: {}
})