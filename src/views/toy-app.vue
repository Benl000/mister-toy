<template>
  <section class="toy-app page-layout">
    <toy-filter @setFilter="setFilter" />
    <toy-list
      @removeToy="removeToy"
      v-if="toys && toys.length"
      :toys="toys"
    ></toy-list>
  </section>
</template>

<script>
import toyList from "../components/toy-list.vue";
import toyFilter from "../components/toy-filter.vue";

export default {
  name: "toy-app",
  data() {
    return {};
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    // toysForDisplay() {
    //   return this.$store.getters.toysForDisplay;
    // },
  },
  created() {},
  methods: {
    loadToys() {
      this.$store
        .dispatch({ type: "loadToys" })
        .then((toys) => (this.toys = toys));
    },
    setFilter(filterBy) {
      this.$store.dispatch({
        type: "setFilterBy",
        filterBy,
      });
    },
    // goToEdit() {
    //   this.$router.push(`/toy/edit`);
    // },
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", id: toyId });
    },
  },
  components: {
    toyList,
    toyFilter,
  },
};
</script>

<style></style>
