<template>
<div>
  <div class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="navbar-inner">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <a href="/" class="nav-link" >Matches</a>
          </li>

          <li class="nav-item"><a class="nav-link" href="/login" v-if="!isAuthenticated" >Login</a></li>
          <li class="nav-item"><a class="nav-link" v-on:click="logout()" v-if="isAuthenticated" type="button">Logout</a></li>
          <li class="nav-item"><span class="nav-link disabled">Logged in as: <strong>{{login}}</strong></span></li>
        </ul>
      </div>
    </div>
  </div>
  <div id="app" class="container-fluid">
    <div>
      <notifications/>
      <slot />
    </div>

    <footer>
      <p>Created by <a href="https://dereknelson.io">Derek Nelson</a></p>
    </footer>
  </div>
</div>
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
