<template>
  <div class="discard-piles" >

    <discard
        v-bind:color="`YELLOW`"
        v-on:draw-from-discard="$emit('draw-from-discard', `YELLOW`)">
    </discard>
    <discard
        v-bind:color="`BLUE`"
        v-on:draw-from-discard="$emit('draw-from-discard', `BLUE`)">
    </discard>
    <discard
        v-bind:color="`WHITE`"
        v-on:draw-from-discard="$emit('draw-from-discard', `WHITE`)">
    </discard>
    <discard
        v-bind:color="`GREEN`"
        v-on:draw-from-discard="$emit('draw-from-discard', `GREEN`)">
    </discard>
    <discard
        v-bind:color="`RED`"
        v-on:draw-from-discard="$emit('draw-from-discard', `RED`)">
    </discard>
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