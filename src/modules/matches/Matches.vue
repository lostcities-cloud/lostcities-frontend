<template>
  <div class="container">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
      <div class="col col-lg-3 text-bg-light rounded text-center mb-4 pb-3" >

        <user-avatar :name="this.login" :size="150"></user-avatar>
        <p>{{this.login}}</p>
        <div class="list-group list-group-flush border-bottom scrollarea ">
          <a v-on:click="createMatch(true)" role="button" class="list-group-item list-group-item-action py-3 lh-sm text-bg-secondary" aria-current="true">
            Create Ranked match
          </a>
          <a v-on:click="createMatch()" role="button" class="list-group-item list-group-item-action py-3 lh-sm text-bg-secondary" aria-current="true">
            Create AI match
          </a>
          <a v-on:click="resendMatches()" role="button" class="list-group-item list-group-item-action py-3 lh-sm text-bg-secondary" aria-current="true">
            Resend Matches
          </a>
        </div>
      </div>
      <div class="col col-lg-9">
        <div class="container-fluid ">
          <div class="row">
            <div class="col">
              <LoadingGameCard v-bind:is-loading="loadingActiveMatches" />
            </div>
          </div>

          <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-3 g-2">

            <div class="col" v-for="(match, i) in activeMatches.content" v-bind:key="i">
              <div class="text-center text-bg-light card match-card" >
                <div class="card-header">
                  <user-avatar :name="getOpponentName(match)" :size="60"></user-avatar>
                  <h5 class="card-title">{{getOpponentName(match)}}</h5>
                  <button type="button" class="btn-close text-bg-light" aria-label="Close" v-on:click="concede(match)"></button>
                </div>
                <p><strong>Rank:</strong> <span>1000</span></p>
                <p><strong>Turn:</strong> <span>{{ match.currentPlayer }}</span></p>
                <button type="button" class="btn btn-outline-success" v-on:click="openGame(match)">Play <i class="bi bi-play"></i></button>
              </div>
            </div>

          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-4">
            <nav aria-label="pagination">
              <ul class="pagination">
                <li class="page-item"><button class="page-link btn-primary" href="#">Previous</button></li>
                <li class="page-item"><button class="page-link btn-primary" href="#">1</button></li>
                <li class="page-item"><button class="page-link btn-primary" href="#">2</button></li>
                <li class="page-item"><button class="page-link btn-primary" href="#">3</button></li>
                <li class="page-item"><button class="page-link btn-primary" href="#">Next</button></li>
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import UserAvatar from "@/common/UserAvatar.vue";
import LoadingGameCard from "@/modules/matches/LoadingGameCard.vue";

export default {
    name: "matches",
    components: {
      LoadingGameCard,
      UserAvatar

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

        getOpponentName(match) {
          if (match.players.user1 === this.login) {
            return match.players.user2
          } else {
            return match.players.user1
          }
        },

        openGame(match) {
          this.$router.push({ name: 'game', params: { id: match.id }})
        },
        concede(match) {
          console.log(match.id)
          this.$notify({
            text: 'Conceding matches is currently not supported.',
            type: 'warning'
          })
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

.match-card {
  position:relative;
}

.match-card .btn-close {
  position: absolute;
  top: 10px;
  left: 10px;
}

.match-card .btn-play {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0 0.25em;
  //width: 1em;
  //height: 1em;
  //padding: 0.25em 0.25em;
}
</style>
