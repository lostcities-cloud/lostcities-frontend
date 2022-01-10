<template>
  <div class="game-view">


    <div style="display: block;" >
      <div class="game-board" >
        <play-area></play-area>
      </div>

      <div class="game-middle">
        <discard-piles v-on:draw-from-discard="drawFromDiscard"></discard-piles>
        <card-deck v-on:draw-from-deck="drawFromDeck"></card-deck>
      </div>

      <div class="card-hand" style="z-index: 10000;">
        <game-card
            v-for="(card) in sortedHand()"
            :key="card.id"
            v-bind:id="card.id"
            v-bind:color="card.color"
            v-bind:value="card.value"
            v-bind:is-multiplier="card.isMultiplier"
            v-bind:options="['Play', 'Discard']"
            v-on:card-option="handEvent"
        >
        </game-card>
      </div>



    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters, mapState} from "vuex";
import GameCard from "@/modules/game/cards/GameCard";
import CardDeck from "@/modules/game/cards/CardDeck";
import DiscardPiles from "@/modules/game/discard-area/DiscardPiles";
import PlayArea from "@/modules/game/play-area/PlayArea";


export default {
  name: "game",
  components: {
    PlayArea,
    "game-card": GameCard,
    "card-deck": CardDeck,
    "discard-piles": DiscardPiles,
  } ,
  data() {
    return {
      game: {
        type: Object,
        default: {
          hand: []
        }
      },
      loaded: false
    }
  },
  inject: [
    'gamesService'
  ],

  async created() {
    this.game = await this.loadGame()
  },

  computed: {
    ...mapState('accounts', ['login']),
    ...mapGetters('gameInfo', [
      'hand'
    ]),

  },
  methods: {
    async loadGame() {
      await this.gamesService.retrieveGameState(this.$route.params.id)
    },

    handEvent(event) {
      if(event.optionName === 'Play') {
        this.play(event.card)
      } else if(event.optionName === 'Discard') {
        this.discard(event.card)
      }
    },

    play(card) {
      let command = {type: "PLAY", card}
      console.log(`Play: ${JSON.stringify(command)}`)
      //this.exec(command)
      this.playCommand(command)
    },
    discard(card) {
      let command = {type: "DISCARD", card}
      console.log(`Discard: ${JSON.stringify(command)}`)
      //this.exec(command)
      this.discardCommand(command)
    },
    drawFromDeck() {
      let command = {type: "DRAW"}
      console.log(`Draw From Deck: ${JSON.stringify(command)}`)
      //this.exec(command)
      this.drawCommand(command)
    },
    drawFromDiscard(color) {
      let command = {type: "DRAW", color: color}
      console.log(`Draw From Discard: ${JSON.stringify(command)}`)
      //this.exec(command)
      this.drawCommand(command)
    },


    sortedHand() {
      let handByColor = this.hand.reduce((memo, card) => {
        // eslint-disable-next-line no-prototype-builtins
        if(!memo.hasOwnProperty(card.color)) {
          memo[card.color] = [card]
        } else {
          memo[card.color].push(card)
        }

        return memo;
      }, {})

      Object.values(handByColor).forEach( list => {
        list.sort((a, b) => a.value - b.value)
      })

      return [
        handByColor['YELLOW'],
        handByColor['BLUE'],
        handByColor['WHITE'],
        handByColor['GREEN'],
        handByColor['RED'],
      ].filter(x=> !!x).reduce((a, b) => a.concat(b), [])
    },

    ...mapActions('gameInfo', [
      'playCommand',
      'discardCommand',
      'drawCommand'
    ])
  }
}
</script>
<!--
Events

Play: {type: "play", card: "${card}"}
Discard: {type: "discard", card: "${card}"}

Draw From Deck: {type: "draw"}
Draw From Deck: {type: "draw", color: "YELLOW"}

-->

<style scoped>

.game-board {
  margin-left:15px;
  width: 655px;
}

.play-area-yellow, .play-area-blue, .play-area-white, .play-area-green, .play-area-red {
  height: 430px;
  width: 130px;
  display: inline-block;
}


.top-play-area {
}

.play-area-bottom .play-area {
  position:absolute;
  bottom: 0;
}

.play-area {

}

.play-area .game-card {
  display: block
}
</style>

<style>
.play-area .game-card .game-card-body {
  height: 10px;
}

.play-area .game-card .game-card-body > span {
  display: none;
}

.game-middle {
  position: relative;
}

.card-hand {
  position: fixed;
  bottom: -50px;
  text-align: center;
  width: 100%;
  left: 0;
  margin-left: -150px;
}

.card-hand > * {
  vertical-align: top;
}

.card-hand div.game-card:hover {
  z-index: 10000;
  scale:1.5; /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

body {
  background-image: url('~@/assets/herringbone.png');
  background-repeat: repeat;
}
</style>