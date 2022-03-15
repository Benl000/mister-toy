<template>
  <section class="app-header">
    <h1>🪁🧸Mister Toy🎈🪀</h1>
    <router-link to="/">
      <button>HOME</button>
    </router-link>
    <router-link to="/toy">
      <button>SHOP</button>
    </router-link>
    <router-link to="/about">
      <button>ABOUT</button>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style></style>
