<template>
  <section v-if="toy" class="toy-details page-layout">
    <el-button type="info" @click="goBack" size="small" plain
      >go back</el-button
    >
    <div>
      <img class="details-img" :src="toy.imgUrl" alt="" />
    </div>
    <div class="card">
      <p>Name: {{ toy.name }}</p>
      <p>Date: {{ getDate }}</p>
      <p>Price: {{ toy.price }}</p>
      <p>Labels: {{ toy.labels }}</p>
      <p>In stock: {{ toy.inStock }}</p>
    </div>
    <pre v-if="reviews">{{ reviews }}</pre>
  </section>
</template>

<script>
export default {
  name: "toy-detail",
  data() {
    return {
      toy: null,
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
  computed: {
    getDate() {
      return new Date(this.toy.createdAt).toDateString();
    },
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
  },
};
</script>

<style></style>
