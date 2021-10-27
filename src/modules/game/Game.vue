<template>
  <div class="game-view">
    <div style="display: block;" v-if="loaded" >
      <div class="play-area-top">
        <div class="play-area play-area-yellow">
          <game-card v-bind:color="`YELLOW`" v-bind:value="10" v-bind:is-multiplier="false"  style="z-index:100; position: relative; "></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="9"  v-bind:is-multiplier="false"  style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="8"  v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="7"  v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="6"  v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="5"  v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="4"  v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="3"  v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="2"  v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="1"  v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="0"  v-bind:is-multiplier="true"   style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="0"  v-bind:is-multiplier="true"   style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-blue">
          <game-card v-bind:color="`BLUE`" v-bind:value="10" v-bind:is-multiplier="false"   style="z-index:100"></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="9"  v-bind:is-multiplier="false"   style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="8"  v-bind:is-multiplier="false"   style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="7"  v-bind:is-multiplier="false"   style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="6"  v-bind:is-multiplier="false"   style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="5"  v-bind:is-multiplier="false"   style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="4"  v-bind:is-multiplier="false"   style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="3"  v-bind:is-multiplier="false"   style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="2"  v-bind:is-multiplier="false"   style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="1"  v-bind:is-multiplier="false"   style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="0"  v-bind:is-multiplier="true"   style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="0"  v-bind:is-multiplier="true"   style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-white">
          <game-card v-bind:color="`WHITE`" v-bind:value="10" v-bind:is-multiplier="false"  style="z-index:100"></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="9"  v-bind:is-multiplier="false"  style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="8"  v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="7"  v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="6"  v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="5"  v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="4"  v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="3"  v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="2"  v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="1"  v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="0"  v-bind:is-multiplier="true"   style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="0"  v-bind:is-multiplier="true"  style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-green">
          <game-card v-bind:color="`GREEN`" v-bind:value="10" v-bind:is-multiplier="false"  style="z-index:100"></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="9"  v-bind:is-multiplier="false"  style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="8"  v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="7"  v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="6"  v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="5"  v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="4"  v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="3"  v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="2"  v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="1"  v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="0"  v-bind:is-multiplier="true"   style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="0"  v-bind:is-multiplier="true"  style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-red">
          <game-card v-bind:color="`RED`" v-bind:value="10" v-bind:is-multiplier="false"  style="z-index:100"></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="9"  v-bind:is-multiplier="false"  style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="8"  v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="7"  v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="6"  v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="5"  v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="4"  v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="3"  v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="2"  v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="1"  v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="0"  v-bind:is-multiplier="true"   style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="0"  v-bind:is-multiplier="true"  style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
      </div>

      <div class="game-middle">
        <discard-piles></discard-piles>
        <card-deck></card-deck>
      </div>

      <div class="play-area-bottom">
        <div class="play-area play-area-yellow">
          <game-card v-bind:color="`YELLOW`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:100; position: relative; "></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="1" v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="2" v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="3" v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="4" v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="5" v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="6" v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="7" v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="8" v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="9" v-bind:is-multiplier="false"  style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`YELLOW`" v-bind:value="10" v-bind:is-multiplier="false" style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-blue">
          <game-card v-bind:color="`BLUE`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:100"></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="1" v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="2" v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="3" v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="4" v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="5" v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="6" v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="7" v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="8" v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="9" v-bind:is-multiplier="false"  style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`BLUE`" v-bind:value="10" v-bind:is-multiplier="false" style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-white">
          <game-card v-bind:color="`WHITE`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:100"></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="1" v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="2" v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="3" v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="4" v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="5" v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="6" v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="7" v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="8" v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="9" v-bind:is-multiplier="false"  style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`WHITE`" v-bind:value="10" v-bind:is-multiplier="false" style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-green">
          <game-card v-bind:color="`GREEN`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:100"></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="1" v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="2" v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="3" v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="4" v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="5" v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="6" v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="7" v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="8" v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="9" v-bind:is-multiplier="false"  style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`GREEN`" v-bind:value="10" v-bind:is-multiplier="false" style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
        <div class="play-area play-area-red">
          <game-card v-bind:color="`RED`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:100"></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="0" v-bind:is-multiplier="true"   style="z-index:110; position: relative; top:  -25px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="1" v-bind:is-multiplier="false"  style="z-index:120; position: relative; top:  -45px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="2" v-bind:is-multiplier="false"  style="z-index:130; position: relative; top:  -65px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="3" v-bind:is-multiplier="false"  style="z-index:140; position: relative; top:  -85px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="4" v-bind:is-multiplier="false"  style="z-index:150; position: relative; top: -105px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="5" v-bind:is-multiplier="false"  style="z-index:160; position: relative; top: -125px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="6" v-bind:is-multiplier="false"  style="z-index:170; position: relative; top: -145px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="7" v-bind:is-multiplier="false"  style="z-index:180; position: relative; top: -165px;" ></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="8" v-bind:is-multiplier="false"  style="z-index:190; position: relative; top: -185px;"></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="9" v-bind:is-multiplier="false"  style="z-index:200; position: relative; top: -205px;"></game-card>
          <game-card v-bind:color="`RED`" v-bind:value="10" v-bind:is-multiplier="false" style="z-index:210; position: relative; top: -225px;"></game-card>
        </div>
      </div>

      <div class="card-hand">
        <game-card v-for="(card, i) in game.hand" :key="i" v-bind:color="card.color" v-bind:value="card.value" v-bind:is-multiplier="card.isMultiplier" ></game-card>
      </div>



    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import GameCard from "@/modules/game/GameCard";
import CardDeck from "@/modules/game/CardDeck";
import DiscardPiles from "@/modules/game/DiscardPiles";

export default {
  name: "game",
  components: {
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
    this.game = await this.loadGame(true)
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
    }
  }
}
</script>

<style scoped>
.play-area-top, .play-area-bottom {
  height: 370px;
}

.play-area {
  display: inline-block;
  height: 370px;
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
  left: 60px;
}

.card-hand {
  width: 100%;
  position: fixed;
  bottom: -70px;
}

body {
  background-image: url('~@/assets/herringbone.png');
  background-repeat: repeat;
}
</style>