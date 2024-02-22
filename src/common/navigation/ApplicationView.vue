<template>
  <b-container id="app" fluid>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/" router-link-active="active">Home</b-navbar-brand>
      <b-navbar-nav class="mr-auto">
        <b-nav-item to="/matches" router-link-active="active" v-if="isAuthenticated">Matches</b-nav-item>
        <b-nav-item to="/login" v-if="!isAuthenticated" router-link-active="active">Login</b-nav-item>
        <b-nav-item v-on:click="logout()" v-if="isAuthenticated">Logout</b-nav-item>
      </b-navbar-nav>
      <h1>asdf</h1>

      <b-nav-text>Logged in as: <strong>{{login}}</strong></b-nav-text>
    </b-navbar>
    <div>
      <notifications/>
      <slot></slot>
    </div>

    <footer>
      <p>Created by <a href="https://dereknelson.io">Derek Nelson</a></p>
    </footer>
  </b-container>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {

  computed: {
    ...mapGetters('accounts', ['isAuthenticated']),
    ...mapState('accounts', ['login'])
  },

  methods: {
    ...mapActions('accounts', ['logout'])
  }
};
</script>

<style>
.vue-notification {
  margin-top: 50px;
}
</style>

<style scoped>
  footer {
    margin-top:100px;
  }
</style>