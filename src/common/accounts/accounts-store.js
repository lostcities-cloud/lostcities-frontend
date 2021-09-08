import AccountsService from "@/common/accounts/accounts-service";

const accountsService = new AccountsService();

function state() {
    return {
        isAuthenticated: false,
        login: null,
        token: null
    }
}

const getters = {

}

const mutations = {
    loginMutation(state, loginResponse) {
        state.isAuthenticated = true;
        state.login = loginResponse.login;
        state.token = loginResponse.token;
    },
    emptyMutation() {
        // Do nothing
    }
}

const actions = {
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