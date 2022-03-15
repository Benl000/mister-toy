<template>
  <section v-if="filterBy" class="toy-filter">
    <input
      v-model="filterBy.txt"
      @input="setFilter"
      type="text"
      placeholder="Search..."
    />
    <select
      @change="setFilter"
      v-model="filterBy.inStock"
      name="filterInStock"
      id="filterInStock"
    >
      <option value="All">All</option>
      <option value="In">In stock</option>
      <option value="Out">Out of stock</option>
    </select>
    <select
      @change="setFilter"
      v-model="filterBy.label"
      id="multiple-select"
      multiple
    >
      <option value="On wheels">On wheels</option>
      <option value="Box game">Box game</option>
      <option value="Art">Art</option>
      <option value="Baby">Baby</option>
      <option value="Doll">Doll</option>
      <option value="Puzzle">Puzzle</option>
      <option value="Outdoor">Outdoor</option>
    </select>
  </section>
</template>

<script>
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        txt: "",
        inStock: "All",
        label: [],
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>
