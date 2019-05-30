const state = {
    count: 2
}

const mutations = {
    add(state, value) {
        state.count += value;
    }
}
const actions = {
    addAction(commit, value) {
        commit("add", value);
    }
}

const getters = {
    countStr(state){
        return state.count + "";
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}