<template>
  <div class="discard-pile" v-bind:style="style">
    <b-button v-on:click="drawFromDiscard()">Draw</b-button>
    <span class="card-emoji">&#x1F5FA;</span>
  </div>
</template>

<script>

import CardUtils from "@/modules/game/CardUtils";
import * as EVENTS from "events";

export default {
  name: "discard",
  props: {
    color: String
  },

  computed: {
    style() {
      return {
        backgroundColor: this.getColorCode(),
        transform:`rotate(${this.rotation}deg)`,
        '-webkit-transform':`rotate(${this.rotation}deg)`,
        '-moz-transform':`rotate(${this.rotation}deg)`,
        '-ms-transform':`rotate(${this.rotation}deg)`
      }
    }
  },
  data() {
    return {
      rotation: CardUtils.randomCardRotation(),
    }
  },
  methods: {
    getColorCode() {
      return CardUtils.getMapCode(this.color)
    },
    drawFromDiscard() {
      this.$emit(EVENTS.DRAW_FROM_DISCARD)
    }
  }
}

</script>

<style>

.discard-pile {
  width:110px;
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
  width: 110px;
  display: inline-block;
  background: radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 100%);
  font-family: apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol;
  position: absolute;
  top: 0;
  left: 0;
}

button {
  z-index: 100;
  display: block;
}

</style>