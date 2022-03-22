import { reviewService } from "../../src/service/review-service.js";

export default {
  state: {
    // reviews: null,
  },
  getters: {},
  mutations: {
    // setReviews(state, { reviews }) {
    //   state.reviews = reviews;
    // },
  },
  actions: {
    async loadReviews({ commit }, toyId) {
      try {
        const reviews = await reviewService.query(toyId);
        return reviews;
        // commit({ type: "setReviews", reviews });
      } catch (err) {
        console.log("err is:", err);
      }
    },
  },
};
