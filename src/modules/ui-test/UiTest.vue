<template>
  <div>
    <h1> testing </h1>
    <play-area></play-area>
  </div>
</template>

<script>
import PlayArea from "@/modules/game/play-area/PlayArea";

export default {
  name: "ui-test",
  components: {
    PlayArea,
    "play-area": PlayArea
  }
}
</script>

<style scoped>

</style>