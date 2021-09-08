<template>
  <div id="app">
      <b-navbar type="dark" variant="dark" fixed="top">
        <b-navbar-brand to="/">Home</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item to="/matches" v-if="isAuthenticated">Matches</b-nav-item>
          <b-nav-item to="/login" v-if="!isAuthenticated">Login</b-nav-item>
          <b-nav-item v-on:click="logout()" v-if="isAuthenticated">Logout</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <div>
        <slot />
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {

  computed: {
    ...mapGetters('accounts', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('accounts', ['logout'])
  }
};
</script>