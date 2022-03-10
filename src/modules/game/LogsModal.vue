<template>
  <b-modal id="logs-modal" title="Logs">
    <p v-for="(log, i) in logs" :key="i" class="log">
      <strong>{{log.player}}</strong>: {{log.message}}
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
      'logs',
    ])

  },
  methods: {

  }

}
</script>


<style scoped>

</style>