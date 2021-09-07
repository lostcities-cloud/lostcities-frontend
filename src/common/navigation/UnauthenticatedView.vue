<template>
  <div>
      <b-button
        variant="outline-dark"
        class="position-absolute top-0 start-0 ml-3 pl-2 pr-3"
        v-if="showBack()"
        v-on:click="back()"
      >
        <b-icon-chevron-compact-left />
        Back
      </b-button>
      <b-container id="main" class="bg-light text-dark border my-3 py-3 rounded">
        <slot />
      </b-container>
    </div>
</template>

<script>
export default {
  methods: {
    showBack() {
      return this.$route.fullPath !== "/";
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#main {
  max-width: 460px;
  position: relative;
  top: 5em;
}
</style>