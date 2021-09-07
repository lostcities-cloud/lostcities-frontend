import axios from 'axios';

export default class AccountsService {
  constructor() {
    this.axios = axios.create({
      baseUrl: process.env.ACCOUNTS_API,
      timeout: 2000
    })
  }

  async login(loginForm) {
    if(!this._isValidLogin(loginForm)) {
      throw new Exception("Invalid login.", {})
    }

    try {
      let response = await this.axios.post('/authenticate', loginForm)
      return response.body
    } catch(e) {
      throw new Exception("Unable to authenticate.", e)
    }
    
  }

  async register(registrationForm) {
    if(!this._isValidRegistration(registrationForm)) {
      throw new Exception("Invalid registeration form.", {})
    }

    try {
      return this.axios.post(
          '/register',
          registrationForm
      )
    } catch(e) {
      throw new Exception("Unable to register.", e)
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
            this.validateField(registrationForm.lastname) &&
            this.validateField(registrationForm.password)
  }


  validateField(field) {
    return typeof field === "String" && field.length > 2;
  }
}