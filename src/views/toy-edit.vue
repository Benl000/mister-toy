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
  async created() {
    try {
      const { toyId } = this.$route.params;
      this.toyToEdit = await this.$store.dispatch({
        type: "getToy",
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
    async saveToy() {
      try {
        await this.$store.dispatch({
          type: "saveToy",
          toy: JSON.parse(JSON.stringify(this.toyToEdit)),
        });
        this.$router.push("/toy");
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style></style>
