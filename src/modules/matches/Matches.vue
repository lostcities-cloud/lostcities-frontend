<template>
  <div>
    <h1>Matches</h1>
    <b-button v-on:click="createMatch()">Create Game</b-button>
    <b-button v-on:click="createMatch(true)">Start AI Match</b-button>

    <b-card-group class="matches">
      <b-card class="text-left" v-for="(match, i) in matches" v-bind:key="i">
        <template #header>
          <h4 class="mb-0">Match {{match.id}}</h4>
        </template>
        <b-card-text v-if="match.players.user1">
          {{match.players.user1}}
        </b-card-text>
        <b-card-text v-if="match.players.user2">
          {{match.players.user2}}
        </b-card-text>

        <b-card-text v-if="match.players.user2">
          {{match.isReady}}
        </b-card-text>

        <b-card-text>
          {{ JSON.stringify(match) }}
        </b-card-text>



        <b-button v-if="match.isReady && isMyMatch(match)"
            class="game-links"
            variant="primary"
            :to="{ name: 'game', params: { id: match.id }}"
        >
          Play
        </b-button>
        <b-button v-if="match.isReady && isMyMatch(match)"
            class="game-links"
            variant="primary">
          Resign
        </b-button>

        <b-button v-if="canJoin(match)" v-on:click="join(match.id)"
            class="game-links"
            variant="primary"
        >
          Join
        </b-button>


      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "login",
  data() {
    return {
      matches: []
    }
  },
  inject: [
    'matchesService'
  ],
  created() {
    this.loadMatches()
  },

  computed: {
      ...mapState('accounts', ['login'])
  },

  methods: {
    ...mapActions('matches', ['getMatches']),

    async createMatch(ai=false) {
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

    async join(id) {
      let match = await this.matchesService.join(id)

      return match
    },

    async loadMatches() {
      this.matches = await this.matchesService.getMatches()
    },

    isMyMatch(match) {
      return match.players.user1 !== this.login
    },

    canJoin(match) {
      return match.players.populated === false &&
          match.players.user1 !== this.login
    }
  }

}
</script>

<style>

.matches {
  width:700px;
  margin: 20px auto;
}

.card {
  margin-bottom: 10px;
}

.game-links {
  margin-right: 10px;
}

</style>