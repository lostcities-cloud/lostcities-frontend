<template>
  <div class="mt-4">
      <b-button
        variant="outline-dark"
        class="position-absolute top-0 start-0 ml-3 pl-2 pr-3"
        v-on:click="back()"
      >
        <b-icon-chevron-compact-left />
        Matches
      </b-button>
      <b-container>
        <b-row>
          <b-col cols="9" class="bg-dark text-dark border rounded" >
            <slot />
          </b-col>
          <b-col cols="3">
            <game-info id="game-info"></game-info>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import {router} from "@/main";
import GameInfo from "@/modules/game-info/GameInfo";


export default {
  components: {
    GameInfo
  },
  methods: {
    back() {
      return router.push({path: "/matches"});
    },
  },
};
</script>

<style>
#game {
  overflow: hidden;
  position: relative;
  top: 2em;
  width: 840px;
  padding: 20px 15px;
}

#game-info {

}
</style>