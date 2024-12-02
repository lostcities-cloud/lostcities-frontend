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
    <div class="container-fluid" style="max-width: 1000px;">
      <div class="row row-cols-lg-12" style="max-width: 752px">
        <div class="col-lg-4 col-md-12 col-sm-12 game-info">
          <game-info id="game-info"></game-info>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12 col-12" style="max-width: 752px">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameInfo from "@/modules/game-info/GameInfo";
import LogsModel from "@/modules/game/LogsModal";



export default {
  components: {
    LogsModel,

    GameInfo
  },
  methods: {
    back() {
      return this.$router.push({ name: 'Matches'})
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

.game-info {
  position: relative;
  z-index: 0;
  display: block;
}
</style>
