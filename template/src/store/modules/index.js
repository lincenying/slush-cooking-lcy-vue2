import {
    RECEIVE_INDEX
} from '../mutation-types'

const state = {
    data: {
        list: [],
        hasNext: 0,
        page: 1,
        path: ''
    }
}

const mutations = {
    [RECEIVE_INDEX](state, payload) {
        console.log(payload)
    }
}

export default {
    state,
    mutations
}
