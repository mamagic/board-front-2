import axios from 'axios'
import Vue from 'vue'
import userStore from '../store/modules/userStore';

const instance = axios.create({
	baseURL: 'http://localhost:8081/',
})

Vue.prototype.$axios = instance;

instance.interceptors.request.use(
	(config) => {
	  const data = JSON.parse(localStorage.getItem('vuex'));
	  const token = data.userStore.token;

	  console.log(token);

	  if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	  }
  
	  return config;
	},
	(error) => {
	  return Promise.reject(error);
	}
  );

/**
 * 게시글 목록 조회
 * @param {*} params
 */
function getBoardListAPI(params) {
	return instance.get('/board/list', params)
}

/**
 * 게시글 상세 조회
 * @param {*} params
 */
function getBoardDetailAPI(params) {
	return instance.get('/board/detail', params)
}

/**
 * 게시글 작성
 * @param {*} params
 */
function insertBoardAPI(params) {
	return instance.post('/board/insert',params,
						{ headers: {
							'Content-Type': 'application/json' 
	  					}})
}

/**
 * 게시글 수정
 * @param {*} params
 */
function updateBoardAPI(params) {
	return instance.post('/board/update', params)
}

/**
 * 게시글 삭제
 * @param {*} params
 */
function deleteBoardAPI(params) {
	return instance.post('/board/delete',params)
}

/**
 * 댓글 작성
 * @param {*} params
 */
function insertReplyAPI(params) {
	return instance.post('/board/reply/insert', params)
}

/**
 * 댓글 조회
 * @param {*} params
 */
function getReplyListAPI(params) {
	return instance.get('/board/reply/list', params)
}

/**
 * 댓글 수정
 * @param {*} params
 */
function updateReplyAPI(params) {
	return instance.post('/board/reply/update', params)
}

/**
 * 댓글 삭제
 * @param {*} params
 */
function deleteReplyAPI(params) {
	return instance.post('/board/reply/delete', params)
}

export {
	getBoardListAPI,
	getBoardDetailAPI,
	insertBoardAPI,
	updateBoardAPI,
	deleteBoardAPI,
	insertReplyAPI,
	getReplyListAPI,
	updateReplyAPI,
	deleteReplyAPI,
}
