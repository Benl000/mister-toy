<template>
  <section class="toy-preview">
    <h2>{{ toy.name }}</h2>
    <h3>Price:{{ toy.price }}</h3>
    <h3>Type:{{ toy.type }}</h3>
    <h3>In stock:{{ toy.inStock }}</h3>
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
};
</script>

<style></style>
