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
    ? "/api/toy/"
    : "//localhost:3030/api/toy/";

async function query(filterBy) {
  try {
    const res = await axios.get(BASE_URL, { params: filterBy });
    return res.data;
  } catch (err) {
    console.log("error:", err);
  }
}

async function getById(id) {
  try {
    const res = await axios.get(BASE_URL + id);
    return res.data;
  } catch {
    console.log("error:", err);
  }
}

function remove(id) {
  return axios.delete(BASE_URL + id);
}

function save(toy) {
  console.log("toy", toy);
  const savedToy = toy._id
    ? axios.put(BASE_URL + toy._id, toy)
    : axios.post(BASE_URL, toy);
  return savedToy;
}

function getEmptyToy(name = "", price = "", labels = [], inStock = true) {
  return {
    name,
    price,
    labels,
    createdAt: +new Date(),
    inStock,
  };
}
