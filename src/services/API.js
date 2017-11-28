import axios from 'axios'
import { Base64 } from 'js-base64'
import store from '../store'

const API = {}
const URL = API.URL = 'http://localhost:3007'

class cAjax {
    get(url, params) {
        return axios({
            method: 'get',
            url,
            params,
            headers: {
                'x-auth-token': store.getters.token,
                'x-auth-secret': store.getters.secret,
            }
        })
    }
    post(url, data) {
        return axios({
            method: 'post',
            url,
            data,
            headers: {
                'x-auth-token': store.getters.token,
                'x-auth-secret': store.getters.secret,
            }
        })
    }
}

const ajax = new cAjax()

API.userGet = (username, password) => {
    return axios({
        method: 'post',
        url: `${URL}/user/get`,
        headers: {
            Authorization: `Basic ${Base64.encode(`${username}:${password}`)}`
        }
    })
}

API.timeline = (data) => {
    return ajax.post(`${URL}/get/statuses/home_timeline`)
}

API.post = (data) => {
    return ajax.post(`${URL}/post/statuses/update`, data)
}

export default API