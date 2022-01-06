<template>
  <div class="game-card" v-bind:style="style">
    <div class="game-card-back">
      <b-button v-on:click="$emit('draw-from-deck')">Draw</b-button>
      <span class="card-emoji">&#x1F9ED;</span>
    </div>
  </div>
</template>

<script>


import CardUtils from "@/modules/game/CardUtils";


export default {
  name: "card-deck",
  data() {
    return {
      rotation: CardUtils.randomCardRotation()
    }
  },
  computed: {
    style() {
      return {
        transform:`rotate(${this.rotation}deg)`,
        '-webkit-transform':`rotate(${this.rotation}deg)`,
        '-moz-transform':`rotate(${this.rotation}deg)`,
        '-ms-transform':`rotate(${this.rotation}deg)`
      }
    }
  },
  methods: {
  }
}

</script>

<style scoped>
.game-card {
  display: inline-block;
  width:100px;
  height: 145px;
  position: relative;
  top: -10px;
  background-color: black;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 5px #000000d6;
  text-align:center;
}

.game-card-back {
  margin: 10px 10px;
  height:124px;
  background-color: #a66432;
}

.card-emoji {
  font-size: 50px;
  line-height: 125px;
  height: 125px;
  width: 80px;
  display: inline-block;
  background: radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 100%);
  font-family: apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol;
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  z-index: 100;
  position: relative;
  top: 30px;
  opacity: .7;
}

</style>