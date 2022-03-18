<template>
  <b-card class="text-left" style="margin-bottom:10px;">
    <div class="game-card-main">

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
        <b-button v-on:click="join(id)"
                  class="game-links"
                  variant="primary"
        >
          Join
        </b-button>
      </b-button-group>
    </div>
  </b-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AvailableMatch",
  props: {
    id: Number,
    isCompleted: Boolean,
    isReady: Boolean,
    isStarted: Boolean,
    players: Object,
  },
  computed: {
    ...mapGetters('accounts', ['login']),
  },
  inject: [
    'matchesService'
  ],
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
</style>