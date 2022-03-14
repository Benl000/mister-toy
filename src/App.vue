<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";
export default {
  components: {
    appHeader,
    appFooter,
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
};
</script>

<style></style>
