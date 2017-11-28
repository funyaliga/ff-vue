import * as types from './types.js'

const C = (type, callback) => {
	return {
		[type] (state, basedata) {
			switch (basedata.type) {
				case types[type].PENDING:
					state.loading = basedata.data
					if (callback.PENDING) {
						return callback.PENDING(state, basedata.data)
					}
					break
				case types[type].SUCCESS:
					if (callback.SUCCESS) {
						return callback.SUCCESS(state, basedata.data)
					}
					break
				case types[type].FAILURE:
					if (callback.FAILURE) {
						return callback.FAILURE(state, basedata.data)
					}
					break
			}	
		}
	}
}

const mutations = {
	[types.LOGIN](state, data){
		state.userInfo = data.userInfo
		state.token = data['x-auth-token']
		state.secret = data['x-auth-secret']
		state.login = true
		localStorage.setItem("userInfo", JSON.stringify(state.userInfo))
		localStorage.setItem("x-auth-token", JSON.stringify(state.token))
		localStorage.setItem("x-auth-secret", JSON.stringify(state.secret))
	},
	
	...C(types.TIMELINE, {
		SUCCESS: (state, res) => {
			state.timeline = res.data.data
		}
	}),

	...C(types.POST, {
		PENDING: (state, res) => {
			if (res.data) {
				state.post = false
			}
		},
		SUCCESS: (state, res) => {
			state.post = true
		}
	}),
}

export default mutations