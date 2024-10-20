<template>
  <b-modal id="logs-modal" title="Logs">
    <p v-for="(log, i) in getLogMessages()" :key="i" class="log">
      {{log}}
    </p>
  </b-modal>
</template>

<script>

import { mapGetters, mapState} from "vuex";

export default {
  name: "logs-model",
  components: {

  } ,
  data() {
    return {
    }
  },
  inject: [
  ],

  async created() {

  },

  computed: {
    ...mapState('accounts', ['login']),
    ...mapGetters('gameInfo', [
      'log',
    ])

  },
  methods: {
    getLogMessages() {
      return this.log.map((log) => {
        if(log.type === "PLAY") {
          return `[${log.received}] ${log.player} played card ${log.card}`
        } else if(log.type === "DRAW" && log.color === null) {
          return `[${log.received}] ${log.player} drew from deck`
        } else if(log.type === "DRAW" && log.color !== null) {
          return `[${log.received}] ${log.player} drew from ${log.color} discard pile.`
        } else if (log.type === "DISCARD") {
          return `[${log.received}] ${log.player} discarded card ${log.card}`
        }
      })
    }
  }

}
</script>


<style scoped>

</style>