<template>
  <section class="app-header">
    <h1>🪁🧸Mister Toy🎈🪀</h1>
    <router-link to="/">
      <el-button type="primary" size="large" round>HOME</el-button>
    </router-link>
    <router-link to="/toy">
      <el-button type="primary" size="large" round>SHOP</el-button>
    </router-link>
    <router-link to="/about">
      <el-button type="primary" size="large" round>ABOUT</el-button>
    </router-link>
    <!-- <router-link :to="'/user/' + user._id">
      <el-button type="primary" size="large" round>{{ userId }}</el-button>
    </router-link> -->
  </section>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      user: null,
    };
  },
  computed: {
    userId() {
      this.user = this.$store.getters.userId;
      return this.user.fullname;
    },
  },
};
</script>

<style></style>
