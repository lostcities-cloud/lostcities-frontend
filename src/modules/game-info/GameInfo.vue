<template>
  <div class="game-info-view rounded">

    <div class="play">
      <p v-if="isPlayerTurn">
        It's your turn, make a play!
      </p>
      <p v-else>
        Waiting for <strong>{{activePlayer}}</strong>...
      </p>
      <div v-if="isPlayerTurn" style="min-height: 180px;">
        <h3>Pending</h3>
        <p v-if="!canUndo">No actions pending.</p>
        <ol style="margin-bottom:0;">
          <li v-if="turnCommands.playOrDiscard !== null">
            {{ commandText(turnCommands.playOrDiscard) }}
          </li>
          <li v-if="turnCommands.draw !== null">
            {{ commandText(turnCommands.draw) }}
          </li>
        </ol>
        <b-button v-if="canUndo" v-on:click="undo">
          Undo
        </b-button>
        <b-button v-if="canSendTurnCommands" v-on:click="sendCommandTurn">
          Commit
        </b-button>


      </div>

    </div>

    <div class="game-logs">
      <h3>Logs</h3>

      <div v-for="(log, i) in logs" :key="i" class="log">
        <strong>{{log.player}}</strong>: {{log.message}}
      </div>
    </div>

  </div>
</template>

<script>

import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "game-info",

  data() {
    return {}
  },

  inject: [
    'gamesService'
  ],

  computed: {
    ...mapState('accounts', ['login']),
    ...mapGetters('gameInfo', [
        'logs',
        'canUndo',
        'canSendTurnCommands',
        'isPlayerTurn',
        'activePlayer',
        'turnCommands',
    ])
  },
  methods: {
    commandText(command) {
      if(command.type === 'PLAY') {
        return `Play ${command.card}`;
      } else if(command.type === 'DISCARD') {
        return `Discard ${command.card}`;
      } else if(command.type === 'DRAW' && command.color) {
        return `Draw from ${command.color.toLowerCase()}.`;
      } else {
        return 'Draw from deck.'
      }
    },
    sendCommandTurn() {
      this.gamesService.playCommand(this.$route.params.id, this.turnCommands)
      console.dir(this.turnCommands)
    },
    ...mapActions('gameInfo', [
        'undo'
    ])
  }
}
</script>


<style scoped>
.game-info-view {
  height: 500px;
  min-width: 200px;
  background-color: #ececec;;
  padding: 1em;
}

</style>