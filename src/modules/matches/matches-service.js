import axios from 'axios';
import {localAuthRepository} from "@/main";

export default class MatchesService {
  constructor() {
    this.axios = axios.create({
      baseUrl: process.env.MATCHES_API,
      timeout: 2000

    })

    this.axios.defaults.trailingSlash = false;

    this.axios.interceptors.request.use(function (config) {
      if(localAuthRepository.isAuthenticated()) {
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

  async create(isAi) {
    let url = `/api/matches`

    try {
      let response = await this.axios.post(url, {isAi: !!isAi})
      return response.data
    } catch(e) {
      throw new Error("Unable to create match.")
    }
  }

  async createBatchAiMatches(count=1000) {
    let url = `/api/matches/admin/ai/matches`

    try {
      let response = await this.axios.post(url, {isAi: true, count: count})
      return response.data
    } catch(e) {
      throw new Error("Unable to create match.")
    }
  }

  async join(id) {
    try {
      let response = await this.axios.patch(`/api/matches/${id}`)
      return response.data
    } catch(e) {
      throw new Error("Unable to create match.")
    }
  }

  async getActiveMatches() {
    try {
      let response = await this.axios.get('/api/matches/active')
      return response.data
    } catch(e) {
      throw new Error("Unable to get matches.")
    }
  }

  async getAvailableMatches() {
    try {
      let response = await this.axios.get('/api/matches/available')
      return response.data
    } catch(e) {
      throw new Error("Unable to get matches.")
    }
  }

  async resendMatches() {
    try {
      return await this.axios.get('/api/matches/resend')

    } catch(e) {
      throw new Error("Unable to get matches.")
    }
  }
}
