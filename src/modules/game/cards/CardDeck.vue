<template>

    <b-button :disabled="!canDraw" v-on:click="drawFromDeck"
        class="game-card"
        v-bind:style="style"
    >
      <div class="game-card-back">




        <span class="card-emoji">&#x1F9ED;</span>
        <span class="card-count">{{deckRemaining}}</span>
      </div>
  </b-button>
</template>

<script>


import CardUtils from "@/modules/game/CardUtils";
import {mapActions, mapGetters} from "vuex";


export default {
  name: "card-deck",
  data() {
    return {
      rotation: CardUtils.randomCardRotation()
    }
  },
  computed: {
    ...mapGetters('gameInfo', [
      'canDraw',
      'deckRemaining'
    ]),
    style() {
      return {
        //transform:`rotate(${this.rotation}deg)`,
        //'-webkit-transform':`rotate(${this.rotation}deg)`,
        //'-moz-transform':`rotate(${this.rotation}deg)`,
        //'-ms-transform':`rotate(${this.rotation}deg)`,
        //verticalAlign: 'bottom',
        //marginBottom: '5px'
      }
    }
  },
  methods: {
    drawFromDeck() {
      let command = {type: "DRAW"}
      console.log(`Draw From Deck: ${JSON.stringify(command)}`)
      //this.exec(command)
      this.drawCommand(command)
    },
    ...mapActions('gameInfo', [
      'drawCommand'
    ])
  }
}

</script>

<style scoped>
button.game-card {
  display: inline-block;
  width:100px;
  height: 145px;
  position: relative;
  top: -10px;
  background-color: black;
  margin: 0 10px;
  border-radius: 5px;
  box-shadow: 0 1px 5px #000000d6;
  text-align:center;
  padding: 0;
}

.game-card-back {
  margin: 10px 10px;
  height:124px;
  background-color: #a66432;
}

.card-count {
  font-size: 30px;
  color: rgba(255, 160, 36, 0.98);
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

</style>