<template>
  <div>

    <div class="text-center bg-light border-bottom"  style="padding-top: 100px; padding-bottom: 30px;">
      <h1 class="mb-3">Matches</h1>

      <b-button v-on:click="createMatch()">Create Game</b-button>
      <b-button v-on:click="createMatch(true)">Start AI Match</b-button>
    </div>

    <b-card-group deck class="matches">
      <b-container style="margin-top: 50px;">
        <b-row v-for="(match, i) in matches" v-bind:key="i">
          <b-col>

            <b-card class="text-left" style="margin-bottom:10px;">
              <template #header>
                <h4 class="mb-0">
                  Match {{match.id}}
                  <span v-if="match.players.user2 === null"> - Waiting for opponent.</span>
                  <b-icon
                      icon="exclamation-circle-fill" variant="secondary"
                      v-if="match.players.user2 !== null && login == match.currentPlayer" />
                </h4>
              </template>
              <b-card-text v-if="match.players.user1">
                <strong>Player 1:</strong> {{match.players.user1}}
                <b-icon icon="exclamation-circle-fill" variant="secondary" v-if="match.players.user1 == match.currentPlayer" />
              </b-card-text>
              <b-card-text v-if="match.players.user2">
                <strong>Player 2:</strong> {{match.players.user2}}
                <b-icon icon="exclamation-circle-fill" variant="secondary" v-if="match.players.user2 == match.currentPlayer" />
              </b-card-text>
              <b-card-text v-if="match.players.user2">
                <strong>Ready?:</strong> {{match.isReady}}
              </b-card-text>

              <b-button-group>
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
              </b-button-group>

            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-card-group>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

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
    ...mapGetters('accounts', ['login']),
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
      let matches = await this.matchesService.getMatches()

      console.dir(matches)



      this.matches = matches;
    },

    isMyMatch(match) {
      return match.players.user1 === this.login || match.players.user2 === this.login
    },

    canJoin(match) {
      return match.players.populated === false &&
          match.players.user1 !== this.login
    }
  }

}
</script>

<style>

.btn-group .btn {
  position:relative;
  top: 0;
  margin-right: 0;
}

.matches {

}

.card {
  margin-bottom: 10px;
}

.game-links {
  margin-right: 10px;
}

</style>