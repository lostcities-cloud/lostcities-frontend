<template>
  <div>

    <div class="text-center bg-light border-bottom"  style="padding-top: 100px; padding-bottom: 30px;">
      <h1 class="mb-3">Matches</h1>

      <b-button v-on:click="createMatch()">Create Game</b-button>
      <b-button v-on:click="createMatch(true)">Start AI Match</b-button>
    </div>

    <b-container style="margin-top: 50px;">
      <b-card-group deck class="matches">
        <b-row v-for="(match, i) in matches" v-bind:key="i">
          <b-card class="text-left">
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
        </b-row>
      </b-card-group>
    </b-container>
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

}

.card {
  margin-bottom: 10px;
}

.game-links {
  margin-right: 10px;
}

</style>