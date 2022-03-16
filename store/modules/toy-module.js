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
      const idx = state.toys.findIndex((toy) => toy._id === id);
      state.toys.splice(idx, 1);
    },
    saveToy(state, { toy }) {
      const toyToSave = toy.data;
      const idx = state.toys.findIndex(
        (currToy) => currToy._id === toyToSave._id
      );
      if (idx !== -1) state.toys.splice(idx, 1, toyToSave);
      else state.toys.push(toyToSave);
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    loadToys({ commit, state }) {
      toyService.query(state.filterBy).then((toys) => {
        commit({ type: "setToys", toys });
      });
    },
    setFilterBy({ commit, dispatch }, { filterBy }) {
      commit({ type: "setFilterBy", filterBy });
      dispatch({ type: "loadToys" });
    },
    getToy(context, { id }) {
      if (id) return toyService.getById(id);
      else return toyService.getEmptyToy();
    },
    removeToy({ commit }, { id }) {
      toyService.remove(id).then(() => {
        commit({ type: "removeToy", id });
      });
    },
    saveToy({ commit }, { toy }) {
      toyService.save(toy).then((toy) => {
        commit({ type: "saveToy", toy });
      });
    },
  },
};
