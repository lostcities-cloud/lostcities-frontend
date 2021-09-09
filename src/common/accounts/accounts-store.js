import AccountsService from "@/common/accounts/accounts-service";
import LocalAuthRepository from "@/common/accounts/local-auth-repository";
import { router } from "@/main";

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
        router.go();
    },
    async login({commit}, request) {
        try {
            const loginResponse = await accountsService.login(request.loginForm)
            commit('loginMutation', loginResponse)
            return true;
        } catch (e) {
            return false;
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