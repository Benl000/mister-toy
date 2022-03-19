<template>
  <section v-if="toyToEdit" class="toy-edit page-layout">
    <form @submit.prevent="saveToy">
      <br />
      <label for="name">
        name:
        <br />
        <el-input
          id="name"
          type="text"
          size="large"
          v-model="toyToEdit.name"
          style="width: 300px"
          placeholder="Please input name"
          clearable
        />
      </label>
      <br />
      <br />
      <label for="price">
        price:
        <br />
        <el-input-number
          v-model="toyToEdit.price"
          id="price"
          type="number"
          placeholder="price"
          :step="1"
          size="large"
          step-strictly
        />
      </label>
      <br />
      <br />
      <el-checkbox
        label=" in stock"
        v-model="toyToEdit.inStock"
        size="large"
        border
      />
      <br />
      <br />
      <label for="multiple-select"
        >labels:
        <br />
        <el-select
          multiple
          v-model="toyToEdit.labels"
          placeholder="Select labels"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </label>
      <br />
      <br />
      <el-button @click="saveToy" type="primary" size="large" round
        >Save</el-button
      >
    </form>
    <br />
    <el-button type="info" @click="goBack" size="small" plain
      >go back</el-button
    >
  </section>
</template>

<script>
export default {
  name: "toy-edit",
  data() {
    return {
      toyToEdit: null,
      options: [
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
