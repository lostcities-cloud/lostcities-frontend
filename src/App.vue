<template slot>
  <div>

    <component :is="$route.meta.layout">

      <router-view class="view"></router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: "App"
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