import axios from 'axios'
import * as types from './types.js'
import API from '@/services/API.js'

export default {
	login: ({ commit }, { username, password }) => {
		API.userGet(username, password).then((response) => {
			if (response.status === 200) {
				userInfo: response.data,
				commit(types.LOGIN, {
					userInfo: response.data.data,
					'x-auth-token': response.headers['x-auth-token'],
					'x-auth-secret': response.headers['x-auth-secret'],
				})
			}
		})
	},

	timeline: ({ commit }, data ) => {
		API.timeline(data).then(response => {
			if (response.status === 200) {
				commit(types.TIMELINE, response.data.data)
			}
		})
	}
}