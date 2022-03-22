import axios from "axios";

const KEY = "reviewDB";

export const reviewService = {
  query,
  getById,
  remove,
  save,
  getEmptyReview,
};

const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "/api/review/"
    : "//localhost:3030/api/review/";

async function query(filterBy) {
  console.log("1:", filterBy);
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

function save(review) {
  console.log("review", review);
  const savedReview = review._id
    ? axios.put(BASE_URL + review._id, review)
    : axios.post(BASE_URL, review);
  return savedReview;
}

function getEmptyReview(name = "", price = 0, labels = [], inStock = true) {
  return {
    name,
    price,
    labels,
    createdAt: +new Date(),
    inStock,
  };
}
