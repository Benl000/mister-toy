<template>
  <section class="toy-app page-layout">
    <toy-list v-if="toys" :toys="toys"></toy-list>
  </section>
</template>

<script>
import { toyService } from "../service/toy-service.js";
import toyList from "../components/toy-list.vue";

export default {
  name: "toy-app",
  data() {
    return {
      filterBy: null,
    };
  },
  computed: {
    toys() {
      const x = this.$store.getters.toys;
      console.log(x);
      return x;
    },
    // toysToShow() {
    //   if (!this.filterBy) return this.toys;
    //   const regex = new RegExp(this.filterBy.vendor, "i");
    //   return this.toys.filter((toy) => regex.test(toy.vendor));
    // },
  },
  created() {},
  methods: {
    loadToys() {
      toyService.query().then((toys) => (this.toys = toys));
    },
    // setFilter(filterBy) {
    //   this.filterBy = filterBy;
    // },
    // goToEdit() {
    //   this.$router.push(`/toy/edit`);
    // },
    // removeToy(toyId) {
    //   this.$store.dispatch({ type: "removeToy", id: toyId });
    // },
  },
  components: {
    toyList,
    // toyFilter,
  },
};
</script>

<style></style>
