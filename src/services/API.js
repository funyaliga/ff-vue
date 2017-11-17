import axios from 'axios'
import { Base64 } from 'js-base64'
import store from '../store'

const API = {}
const URL = API.URL = 'http://localhost:3007'

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
    return axios({
        method: 'post',
        url: `${URL}/get/statuses/home_timeline`,
        headers: {
            'x-auth-token': store.getters.token,
            'x-auth-secret': store.getters.secret,
        }
    })
}

export default API