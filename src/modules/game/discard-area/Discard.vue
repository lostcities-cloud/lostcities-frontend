<template>
  <div class="discard-pile" v-bind:style="style">
    <b-button v-if="canDraw" v-on:click="$emit('draw-from-discard')">Draw</b-button>
    <span class="card-emoji">&#x1F5FA;</span>
  </div>
</template>

<script>

import CardUtils from "@/modules/game/CardUtils";
import {mapGetters} from "vuex";

export default {
  name: "discard",
  props: {
    color: String
  },

  computed: {
    ...mapGetters('gameInfo', ['canDraw']),
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
  position: relative;
  top: 30px;
  opacity: .7;
}

</style>