import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const userStore = new Vuex.Store({
    namespaced: true,
    state: {
        //userId: '',
        //userName: '',
        token: null 
    },
    mutations: {
        login: function (state, token) {
            console.log(token)
            //state.userId = payload.userId
            //state.userName = payload.userName
            state.token = token 
        },
        loginCheck: function (state) {
            if (!state.token) {
                router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        }

    }
})

export default userStore