import axios from 'axios';

export default class AccountsService {
  constructor() {
    this.axios = axios.create({
      baseUrl: process.env.ACCOUNTS_API
    })
  }

  async login(loginForm) {
    if(!this._isValidLogin(loginForm)) {
      throw new Error("Invalid login.")
    }

    try {
      let response = await this.axios.post('/api/accounts/authenticate', loginForm)
      return response.data
    } catch(e) {
      console.dir(e)
      throw new Error("Unable to authenticate.")
    }
  }

  async register(registrationForm) {
    if(!this._isValidRegistration(registrationForm)) {
      throw new Error("Invalid registeration form.", {})
    }

    try {
      return this.axios.post(
          '/api/accounts/register',
          registrationForm
      )
    } catch(e) {
      throw new Error("Unable to register.", e)
    }
  }

  _isValidLogin(loginRequest) {
    return this.validateField(loginRequest.login) && 
            this.validateField(loginRequest.password);
  }

  _isValidRegistration(registrationForm) {
    return this.validateField(registrationForm.login) &&
            this.validateField(registrationForm.email) &&
            this.validateField(registrationForm.firstName) &&
            this.validateField(registrationForm.lastName) &&
            this.validateField(registrationForm.password)
  }


  validateField(field) {
    return typeof field === "string" && field.length > 2;
  }
}