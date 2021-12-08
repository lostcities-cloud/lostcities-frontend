<template>
  <div>
      <b-button
        variant="outline-dark"
        class="position-absolute top-0 start-0 ml-3 pl-2 pr-3"
        v-on:click="back()"
      >
        <b-icon-chevron-compact-left />
        Matches
      </b-button>
      <b-container id="game" class="bg-dark text-dark border rounded">
        <slot />
      </b-container>
    </div>
</template>

<script>
import {router} from "@/main";

export default {
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
</style>