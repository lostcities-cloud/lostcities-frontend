<template>
  <div class="discard-pile" v-bind:style="style">
    <game-card v-if="hasCard"
               v-bind:id="card.id"
               v-bind:color="card.color"
               v-bind:value="card.value"
               v-bind:is-multiplier="card.isMultiplier"
               v-bind:options="getOptions()"
               v-on:card-option="handle"
    >
    </game-card>

    <span class="card-emoji">&#x1F5FA;</span>
  </div>
</template>

<script>

import CardUtils from "@/modules/game/CardUtils";
import {mapGetters} from "vuex";
import GameCard from "@/modules/game/cards/GameCard";

export default {
  name: "discard",
  components: {
    "game-card": GameCard
  },
  props: {
    color: String
  },
  data() {
    return {
      rotation: CardUtils.randomCardRotation(),
    }
  },
  computed: {
    ...mapGetters('gameInfo', ['discard', 'canDraw']),
    style() {
      return {
        backgroundColor: this.getColorCode(),
        transform:`rotate(${this.rotation}deg)`,
        '-webkit-transform':`rotate(${this.rotation}deg)`,
        '-moz-transform':`rotate(${this.rotation}deg)`,
        '-ms-transform':`rotate(${this.rotation}deg)`
      }
    },
    hasCard() {
      return this.discard[this.color].length > 0;
    },
    card() {
      return this.discard[this.color][0];
    },


  },
  methods: {
    getColorCode() {
      return CardUtils.getMapCode(this.color)
    },

    getOptions() {
      if(this.canDraw) {
        return ['Draw'];
      } else {
        return []
      }
    },
    handle() {
      this.$emit('draw-from-discard')
    }
  }
}

</script>

<style>

.discard-pile {
  width:119px;
  height:110px;
  display: inline-block;
  background-color: #fff;
  margin:10px;
  box-shadow: 0 1px 5px #000000d6;
  text-align: center;
  position: relative;
}

.card-emoji {
  font-size: 70px;
  line-height: 110px;
  height: 110px;
  width: 120px;
  display: inline-block;
  background: radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 100%);
  font-family: apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol;
  position: absolute;
  top: 0;
  left: 0;
}

button {
  z-index: 100;
  position: relative;
  top: 30px;
  opacity: .7;
}

.game-card {
  position: relative;
  z-index: 500;
  top: -13px;
}

</style>