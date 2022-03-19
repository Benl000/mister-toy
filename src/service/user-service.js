import { utilService } from "./util-service.js";
import axios from "axios";
axios.defaults.withCredentials = true;

const KEY = "loggedInUser";
const AUTH_URL = "//localhost:3030/api/auth/";

export const userService = {
  login,
  logOut,
  signUp,
};

async function login({ username, password }) {
  try {
    const res = await axios.post(AUTH_URL + "login", { username, password });
    utilService.saveToStorage(KEY, res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function logOut({ username, password }) {
  try {
    const res = await axios.get(AUTH_URL, { body: { username, password } });
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function signUp({ username, password }) {
  try {
    const res = await axios.get(AUTH_URL, { body: { username, password } });
    return res.data;
  } catch (err) {
    throw err;
  }
}
