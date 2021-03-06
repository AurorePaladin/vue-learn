const state= {
    count: 10
}

const mutations = {
    add(state,param){
        state.count+=param
    },
    reduce(state){
        state.count--
    }
}
const actions = {
    add: ({commit},param) => {
        commit('add',param)
    },
    reduce: ({commit}) => {
        commit('reduce')
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}