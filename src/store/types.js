// https://github.com/Awheat/vue2-douban-market/blob/master/src/store/mutation-types.js
// const createAsyncMutation = (type) => ({
//     SUCCESS: `${type}_SUCCESS`,
//     FAILURE: `${type}_FAILURE`,
//     PENDING: `${type}_PENDING`,
//     loadingKey: (`${type}_PENDING`).replace('_').toLowerCase(),
//     stateKey: (`${type}_DATA`).replace('_').toLowerCase()
// })

const createAsyncMutation = (type) => {
    const obj = {
        SUCCESS: `${type}_SUCCESS`,
        FAILURE: `${type}_FAILURE`,
        PENDING: `${type}_PENDING`,
        loadingKey: `${(type).replace('_').toLowerCase()}Pending`,
        statusCode: `${(type).replace('_').toLowerCase()}StatusCode`,
        stateKey: `${(type).replace('_').toLowerCase()}Data`
    }
    obj.toString = () => type
    obj.valueOf = () => type
    return obj
}

export const LOGIN = 'LOGIN'
export const TIMELINE = createAsyncMutation('TIMELINE')
export const POST = createAsyncMutation('POST')