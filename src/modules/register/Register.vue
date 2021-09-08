<template>
  <b-form>
    <b-row>
      <b-col>
        <b-form-group>
          <b-form-input id="first-name" v-model="registrationForm.firstName" placeholder="First Name"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <b-form-input id="last-name" v-model="registrationForm.lastName" placeholder="Last Name"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-form-group>
      <b-form-input id="login" v-model="registrationForm.login" placeholder="Login"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input id="email" v-model="registrationForm.email" placeholder="Email"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input id="password" type="password" v-model="registrationForm.password" placeholder="Password"></b-form-input>
    </b-form-group>
    <b-button variant="outline-primary" class="btn-block" v-on:click="doRegister()">
      Register
    </b-button>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "login",
  data: function () {
    return {
      registrationForm: {
        login: "",
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions('accounts', ['register']),
    async doRegister() {
      try {
        await this.register({registrationForm: this.registrationForm});
        return this.$router.push({path: "/login"});
      } catch(e) {
        //Handle
      }
    }

  }
};
</script>