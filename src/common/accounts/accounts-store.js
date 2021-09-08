import AccountsService from "@/common/accounts/accounts-service";
import LocalAuthRepository from "./local-auth-service";

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
        return commit('logoutMutation')
    },
    async login({commit}, request) {
        debugger;
        try {
            const loginResponse = await accountsService.login(request.loginForm)
            commit('loginMutation', loginResponse)
        } catch (e) {
            // Do Something
        }
    },
    
    async register({commit}, request) {
        await accountsService.register(request.registrationForm)
        return commit()
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}