import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import userStore from './modules/userStore'
import createPersistedState from 'vuex-persistedstate';
import { mapState } from 'vuex';

Vue.use(Vuex)

const instance = axios.create({
	baseURL: 'http://localhost:8081/',
})

Vue.prototype.$axios = instance;

instance.interceptors.request.use(
	(config) => {
	  // 토큰을 로컬 스토리지 또는 Vuex 스토어에서 가져옵니다.
	  const { token } = mapState('userStore', [token]); // 로컬 스토리지에서 토큰 가져오기
  
	  console.log(token);
	  // 헤더에 토큰을 추가합니다.
	  if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	  }
  
	  return config;
	},
	(error) => {
	  return Promise.reject(error);
	}
  );
// 스낵바 설정
export const SET_SNACKBAR = 'SET_SNACKBAR'

export default new Vuex.Store({
	namespaced: true,
	state: {
		sb: {
			show: false,
			msg: '',
			color: '',
		},
	},
	mutations: {
		[SET_SNACKBAR](state, sb) {
			state.sb = sb
		},
	},
	actions: {},
	modules: {
		userStore,
	},
	plugins: [createPersistedState({
        paths: ["userStore"]
    })]
})
