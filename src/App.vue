<template>
  <div>
    <h1>test</h1>
    <RouterView></RouterView>

  </div>
</template>

<script>

import { useRoute } from 'vue-router'

export default {
  name: "App",
  props: {
    get layout() {
      const route = useRoute()
      debugger;
      console.log(route)
      return route
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding:0;
  background-image: url(/src/assets/herringbone.png);
  background-repeat: repeat;
}
</style>