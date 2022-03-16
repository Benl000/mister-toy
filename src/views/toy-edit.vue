<template>
  <section v-if="toyToEdit" class="toy-edit page-layout">
    <form @submit.prevent="saveToy">
      <input type="text" v-model="toyToEdit.name" placeholder="name" />
      <input type="number" v-model="toyToEdit.price" placeholder="price" />
      <input type="text" v-model="toyToEdit.type" placeholder="type" />
      <label for="inStock">
        <input name="inStock" type="checkbox" v-model="toyToEdit.inStock" />
      </label>
      <button>Save</button>
    </form>
    <button @click="goBack">go back</button>
  </section>
</template>

<script>
export default {
  name: "toy-edit",
  data() {
    return {
      toyToEdit: null,
    };
  },
  created() {
    const { toyId } = this.$route.params;
    this.$store.dispatch({ type: "getToy", id: +toyId }).then((toy) => {
      this.toyToEdit = toy;
    });
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: this.toyToEdit })
        .then(() => {
          this.$router.push("/toy");
        });
    },
  },
};
</script>

<style></style>
