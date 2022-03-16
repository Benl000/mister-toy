<template>
  <section class="toy-preview" v-if="toy">
    <h2>{{ toy.name }}</h2>
    <h3>Price:{{ toy.price }}</h3>
    <ul>
      <li v-for="label in toy.labels" :key="label">
        <h5>{{ label }}</h5>
      </li>
    </ul>
    <h3>In stock:{{ toy.inStock }}</h3>
    <h4>Date: {{ getDate }}</h4>
    <div class="toy-btns">
      <button @click="goToEdit">📝edit</button>
      <button @click="goToDetail">📑details</button>
      <button @click="removeToy(toy._id)">🗑delete</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "toy-preview",
  props: {
    toy: Object,
  },
  components: {},
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy._id}`);
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy._id}`);
    },
    removeToy(toyId) {
      this.$emit("removeToy", toyId);
    },
  },
  computed: {
    getDate() {
      return new Date(this.toy.createdAt).toDateString();
    },
  },
};
</script>

<style></style>
