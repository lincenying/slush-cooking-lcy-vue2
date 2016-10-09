import * as types from './mutation-types'
import api from '../api'

export const gProgress = ({commit}, num) => {
    commit(types.GLOBAL_PROGRESS, num)
}

export const getIndex = ({commit, state: {route: { path }}}, config) => {
    return api.getSomeData(config).then(({ body }) => {
        commit(types.RECEIVE_INDEX, {
            ...config,
            ...body,
            path
        })
    })
}
