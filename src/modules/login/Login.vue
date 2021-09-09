<template>
  <b-form @submit="doLogin">
    <b-form-group>
      <b-form-input id="login" v-model="loginForm.login" placeholder="Login"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input type="password" id="password" v-model="loginForm.password" placeholder="Password">
      </b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-checkbox v-model="loginForm.rememberMe" id="remember-me">
        Remember Me
      </b-form-checkbox>
    </b-form-group>
    <b-button variant="btn btn-block btn-outline-primary" type="submit">
      Login
    </b-button>
    <p class="registration">
      <small>
        Don't have an account?
        <router-link class="font-weight-bold" to="/register">Register</router-link>
      </small>
    </p>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "login",
  data() {
    return {
      showError: false,
      loginForm: {
        login: "",
        password: "",
        rememberMe: false,
      }
    };
  },
  methods: {
    ...mapActions('accounts', ['login']),
    async doLogin(event) {
      event.preventDefault()
      return this.login({loginForm: this.loginForm});
    }
  }
};
</script>

<style>
.registration {
  margin: 30px auto 0;
  text-align: center;
}
</style>