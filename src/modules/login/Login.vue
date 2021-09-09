<template>
  <b-form @submit="doLogin">
    <b-form-group label="Login" label-for="login" label-size="sm">
      <b-form-input id="login" v-model="loginForm.login"></b-form-input>
    </b-form-group>
    <b-form-group label="Password" label-for="password" label-size="sm">
      <b-form-input type="password" id="password" v-model="loginForm.password"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-checkbox v-model="loginForm.rememberMe" id="remember-me">
        Remember Me
      </b-form-checkbox>
    </b-form-group>
    <b-button variant="outline-primary" type="submit">
      Login
    </b-button>
    <p>
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "login",
  data: function () {
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

      let isAuthenticated = await this.login({loginForm: this.loginForm});

      if(isAuthenticated) {
        return this.$router.push({path: "/"});
      } else {
        this.$notify('Unable to login!')
      }
    }
  }
};
</script>