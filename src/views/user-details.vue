<template>
  <section v-if="user" class="user-details page-layout">
    <el-button type="info" @click="goBack" size="small" plain
      >go back</el-button
    >
    <div>
      <img class="details-img" :src="toy.imgUrl" alt="user" />
    </div>
    <div class="card">
      <p>Name: {{ user.fullname }}</p>
      <!-- <p>Date: {{ getDate }}</p>
      <p>Price: {{ toy.price }}</p>
      <p>Labels: {{ toy.labels }}</p>
      <p>In stock: {{ toy.inStock }}</p> -->
    </div>
    <pre v-if="reviews">{{ reviews }}</pre>
  </section>
</template>

<script>
export default {
  name: "user-detail",
  data() {
    return {
      user: null,
      reviews: null,
    };
  },
  async created() {
    try {
      const { toyId } = this.$route.params;
      this.toy = await this.$store.dispatch({ type: "getToy", id: toyId });
      this.reviews = await this.$store.dispatch({
        type: "loadReviews",
        id: toyId,
      });
    } catch (err) {
      console.log("err", err);
    }
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
  },
};
</script>

<style></style>
