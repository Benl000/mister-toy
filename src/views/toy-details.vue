<template>
  <section v-if="toy" class="toy-details page-layout">
    <p>Name: {{ toy.name }}</p>
    <p>Date: {{ getDate }}</p>
    <p>Price: {{ toy.price }}</p>
    <p>Labels: {{ toy.labels }}</p>
    <p>In stock: {{ toy.inStock }}</p>
    <button @click="goBack">go back</button>
  </section>
</template>

<script>
export default {
  name: "toy-detail",
  data() {
    return {
      toy: null,
    };
  },
  async created() {
    try {
      const { toyId } = this.$route.params;
      const toy = await this.$store.dispatch({ type: "getToy", id: toyId });
      this.toy = toy;
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
