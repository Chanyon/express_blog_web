import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		image:[],
	},

	mutations:{
		setImage(state,payload){
			state.image = payload;
		}
	},

	actions: {

	},

	getters:{
		dorandomImage(state){
			let imagelen = state.image.length;
			let rand = Math.floor(Math.random() * (imagelen - 0)) + 0;
			return state.image[rand].imageurl;
		}
	}

})