import { userService } from "../../src/service/user-service.js";

export default {
  state: {
    user: "guest",
  },
  getters: {
    userId(state) {
      return state.user;
    },
  },
  mutations: {
    setuser(state, { currUser }) {
      state.user = currUser;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        userService.login({ username, password });
        const currUser = await userService.getLoggedinUser();
        commit({ type: "setuser", currUser });
      } catch (err) {
        throw err;
      }
    },
  },
};
