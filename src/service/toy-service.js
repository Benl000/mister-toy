import axios from "axios";
import { httpService } from "./http.service.js";

const KEY = "toyDB";
const ENDPOINT = "toy";

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
  return await httpService.get(ENDPOINT, filterBy);
}

async function getById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`);
}

async function remove(id) {
  return await httpService.delete(`${ENDPOINT}/${id}`);
}

async function save(toy) {
  return toy._id
    ? await httpService.put(`${ENDPOINT}/${toy._id}`, toy)
    : await httpService.post(ENDPOINT, toy);
}

function getEmptyToy(name = "", price = 0, labels = [], inStock = true) {
  return {
    name,
    price,
    labels,
    createdAt: +new Date(),
    inStock,
  };
}
