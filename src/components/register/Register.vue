<template>
  <b-form>
    <b-row>
      <b-col>
        <b-form-group>
          <b-form-input id="first-name" v-model="firstName" placeholder="First Name"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <b-form-input id="last-name" v-model="lastName" placeholder="Last Name"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-form-group>
      <b-form-input id="login" v-model="login" placeholder="Login"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input id="email" v-model="email" placeholder="Email"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input id="password" type="password" v-model="password" placeholder="Password"></b-form-input>
    </b-form-group>
    <b-button variant="outline-primary" class="btn-block">Register</b-button>
  </b-form>
</template>

<script>
import AccountsService from "../../common/accounts-service";

let accountsService = new AccountsService();

export default {
  name: "login",
  data: function () {
    return {
      login: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
        accountsService
    }
  }
};
</script>