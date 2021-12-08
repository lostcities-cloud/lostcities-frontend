<template>


    <div class="play-area d-flex justify-content-between">
      <div class="play-area-yellow">
        <div class="top-play-area" v-bind:style="{height:opponentColorStackHeightByColor('YELLOW')}">
          <game-card v-for="(card, i) in opponentPlayedCardsByColor('YELLOW')" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>

        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('YELLOW')}">
          <game-card v-for="(card, i) in playerPlayedCardsByColor('YELLOW')" v-bind:key="i"
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
          <game-card v-for="(card, i) in opponentPlayedCardsByColor('BLUE')" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('BLUE')}">
          <game-card v-for="(card, i) in playerPlayedCardsByColor('BLUE')" v-bind:key="i"
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
          <game-card v-for="(card, i) in opponentPlayedCardsByColor('WHITE')" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('WHITE')}">
          <game-card v-for="(card, i) in playerPlayedCardsByColor('WHITE')" v-bind:key="i"
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
          <game-card v-for="(card, i) in opponentPlayedCardsByColor('GREEN')" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('GREEN')}">
          <game-card v-for="(card, i) in playerPlayedCardsByColor('GREEN')" v-bind:key="i"
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
          <game-card v-for="(card, i) in opponentPlayedCardsByColor('RED')" v-bind:key="i"
                     d-block
                     v-bind:color="card.color"
                     v-bind:value="card.value"
                     v-bind:is-multiplier="card.isMultiplier"
                     v-bind:style="{zIndex: zIndexByPosition(i), position: 'relative', top: topByPosition(i)}">

          </game-card>
        </div>
        <div class="bottom-play-area" v-bind:style="{height:playerColorStackHeightByColor('RED')}">
          <game-card v-for="(card, i) in playerPlayedCardsByColor('RED')" v-bind:key="i"
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
import {mapState} from "vuex";

export default {
  name: "play-area",
  components: {
    "game-card": GameCard
  },
  data() {
    return {
      playArea: {
        dnelson: {
          YELLOW: [
            {color: "YELLOW", value: 10, isMultiplier: false},
            {color: "YELLOW", value: 9, isMultiplier: false},
            {color: "YELLOW", value: 8, isMultiplier: false},
            {color: "YELLOW", value: 7, isMultiplier: false},
            {color: "YELLOW", value: 6, isMultiplier: false},
            {color: "YELLOW", value: 5, isMultiplier: false},
            {color: "YELLOW", value: 4, isMultiplier: false},
            {color: "YELLOW", value: 3, isMultiplier: false},
            {color: "YELLOW", value: 2, isMultiplier: false},
            {color: "YELLOW", value: 1, isMultiplier: false},
            {color: "YELLOW", value: 0, isMultiplier: true},
            {color: "YELLOW", value: 0, isMultiplier: true},
          ],
          BLUE: [
            {color: "BLUE", value: 10, isMultiplier: false},
            {color: "BLUE", value: 9, isMultiplier: false},
            {color: "BLUE", value: 8, isMultiplier: false},
            {color: "BLUE", value: 7, isMultiplier: false},
            {color: "BLUE", value: 6, isMultiplier: false},
            {color: "BLUE", value: 5, isMultiplier: false},
          ],
          WHITE: [
            {color: "WHITE", value: 10, isMultiplier: false},
            {color: "WHITE", value: 9, isMultiplier: false},
            {color: "WHITE", value: 8, isMultiplier: false},
            {color: "WHITE", value: 7, isMultiplier: false},
            {color: "WHITE", value: 6, isMultiplier: false},
            {color: "WHITE", value: 5, isMultiplier: false},
          ],
          GREEN: [
            {color: "GREEN", value: 10, isMultiplier: false},
            {color: "GREEN", value: 9, isMultiplier: false},
            {color: "GREEN", value: 8, isMultiplier: false},
          ],
          RED: [
            {color: "RED", value: 10, isMultiplier: false},
            {color: "RED", value: 9, isMultiplier: false},
            {color: "RED", value: 8, isMultiplier: false},
            {color: "RED", value: 7, isMultiplier: false},
            {color: "RED", value: 6, isMultiplier: false},
            {color: "RED", value: 5, isMultiplier: false},
            {color: "RED", value: 4, isMultiplier: false},
            {color: "RED", value: 3, isMultiplier: false},
            {color: "RED", value: 2, isMultiplier: false},
            {color: "RED", value: 1, isMultiplier: false},
            {color: "RED", value: 0, isMultiplier: true},

          ]
        },
        ttesterson: {
          YELLOW: [],
          BLUE: [
            {color: "BLUE", value: 4, isMultiplier: false},
            {color: "BLUE", value: 3, isMultiplier: false},
            {color: "BLUE", value: 2, isMultiplier: false},
            {color: "BLUE", value: 1, isMultiplier: false},
            {color: "BLUE", value: 0, isMultiplier: true},
            {color: "BLUE", value: 0, isMultiplier: true},
          ],
          WHITE: [
            {color: "WHITE", value: 4, isMultiplier: false},
            {color: "WHITE", value: 3, isMultiplier: false},
            {color: "WHITE", value: 2, isMultiplier: false},
            {color: "WHITE", value: 1, isMultiplier: false},
            {color: "WHITE", value: 0, isMultiplier: true},
            {color: "WHITE", value: 0, isMultiplier: true},
          ],
          GREEN: [
            {color: "GREEN", value: 7, isMultiplier: false},
            {color: "GREEN", value: 6, isMultiplier: false},
            {color: "GREEN", value: 5, isMultiplier: false},
            {color: "GREEN", value: 4, isMultiplier: false},
            {color: "GREEN", value: 3, isMultiplier: false},
            {color: "GREEN", value: 2, isMultiplier: false},
            {color: "GREEN", value: 1, isMultiplier: false},
            {color: "GREEN", value: 0, isMultiplier: true},
            {color: "GREEN", value: 0, isMultiplier: true},
          ],
          RED: [
            {color: "RED", value: 0, isMultiplier: true},
          ]
        }
      }
    }
  },
  computed: {
    playerLogin()  {
      return this.login
    },
    opponentLogin()  {
      return Object.keys(this.playArea)
          .filter((key) => key !== this.login)[0]
    },
    ...mapState('accounts', ['login'])
  },
  methods: {
    topByPosition(pos) {
      let top = [null, -25,-45,-65,-85,-105,-125,-145,-165,-185,-205,-225][pos];

      return top ? top.toString() + "px" : "auto"
    },
    zIndexByPosition(pos) {
      return 100 + (pos * 20)
    },
    playerPlayedCardsByColor(color) {
      return this.playArea[this.playerLogin][color]
    },
    opponentPlayedCardsByColor(color) {
      return this.playArea[this.opponentLogin][color]
    },
    playerColorStackHeightByColor(color) {
      return (this.playerPlayedCardsByColor(color).length * 30 + 20).toString() + "px"
    },
    opponentColorStackHeightByColor(color) {
      return (this.opponentPlayedCardsByColor(color).length * 30 + 20).toString() + "px"
    }
  }
}
</script>

<style scoped>



.play-area-yellow, .play-area-blue, .play-area-white, .play-area-green, .play-area-red {
  height: 430px;
  width: 130px;
  display: inline-block;
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