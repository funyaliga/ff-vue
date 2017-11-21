import axios from 'axios'
import * as types from './types.js'
import API from '@/services/API.js'

const doAsync = (store, { api, type }) => {
	// Send the pending flag. Useful for showing a spinner, etc  

	store.commit(type.BASE, {
		type: type.PENDING, 
		data: true,
	})
	// make the ajax call.
	return api
		.then(res => {
			// the call was successful! 
			// commit the response and status code to the store. 
			// we will write the actual mutation logic next. 
			store.commit(type.BASE, {
				type: type.SUCCESS,
				data: res,
				statusCode: res.status,
			})

			// also sent pending to false, since the call is complete.             
			store.commit(type.BASE, {
				type: type.PENDING, 
				data: false,
			})
		})
		.catch(error => {
			// there was an error. Commit the status code to the store.
			// we will write the mutation logic soon.
			store.commit(type.BASE, {
				type: type.FAILURE,
				statusCode: error.response.status,
			})
			// since the call is complete, sent pending to false.
			store.commit(type.BASE, {
				type: type.PENDING,
				data: false,
			})
		})
}

export default {
	login: ({ commit }, { username, password }) => {
		API.userGet(username, password).then((response) => {
			if (response.status === 200) {
				commit(types.LOGIN, {
					userInfo: response.data.data,
					'x-auth-token': response.headers['x-auth-token'],
					'x-auth-secret': response.headers['x-auth-secret'],
				})
			}
		})
	},

	timeline: (store, data) => {
		doAsync(store, {
			api: API.timeline(data),
			type: types.TIMELINE
		})
	}
}