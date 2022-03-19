import { toyService } from "../../src/service/toy-service.js";

export default {
  state: {
    toys: null,
    filterBy: {
      txt: "",
      inStock: "All",
      label: [],
      sort: "Name",
      order: 1,
    },
  },
  getters: {
    toys(state) {
      return state.toys;
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },
    removeToy(state, { id }) {
      console.log("id mutat", id);
      const idx = state.toys.findIndex((toy) => toy._id === id);
      state.toys.splice(idx, 1);
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex((currToy) => currToy._id === toy._id);
      if (idx !== -1) state.toys.splice(idx, 1, toy);
      else state.toys.push(toy);
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    async loadToys({ commit, state }) {
      try {
        const toys = await toyService.query(state.filterBy);
        commit({ type: "setToys", toys });
      } catch (err) {
        console.log("err is:", err);
      }
    },
    setFilterBy({ commit, dispatch }, { filterBy }) {
      commit({ type: "setFilterBy", filterBy });
      dispatch({ type: "loadToys" });
    },
    getToy(context, { id }) {
      return id ? toyService.getById(id) : toyService.getEmptyToy();
    },
    async removeToy({ commit }, { id }) {
      try {
        console.log("step 1", id);
        const resId = await toyService.remove(id);
        console.log("step 2");
        commit({ type: "removeToy", resId });
        console.log("step 3");
      } catch (err) {
        console.log("err is:", err);
      }
    },
    async saveToy({ commit }, { toy }) {
      try {
        await toyService.save(toy);
        commit({ type: "saveToy", toy });
      } catch (err) {
        console.log("err is:", err);
      }
    },
  },
};
