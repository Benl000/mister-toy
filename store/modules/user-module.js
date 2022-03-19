import { userService } from "../../src/service/user-service.js";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async login(context, { username, password }) {
      try {
        userService.login({ username, password });
      } catch (err) {
        throw err;
      }
    },
  },
};
