<template>
  <b-card v-if="isLoading" class="text-center" style="margin-bottom:10px;">
    <b-card-body style="width:inherit">
      <b-card-text style="text-align: center">
        <div class="game-card-main" style="width:auto; display: block">
          <div class="loading"  style="margin: 3em auto 5em; text-align: center; "></div>
        </div>
      </b-card-text>
    </b-card-body>

  </b-card>
</template>

<script>

export default {
  name: "LoadingGameCard",
  props: {
    isLoading: Boolean
  },
}
</script>

<style scoped>
  .card-body {
    display: flex;
    justify-content: center;
  }

  .game-card-main {
    text-align:left;
  }

  .game-card-action {
    line-height: 150px;
    height: 150px;
  }

  .play-btn {
    line-height:3em;
  }



</style>
