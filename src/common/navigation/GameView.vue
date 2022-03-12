<template>
  <div style="margin-top:100px;">
    <ul class="nav" id="main-game-nav">
      <li class="nav-link">
        <b-button
          variant="outline-dark"
          class=""
          v-on:click="back()"
        >
          <b-icon-chevron-compact-left />
          Matches
        </b-button>
      </li>
      <li class="nav-link">
        <b-button
            v-b-modal.logs-modal
            variant="outline-dark"
        >
          <b-icon icon="card-text" />
          Logs
        </b-button>
      </li>
    </ul>
    <logs-model></logs-model>
    <b-container>
      <b-row>
        <b-col cols="8" class="text-dark border rounded" >
          <slot />
        </b-col>
        <b-col cols="4">
          <game-info id="game-info"></game-info>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {router} from "@/main";
import GameInfo from "@/modules/game-info/GameInfo";
import LogsModel from "@/modules/game/LogsModal";



export default {
  components: {
    LogsModel,

    GameInfo
  },
  methods: {
    back() {
      return router.push({path: "/matches"});
    },
  },
};
</script>

<style scoped>
#main-game-nav {
  position: absolute;
  top:0;
  margin-left: 2em;
}

#main-game-nav:first-child {
  margin-left:2em;
}

#main-game-nav li.nav-link {
  padding-left: 0;
  margin-left: 0;
  margin-right: 0;
}
</style>