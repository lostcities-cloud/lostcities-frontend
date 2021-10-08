<template>
  <div>
    <h1>Game {{$route.params.id}}</h1>
  </div>
</template>

<script>


import { mapState } from "vuex";

export default {
  name: "game",
  data() {
    return {
      game: {}
    }
  },
  //inject: [
  //
  //],
  created() {
    debugger;
    console.dir(this.$route.params.id)
  },

  computed: {
    ...mapState('accounts', ['login'])
  }


}
</script>

<style>

</style>