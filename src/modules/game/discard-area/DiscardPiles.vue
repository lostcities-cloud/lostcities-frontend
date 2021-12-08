<template>
  <div class="discard-piles" >
    <discard v-bind:color="`YELLOW`"></discard>
    <discard v-bind:color="`BLUE`"></discard>
    <discard v-bind:color="`WHITE`"></discard>
    <discard v-bind:color="`GREEN`"></discard>
    <discard v-bind:color="`RED`"></discard>
  </div>
</template>

<script>


import { mapState } from "vuex";
import Discard from "@/modules/game/discard-area/Discard";

export default {
  name: "discard-piles",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    "discard": Discard,
  } ,
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

  }
}
</script>

<style>
  .discard-piles {
    margin:10px;
    padding:10px;
    background-color: #9f4f4e;
    display: inline-block;
    box-shadow: 0 1px 5px #000000d6;
  }
</style>