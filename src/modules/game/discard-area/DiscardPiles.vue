<template>
  <div class="discard-piles" @drop="drop($event)" @dragover="allowDrop($event)" >

    <discard
        v-bind:color="`YELLOW`"
        v-on:draw-from-discard="$emit('draw-from-discard', `YELLOW`)" />
    <discard
        v-bind:color="`BLUE`"
        v-on:draw-from-discard="$emit('draw-from-discard', `BLUE`)" />
    <discard
        v-bind:color="`WHITE`"
        v-on:draw-from-discard="$emit('draw-from-discard', `WHITE`)" />
    <discard
        v-bind:color="`GREEN`"
        v-on:draw-from-discard="$emit('draw-from-discard', `GREEN`)" />
    <discard
        v-bind:color="`RED`"
        v-on:draw-from-discard="$emit('draw-from-discard', `RED`)" />

    <card-deck></card-deck>

  </div>
</template>

<script>


import {mapActions, mapState} from "vuex";
import Discard from "@/modules/game/discard-area/Discard";
import CardDeck from "@/modules/game/cards/CardDeck";

export default {
  name: "discard-piles",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Discard,
    CardDeck,
  } ,
  inject: [
    'gamesService'
  ],

  async created() {

  },

  computed: {
    ...mapState('accounts', ['login'])
  },
  methods: {
    ...mapActions('gameInfo', [
      'discardCommand',
    ]),

    drop(event) {
      event.preventDefault()
      let id = event.dataTransfer.getData("id");
      this.discardCommand({type: "DISCARD", card: id})
    },
    allowDrop(e) {
      e.preventDefault()
    },
    ...mapActions('gameInfo', [
      'discardCommand',
    ])
  }
}
</script>

<style scoped>
  .discard-piles {
    margin:10px;
    padding:5px;
    background-color: #9f4f4e;
    box-shadow: 0 1px 5px #000000d6;
    width: 718px;
    height: 150px;
    display: grid;
    grid-template-columns: 140px 140px 140px 140px 140px 140px;
    position:relative;
    z-index:200;
  }
</style>