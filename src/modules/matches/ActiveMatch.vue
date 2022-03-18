<template>
  <b-card>
    <div class="game-card-main">
      <b-card-title>
        Match {{id}}
        <span v-if="players.user2 === null"> - Waiting for opponent.</span>
        <b-icon
            icon="exclamation-circle-fill" variant="secondary"
            v-if="players.user2 !== null && login === currentPlayer" />
      </b-card-title>
      <b-card-text v-if="players.user1">
        <strong>Player 1:</strong> {{players.user1}}
        <b-icon icon="exclamation-circle-fill" variant="secondary" v-if="players.user1 === currentPlayer" />
      </b-card-text>
      <b-card-text v-if="players.user2">
        <strong>Player 2:</strong> {{players.user2}}
        <b-icon icon="exclamation-circle-fill" variant="secondary" v-if="players.user2 === currentPlayer" />
      </b-card-text>
      <b-card-text v-if="players.user2">
        <strong>Ready?:</strong> {{isReady}}
      </b-card-text>
    </div>
    <div class="game-card-action">
      <b-button-group vertical>
        <b-button v-if="isReady"
                  class="game-links play-btn"
                  variant="outline-primary"
                  :to="{ name: 'game', params: { id: id }}"
        >
          Play <b-icon-chevron-compact-right />
        </b-button>
        <b-button v-if="isReady"
                  class="game-links"
                  variant="outline-danger">
          Resign
        </b-button>
      </b-button-group>
    </div>

  </b-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ActiveMatch",
  props: {
    id: Number,
    isCompleted: Boolean,
    isReady: Boolean,
    isStarted: Boolean,
    currentPlayer: String,
    players: Object,
  },
  inject: [
    'matchesService'
  ],
  computed: {
    ...mapGetters('accounts', ['login']),
  },
  methods: {
    async join(id) {
      return await this.matchesService.join(id)
    },
  }
}
</script>

<style scoped>
  .card-body {
    display: flex;
    justify-content: space-between;
  }

  .game-card-main {
    text-align:left;
  }

  .game-card-action {
    line-height: 150px;
    height: 150px;
  }

  .play-btn {
    line-height:3em;
  }



</style>