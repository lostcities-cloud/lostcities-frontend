import axios from 'axios';
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import {store, localAuthRepository } from "@/main";
import Vue from "vue";



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

    disconnect() {
        if (this.stomp !== null) {
            this.stomp.disconnect();
        }

        console.log("Disconnected");
    }

    listenForChanges(id, login) {
        this.sock = new SockJS('/api/player-events/lost-cities')

        this.stomp = Stomp.over(this.sock)

        this.stomp.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            this.stomp.subscribe(`/games-broker/${id}/${login}`, async (gamestate) => {
                let gameState = JSON.parse(gamestate.body)
                await store._actions["gameInfo/reset"][0]()
                await store._actions["gameInfo/mergeGame"][0](gameState)
            });

            this.stomp.subscribe(`/games-broker/${id}/${login}/errors`, async (errorResponse) => {
                let errorMessage = JSON.parse(errorResponse.body)
                Vue.notify({
                    text: errorMessage.error,
                    type: 'success'
                })
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
            let playOrDiscard = Object.assign({}, command.playOrDiscard)
            playOrDiscard.card = playOrDiscard.card.id

            let draw = Object.assign({}, command.draw);

            await store._actions["gameInfo/startLoading"][0]()
            let response = await this.axios.patch(`/api/gamestate/${id}`, {playOrDiscard, draw})
            await store._actions["gameInfo/doneLoading"][0]()

            return response.data
        } catch(e) {
            throw new Error("Unable to get game.")
        }
    }

}