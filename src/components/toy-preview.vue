<template>
  <section class="toy-preview" v-if="toy">
    <br />
    <div>
      <img class="preview-img" :src="toy.imgUrl" alt="" />
    </div>
    <div>
      <h2>{{ toy.name }}</h2>
      <h3>Price:{{ toy.price }}</h3>
      <ul>
        <li v-for="label in toy.labels" :key="label">
          <h5>{{ label }}</h5>
        </li>
      </ul>
      <h3>In stock:{{ toy.inStock }}</h3>
      <h4>Date: {{ getDate }}</h4>
    </div>
    <el-row class="toy-btns">
      <el-button title="Edit" type="primary" @click="goToEdit" circle
        >📝</el-button
      >
      <el-button title="Detail" type="success" @click="goToDetail" circle
        >📑</el-button
      >
      <el-button type="danger" title="Delete" @click="removeToy(toy._id)" circle
        >🧺</el-button
      >
    </el-row>
    <br />
  </section>
</template>

<script>
export default {
  name: "toy-preview",
  props: {
    toy: Object,
  },
  data() {
    return {};
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
