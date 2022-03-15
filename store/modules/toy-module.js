import { toyService } from "../../src/service/toy-service.js";

export default {
  state: {
    toys: null,
    currentFilterBy: null,
  },
  getters: {
    toys(state) {
      return state.toys;
    },
    toysForDisplay(state) {
      const storeFilter = state.currentFilterBy;
      if (!storeFilter) return state.toys;
      const regex = new RegExp(storeFilter.txt, "i");
      if (storeFilter.inStock === "All") {
        return state.toys.filter((toy) => regex.test(toy.name));
      } else if (storeFilter.inStock === "In") {
        return state.toys.filter((toy) => regex.test(toy.name) && toy.inStock);
      } else if (storeFilter.inStock === "Out") {
        return state.toys.filter((toy) => regex.test(toy.name) && !toy.inStock);
      }
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
      const idx = state.toys.findIndex((currToy) => currToy._id === toy._id);
      if (idx !== -1) state.toys.splice(idx, 1, toy);
      else state.toys.push(toy);
    },
    changedFilter(state, { filterBy }) {
      console.log("filterBy is:", filterBy);
      state.currentFilterBy = filterBy;
    },
  },
  actions: {
    loadToys({ commit }) {
      toyService.query().then((toys) => {
        commit({ type: "setToys", toys });
      });
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
      console.log("toy is:", toy);
      toyService.save(toy).then((toy) => {
        commit({ type: "saveToy", toy });
      });
    },
    changedFilter({ commit }, { filterBy }) {
      commit({ type: "changedFilter", filterBy });
    },
  },
};
