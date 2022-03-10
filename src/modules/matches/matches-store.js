import {matchesService} from "@/main";
import Vue from 'vue'


function state() {
    return {}
}

const getters = {
}

const mutations = {

}

const actions = {
    async getMatches() {
        try {
            return matchesService.getMatches(true)
        } catch (e) {
            Vue.notify({
                text: 'Unable to create match.',
                type: 'error'
            })
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