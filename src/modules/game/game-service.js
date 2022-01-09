import axios from 'axios';
import {store, localAuthRepository } from "@/main";



export default class GameService {
    constructor() {
        this.axios = axios.create({
            baseUrl: process.env.GAME_API,
            timeout: 2000

        })

        this.axios.interceptors.request.use(function (config) {
            if (localAuthRepository.isAuthenticated()) {
                config.headers.common.Authorization = `Bearer ${localAuthRepository.get().token}`
            } else {
                config.headers.common.Authorization = null;
            }

            return config;
        }, function (error) {
            console.log(error);
            return Promise.reject(error);
        })
    }

    async retrieveGameState(id) {
        try {
            await store._actions["gameInfo/startLoading"][0]()
            let response = await this.axios.get(`/api/gamestate/${id}`)
            this.store = store;
            await store._actions["gameInfo/mergeGame"][0](response.data)
            await store._actions["gameInfo/doneLoading"][0]()

            return response.data
        } catch(e) {
            throw new Error("Unable to get game.")
        }
    }

    async playCommand(id, command) {
        try {
            await store._actions["gameInfo/startLoading"][0]()
            let response = await this.axios.patch(`/api/gamestate/${id}`, command)
            await store._actions["gameInfo/mergeGame"][0](response.data)
            await store._actions["gameInfo/doneLoading"][0]()
            return response.data
        } catch(e) {
            throw new Error("Unable to get game.")
        }
    }

}