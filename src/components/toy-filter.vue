<template>
  <section v-if="filterBy" class="toy-filter">
    <br />
    <div class="filterBtns">
      <label for="Search">
        text:
        <el-input
          name="Search"
          id="Search"
          type="text"
          size="large"
          @input="setFilterDebounced"
          v-model="filterBy.txt"
          style="width: 300px"
          placeholder="Search..."
          clearable
        />
      </label>
      <label for="filterInStock">
        stock:
        <el-select
          @change="setFilter"
          v-model="filterBy.inStock"
          class="m-2"
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in stackOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </label>
      <label for="multiple-select"
        >labels:
        <el-select
          multiple
          v-model="filterBy.label"
          @change="setFilter"
          placeholder="Enter labels"
          id="multiple-select"
          name="multiple-select"
          style="width: 240px"
        >
          <el-option
            v-for="item in labelsOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </label>
    </div>
    <br />
    <div class="filterBtns">
      <label for="filterSort"
        >sort by:
        <el-select
          @change="setFilter"
          v-model="filterBy.sort"
          name="filterSort"
          id="filterSort"
          size="large"
        >
          <el-option
            v-for="item in sortOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </label>
      <label for="filterOrder"
        >sort diraction:
        <el-select
          @change="setFilter"
          v-model="filterBy.order"
          name="filterOrder"
          id="filterOrder"
          size="large"
        >
          <el-option
            v-for="item in orderOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </label>
      <el-button @click="newToy" type="primary" size="large" round>
        + Add a new toy</el-button
      >
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
const value = ref("");
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
      stackOptions: [
        {
          value: "All",
          label: "All",
        },
        {
          value: "In",
          label: "In stock",
        },
        {
          value: "Out",
          label: "Out of stock",
        },
      ],
      labelsOptions: [
        {
          value: "All",
          label: "All",
        },
        {
          value: "On wheels",
          label: "On wheels",
        },
        {
          value: "Box game",
          label: "Box game",
        },
        {
          value: "Art",
          label: "Art",
        },
        {
          value: "Baby",
          label: "Baby",
        },
        {
          value: "Doll",
          label: "Doll",
        },
        {
          value: "Puzzle",
          label: "Puzzle",
        },
        {
          value: "Outdoor",
          label: "Outdoor",
        },
      ],
      sortOptions: [
        {
          value: "Name",
          label: "Name",
        },
        {
          value: "Price",
          label: "Price",
        },
        {
          value: "Time",
          label: "Time",
        },
      ],
      orderOptions: [
        {
          value: "1",
          label: "first to last",
        },
        {
          value: "-1",
          label: "last to first",
        },
      ],
    };
  },
  methods: {
    setFilterDebounced() {},
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
    newToy() {
      this.$router.push(`/toy/edit`);
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
  },
};
</script>
