import axios from "axios";

const KEY = "toyDB";

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
};
const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "/api/toy"
    : "//localhost:3030/api/toy";

function query(filterBy) {
  return axios
    .get(BASE_URL, { params: filterBy })
    .then((res) => res.data)
    .catch((err) => console.log("error:", err));
}

function getById(id) {
  return axios.get(BASE_URL + id).then((res) => res.data);
}

function remove(id) {
  return axios.delete(BASE_URL + id);
}

function save(toy) {
  const toyToSave = JSON.parse(JSON.stringify(toy));
  const savedToy = toyToSave._id
    ? axios.put(BASE_URL + toy._id, toy)
    : axios.post(BASE_URL, toy);
  return savedToy;
}

function getEmptyToy(name = "", price = "", labels = [], inStock = true) {
  return {
    _id: "",
    name,
    price,
    labels,
    createdAt: +new Date(),
    inStock,
  };
}
