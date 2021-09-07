import axios from 'axios';

export default class AccountsService {
  constructor() {
    this.axios = axios.create({
      baseUrl: process.env.ACCOUNTS_API,
      timeout: 2000
    })
  }

  async login(login, password, rememberMe) {
    return this.axios.post('/authenticate', {login, password, rememberMe})
  }

  async register(login, email, password, firstName, lastName) {
    return this.axios.post(
        '/register',
        {login, email, password, firstName, lastName}
    )
  }
}