<template>
  <div class="game-view">
    <div style="display: block;" v-if="loaded" >
      <div class="game-board" >
        <play-area></play-area>
      </div>

      <div class="game-middle">
        <discard-piles></discard-piles>
        <card-deck v-on:draw-from-deck="drawFromDeck"></card-deck>
      </div>

      <div class="card-hand" style="z-index: 10000;">
        <game-card
            v-for="(card) in game.hand"
            :key="card.id"
            v-bind:id="card.id"
            v-bind:color="card.color"
            v-bind:value="card.value"
            v-bind:is-multiplier="card.isMultiplier"
            v-bind:options="['Play', 'Discard']"
            v-on:card-option="onHandEvent"
        >
        </game-card>
      </div>



    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
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
    "discard-piles": DiscardPiles
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
    ...mapState('accounts', ['login'])
  },
  methods: {
    async loadGame() {
      this.loaded = false;
      let game = await this.gamesService.retrieveGameState(this.$route.params.id)
      this.loaded = true;

      return game;
    },
    onHandEvent(event) {
      if(event.optionName === 'Play') {
        this.play(event.card)
      } else if(event.optionName === 'Discard') {
        this.discard(event.card)
      }
    },
    play(card) {
      console.log(`Play: ${card}`)
    },
    discard(card) {
      console.log(`Discard: ${card}`)
    },

    drawFromDeck() {
      console.log(`Draw From Deck`)
    }

  }
}
</script>

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
  bottom: -70px;
  text-align: center;
  width: 100%;
  left: 0;
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