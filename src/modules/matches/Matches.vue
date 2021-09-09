<template>
  <div>
    <h1>Matches</h1>
    <b-button v-on:click="createMatch()">Create Game</b-button>
    <b-button v-on:click="createMatch(true)">Start AI Match</b-button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "login",
  data() {
    return {}
  },
  inject: [
    'matchesService'
  ],
  methods: {
    ...mapActions('matches', ['getMatches']),

    async createMatch(ai=false) {
      debugger;
      try {
        const createdMatch = await this.matchesService.create(ai)
        this.$notify({
          text: 'Created match!',
          type: 'success'
        })
        await this.$router.go();
        return createdMatch
      } catch (e) {
        this.$notify({
          text: 'Unable to create match.',
          type: 'error'
        })
      }
    },

  }

}
</script>