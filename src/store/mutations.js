import * as types from './types.js'

export default {
	[types.LOGIN](state, data){
		console.log('in')
		state.userInfo = data.userInfo
		state.token = data['x-auth-token']
		state.secret = data['x-auth-secret']
		state.login = true
		localStorage.setItem("userInfo", JSON.stringify(state.userInfo))
		localStorage.setItem("x-auth-token", JSON.stringify(state.token))
		localStorage.setItem("x-auth-secret", JSON.stringify(state.secret))
	},
	[types.TO_LOGIN](state, { oa_link }){
		location.href = `${oa_link}http://${location.host}/login`
		// state.isLogin = true;
		// state.route = {
		//     path: '/login_callback',
		//     query: null,
		//     params: null
		// }
		// state.route.path = '/login_callback'
	},

	[types.TIMELINE](state, data) {
		state.timeline = data
	},
}