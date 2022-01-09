<template>


    <div class="play-area d-flex justify-content-between">
      <div class="play-area-yellow">
        <div class="top-play-area" v-bind:style="{height:opponentColorStackHeightByColor('YELLOW')}">
          <game-card v-for="(card, i) in opponentCardsYellow" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>

        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('YELLOW')}">
          <game-card v-for="(card, i) in playerCardsYellow" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>

        </div>
      </div>
      <div class="play-area-blue">
        <div class="top-play-area" v-bind:style="{height:opponentColorStackHeightByColor('BLUE')}">
          <game-card v-for="(card, i) in opponentCardsBlue" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('BLUE')}">
          <game-card v-for="(card, i) in playerCardsBlue" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
      </div>
      <div class="play-area-white">
        <div class="top-play-area" v-bind:style="{height:opponentColorStackHeightByColor('WHITE')}">
          <game-card v-for="(card, i) in opponentCardsWhite" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('WHITE')}">
          <game-card v-for="(card, i) in playerCardsWhite" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
      </div>
      <div class="play-area-green">
        <div class="top-play-area" v-bind:style="{height:opponentColorStackHeightByColor('GREEN')}">
          <game-card v-for="(card, i) in opponentCardsGreen" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('GREEN')}">
          <game-card v-for="(card, i) in playerCardsGreen" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
      </div>
      <div class="play-area-red">
        <div class="top-play-area" v-bind:style="{height:opponentColorStackHeightByColor('RED')}">
          <game-card v-for="(card, i) in opponentCardsRed" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('RED')}">
          <game-card v-for="(card, i) in playerCardsRed" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
      </div>
    </div>


</template>

<script>
import GameCard from "@/modules/game/cards/GameCard";
import {mapGetters, mapState} from "vuex";

export default {
  name: "play-area",
  components: {
    "game-card": GameCard
  },

  computed: {
    playerCardsYellow () {
      return [...this.playAreas[this.playerName].board['YELLOW']]
    },
    playerCardsBlue() {
      return [...this.playAreas[this.playerName].board['BLUE']]
    },
    playerCardsWhite() {
      return [...this.playAreas[this.playerName].board['WHITE']]
    },
    playerCardsGreen() {
      return [...this.playAreas[this.playerName].board['GREEN']]
    },
    playerCardsRed() {
      return [...this.playAreas[this.playerName].board['RED']]
    },
    opponentCardsYellow () {
      return [...this.playAreas[this.opponentName].board['YELLOW']].reverse()
    },
    opponentCardsBlue() {
      return [...this.playAreas[this.opponentName].board['BLUE']].reverse()
    },
    opponentCardsWhite() {
      return [...this.playAreas[this.opponentName].board['WHITE']].reverse()
    },
    opponentCardsGreen() {
      return [...this.playAreas[this.opponentName].board['GREEN']].reverse()
    },
    opponentCardsRed() {
      return [...this.playAreas[this.opponentName].board['RED']].reverse()
    },
    ...mapState('accounts', ['login']),
    ...mapGetters('gameInfo', ['playAreas', 'loading', 'playerName', 'opponentName']),
  },
  methods: {
    topByPosition(pos) {
      let top = [null, -25,-45,-65,-85,-105,-125,-145,-165,-185,-205,-225][pos];

      return top ? top.toString() + "px" : "auto"
    },
    zIndexByPosition(pos) {
      return 100 + (pos * 20)
    },
    playerColorStackHeightByColor(color) {
      return (this.playAreas[this.playerName].board[color].length * 30 + 20).toString() + "px"
    },
    opponentColorStackHeightByColor(color) {
      return (this.playAreas[this.opponentName].board[color].length * 30 + 20).toString() + "px"
    }
  }
}
</script>

<style scoped>



.play-area-yellow, .play-area-blue, .play-area-white, .play-area-green, .play-area-red {
  height: 430px;
  width: 130px;
  display: inline-block;
  margin-top: 20px;
}

.top-play-area, .bottom-play-area {

}

.play-area .game-card {
  display: block
}
</style>

<style>
.play-area .game-card .game-card-body > span {
  display: none;
}

body {
  background-image: url('~@/assets/herringbone.png');
  background-repeat: repeat;
}
</style>