<template>
  <section class="toy-preview">
    <pre>{{ toy }}</pre>
  </section>
</template>

<script>
// import customCard from './custom-card.vue'

export default {
  name: "toy-preview",
  props: {
    toy: Object,
  },
  components: {
    // customCard,
  },
  // methods: {
  //   goToDetail() {
  //     this.$router.push(`/car/${this.car.id}`)
  //   },
  //   goToEdit() {
  //     this.$router.push(`/car/edit/${this.car.id}`)
  //   },
  //   removeCar(carId) {
  //     this.$emit('removeCar', carId)
  //   },
  // },
};
</script>

<style></style>
