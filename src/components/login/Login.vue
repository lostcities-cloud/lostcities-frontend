<template>
  <b-form>
    <b-alert v-if="showError" show dismissible fade>Dismissible Alert!</b-alert>
    <b-form-group label="Login" label-for="login" label-size="sm">
      <b-form-input id="login" v-model="loginForm.login"></b-form-input>
    </b-form-group>
    <b-form-group label="Password" label-for="password" label-size="sm">
      <b-form-input type="password" id="password" v-model="loginForm.password"></b-form-input>
    </b-form-group>
    <b-form-group label="Remember Me" label-for="remember-me" label-size="sm">
      <b-form-checkbox v-model="loginForm.rememberMe" id="remember-me"></b-form-checkbox>
    </b-form-group>
    <b-button variant="outline-primary" v-on:click="doLogin()">
      Login
    </b-button>
    <p>
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </b-form>
</template>

<script>
import AccountsService from "../../common/accounts-service";
let accountsService = new AccountsService();

export default {
  name: "login",
  data: function () {
    return {
      showError,
      loginForm: {
        login: "",
        password: "",
        rememberMe: false,
      }
    };
  },
  methods: {
    async doLogin() {
      try {
        await accountsService.login(
          this.loginForm
        );

        this.$router.push({ path: "/" });
      } catch (e) {
        this.showError = true;
      }
    }
  }
};
</script>