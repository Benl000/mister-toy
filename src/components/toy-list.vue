<template>
  <section class="toy-list">
    <ul>
      <li v-for="toy in toys" :key="toy.id">
        <toy-preview :toy="toy" />
      </li>
    </ul>
  </section>
</template>

<script>
import toyPreview from "./toy-preview.vue";
export default {
  name: "toy-list",
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    toyPreview,
  },
  // methods: {
  //   removeCar(carId) {
  //     this.$emit('removeCar', carId)
  //   },
  // },
};
</script>

<style></style>
