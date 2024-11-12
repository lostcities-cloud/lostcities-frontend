<template>
  <div>
    <div class="text-center bg-light border-bottom"  style="padding-top: 100px; padding-bottom: 30px;">
      <h1 class="mb-3">Matches</h1>

      <button v-on:click="createMatch()">Create Game</button>
      <button v-on:click="createMatch(true)">Start AI Match</button>
      <button v-on:click="resendMatches()">Resend Matches</button>
    </div>


    <h3>Active Matches</h3>
    <b-card-group deck class="matches-active">
      <b-container>
        <b-row>
            <b-card class="text-center" :class="{textCenter: true, hide: !loadingAvailableMatches}" style="margin-bottom:10px;">
                <div class="game-card-main" style="min-height: 250px;">

                    <div class="loading"  style="margin: 3em auto;"></div>
                </div>
            </b-card>
        </b-row>
        <b-row v-for="(match, i) in activeMatches.content" v-bind:key="i">
            <b-col>
                <active-match class="card-item" v-bind="match"></active-match>
            </b-col>
        </b-row>
      </b-container>
    </b-card-group>

    <h3>Available Matches</h3>
    <b-card-group deck class="matches-available">
      <b-container v-if="loadingAvailableMatches">
          <b-row>
              <b-card class="text-center" style="margin-bottom:10px;">
                  <div class="game-card-main" style="min-height: 250px;">

                    <div class="loading"  style="margin: 3em auto;"></div>
                  </div>
              </b-card>
        </b-row>
      </b-container>
      <b-container v-else>
        <b-row v-for="(match, i) in availableMatches.content" v-bind:key="i">
          <b-col>
            <available-match class="card-item"  v-bind="match"></available-match>

          </b-col>
        </b-row>
      </b-container>
    </b-card-group>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ActiveMatch from "@/modules/matches/ActiveMatch";
import AvailableMatch from "@/modules/matches/AvailableMatch";

export default {
  name: "login",
  components: {
    ActiveMatch,
    AvailableMatch

  },
  data() {
    return {
      loadingActiveMatches: true,
      activeMatches: {content: []},
      loadingAvailableMatches: true,
      availableMatches: {content: []}
    }
  },
  inject: [
    'matchesService'
  ],
  async created() {
      return this.loadMatches()
  },

  computed: {
    ...mapGetters('accounts', ['login']),
  },

  methods: {
    ...mapActions('matches', ['getMatches']),
    async loadMatches() {
        this.loadingActiveMatches = true
        this.loadingAvailableMatches = true
        this.activeMatches = {content: []};
        this.activeMatches = await this.matchesService.getActiveMatches();
        this.loadingActiveMatches = false
        this.availableMatches = {content: []};
        this.availableMatches = await this.matchesService.getAvailableMatches()

        this.loadingAvailableMatches = false
    },
    async resendMatches() {
      return this.matchesService.resendMatches()
    },

    async createMatch(ai=false) {
      try {
        await this.matchesService.create(ai)
        this.$notify({
          text: 'Created match!',
          type: 'success'
        })

        return this.loadMatches()
      } catch (e) {
        this.$notify({
          text: 'Unable to create match.',
          type: 'error'
        })
      }
    },

    async join(id) {
      await this.matchesService.join(id)
      return this.loadMatches()
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

.hide {
    animation: hide 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;
    opacity: 100;
    transform: none;
    transform-origin: top center;
}

.card-item {
  margin-bottom: 10px;
  animation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;

  opacity: 1;

  transform: rotateX(-90deg);
  transform-origin: top center;
}

@keyframes show {
    100% {
        opacity: 1;
        transform: none;
    }
}

@keyframes hide {
    100%  {
        transform: rotateX(-90deg);
        height:0;
    }
}

.game-links {
  margin-right: 10px;
}

</style>
