import AccountsService from "@/common/accounts/accounts-service";
import LocalAuthRepository from "@/common/accounts/local-auth-repository";
import { router } from "@/main";
import Vue from 'vue'

const localAuthRepository = new LocalAuthRepository();
const accountsService = new AccountsService();



function emptyState() {
    return {
        isAuthenticated: false,
        login: null,
        token: null
    }
}

function state() {
    if(!localAuthRepository.isAuthenticated()) {
        return emptyState()
    }

    const auth = localAuthRepository.get()

    return {
        isAuthenticated: true,
        login: auth.login,
        token: auth.token
    }
}

const getters = {
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    login(state) {
        return state.login
    }
}

const mutations = {
    loginMutation(state, loginResponse) {
        state.isAuthenticated = true;
        state.login = loginResponse.login;
        state.token = loginResponse.token;

        localAuthRepository.store(state)
    },

    logoutMutation(state) {
        state.isAuthenticated = false;
        state.login = null;
        state.token = null;
        localAuthRepository.clear();
    },

    emptyMutation() {
        // Do nothing
    }
}

const actions = {
    logout({commit}) {
        commit('logoutMutation')
        Vue.notify('Logged out.')
        router.go();
    },
    async login({commit}, request) {
        try {
            const loginResponse = await accountsService.login(request.loginForm)
            commit('loginMutation', loginResponse)
            Vue.notify({
                text: 'Successful login!',
                type: 'success'
            })
            return await router.push({path: "/"});
        } catch (e) {
            Vue.notify({
                text: 'Unable to login with credentials!',
                type: 'error'
            })
        }
    },
    
    async register({commit}, request) {
        try {
            await accountsService.register(request.registrationForm)
            commit()
            Vue.notify({
                text: 'Registration successful.',
                type: 'success'
            })
            return router.push({path: "/login"});
        } catch (e) {
            if(e.response.statusText) {
                Vue.notify({
                    text: 'A user with this email or login already exists.',
                    type: 'error'
                })
            } else {
                Vue.notify({
                    text: 'Unable to register.',
                    type: 'error'
                })
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}