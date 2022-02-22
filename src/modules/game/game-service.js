import axios from 'axios';
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import {store, localAuthRepository } from "@/main";



export default class GameService {
    constructor() {
        this.sock = new SockJS('https://lostcities.app/api/player-events/lost-cities')

        this.stomp = Stomp.over(this.sock)

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

    disconnect() {
        if (this.stomp !== null) {
            this.stomp.disconnect();
        }

        console.log("Disconnected");
    }

    listenForChanges(id, login) {
        this.stomp.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            this.stomp.subscribe(`/games-broker/${id}/${login}`, async (gamestate) => {
                await store._actions["gameInfo/reset"][0]()
                await store._actions["gameInfo/startLoading"][0]()
                let gameState = JSON.parse(gamestate.body)
                await store._actions["gameInfo/mergeGame"][0](gameState)
                await store._actions["gameInfo/doneLoading"][0]()

            });
        });
    }

    async retrieveGameState(id) {
        try {
            await store._actions["gameInfo/reset"][0]()
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