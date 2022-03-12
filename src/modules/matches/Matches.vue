<template>
  <div>
    <div class="text-center bg-light border-bottom"  style="padding-top: 100px; padding-bottom: 30px;">
      <h1 class="mb-3">Matches</h1>

      <b-button v-on:click="createMatch()">Create Game</b-button>
      <b-button v-on:click="createMatch(true)">Start AI Match</b-button>
    </div>


    <h3>Active Matches</h3>
    <b-card-group deck class="matches-active">
      <b-container>
        <b-row v-for="(match, i) in activeMatches.content" v-bind:key="i">
          <b-col>
            <active-match v-bind="match"></active-match>
          </b-col>
        </b-row>
      </b-container>
    </b-card-group>

    <h3>Available Matches</h3>
    <b-card-group deck class="matches-available">
      <b-container>
        <b-row v-for="(match, i) in availableMatches.content" v-bind:key="i">
          <b-col>
            <active-match v-bind="match"></active-match>

          </b-col>
        </b-row>
      </b-container>
    </b-card-group>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ActiveMatch from "@/modules/matches/ActiveMatch";

export default {
  name: "login",
  components: {
    'active-match': ActiveMatch
  },
  data() {
    return {
      activeMatches: {content: []},
      availableMatches: {content: []}
    }
  },
  inject: [
    'matchesService'
  ],
  async created() {
    this.activeMatches = await this.matchesService.getActiveMatches();
    this.availableMatches = await this.matchesService.getAvailableMatches()
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

<style scoped>

h3 {
  margin-top: 50px;
}

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