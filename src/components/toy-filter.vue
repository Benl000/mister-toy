<template>
  <section v-if="filterBy" class="toy-filter">
    <label for="Search">
      text:
      <input
        v-model="filterBy.txt"
        @input="setFilterDebounced"
        type="text"
        name="Search"
        id="Search"
        placeholder="Search..."
      />
    </label>
    <label for="filterInStock">
      stock:
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
    </label>
    <label for="multiple-select"
      >labels:
      <select
        @change="setFilter"
        v-model="filterBy.label"
        id="multiple-select"
        name="multiple-select"
        multiple
      >
        <option value=""></option>
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </select>
    </label>
    <label for="filterSort"
      >sort by:
      <select
        @change="setFilter"
        v-model="filterBy.sort"
        name="filterSort"
        id="filterSort"
      >
        <option value="Name">Name</option>
        <option value="Price">Price</option>
        <option value="Time">Latest</option>
      </select>
      <select
        @change="setFilter"
        v-model="filterBy.order"
        name="filterOrder"
        id="filterOrder"
      >
        <option type="number" value="1">first to last</option>
        <option type="number" value="-1">last to first</option>
      </select>
    </label>
  </section>
</template>

<script>
export default {
  name: "toy-filter",
  created() {
    this.setFilterDebounced = this.debounce(this.setFilter, 3000);
  },
  data() {
    return {
      filterBy: {
        txt: "",
        inStock: "All",
        label: [],
        sort: "Name",
        order: 1,
      },
    };
  },
  methods: {
    setFilterDebounced() {},
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
    debounce(func, wait) {
      let timeout;

      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    computed: {},
  },
};
</script>
