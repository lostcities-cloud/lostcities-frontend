import axios from 'axios';
import {localAuthRepository} from "@/main";

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
            let response = await this.axios.get(`/api/gamestate/${id}`)
            return response.data
        } catch(e) {
            throw new Error("Unable to get game.")
        }
    }

}