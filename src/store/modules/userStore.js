import router from '@/router'
import jwt from 'jsonwebtoken'

const state = {
    userId: null,
    token: null 
}

const mutations = {
       login: function (state, token) {
            try{
                console.log(token) 
                const decodedToken = jwt.decode(token, { complete: true})
                state.userId = decodedToken.payload.sub
                state.token = token 
            } catch(error){
                 console.error('JWT error : ', error)
            }
            console.log(state.userId)
       },
       logout: function(state){
            state.userId = null
            state.token = null
            router.push("/signIn");
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

export default {
    namespaced: true,
    state,
    mutations
}
