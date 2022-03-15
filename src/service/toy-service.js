import { storageService } from "./async-storage-service.js";
import { utilService } from "./util-service.js";
import axios from "axios";

const KEY = "toyDB";

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
};

// DEBUG Technique
// window.theToyService = toyService
// window.ss = storageService
const labels = [
  "On wheels",
  "Box game",
  "Art",
  "Baby",
  "Doll",
  "Puzzle",
  "Outdoor",
];
const gToys = [
  {
    _id: 4001,
    name: "Talkin doll",
    price: 80,
    labels: ["Doll", "Baby"],
    createdAt: "1993-09-21T15:23:03.274Z",
    inStock: true,
  },
  {
    _id: 4002,
    name: "Monopoly",
    price: 240,
    labels: ["Box game"],
    createdAt: "1984-02-11T18:32:57.096Z",
    inStock: false,
  },
  {
    _id: 4003,
    name: "Jigsaw Puzzle",
    price: 1,
    labels: ["Puzzle"],
    createdAt: "1970-11-02T22:17:40.311Z",
    inStock: false,
  },
  {
    _id: 4004,
    name: "Dominoes",
    price: 62,
    labels: ["Box game", "Puzzle"],
    createdAt: "1996-03-20T02:18:47.524Z",
    inStock: true,
  },
  {
    _id: 4005,
    name: "Mr. Potato Head",
    price: 70,
    labels: ["Puzzle", "Baby", "Doll"],
    createdAt: "1979-09-17T17:11:19.294Z",
    inStock: false,
  },
  {
    _id: 4006,
    name: "Miniature model",
    price: 340,
    labels: ["Box game", "Puzzle"],
    createdAt: "1983-12-23T01:49:42.926Z",
    inStock: false,
  },
  {
    _id: 4007,
    name: "Water gun",
    price: 2,
    labels: ["Outdoor"],
    createdAt: "1979-08-28T21:26:15.625Z",
    inStock: false,
  },
  {
    _id: 4008,
    name: "Teddy bear",
    price: 44,
    labels: ["Doll", "Baby"],
    createdAt: "1973-01-03T01:26:27.384Z",
    inStock: true,
  },
  {
    _id: 4009,
    name: "Game Boy",
    price: 30,
    labels: ["Outdoor", "Box game"],
    createdAt: "1996-11-10T16:18:19.316Z",
    inStock: true,
  },
  {
    _id: 4010,
    name: "Hot Wheels",
    price: 84,
    labels: ["On wheels", "Outdoor"],
    createdAt: "1991-10-19T03:18:21.612Z",
    inStock: false,
  },
  {
    _id: 4011,
    name: "Rainbow Loom",
    price: 71,
    labels: ["Art"],
    createdAt: "1997-05-31T05:51:45.125Z",
    inStock: false,
  },
  {
    _id: 4012,
    name: "Troll doll",
    price: 70,
    labels: ["Baby", "Doll"],
    createdAt: "1971-08-22T04:29:02.523Z",
    inStock: true,
  },
  {
    _id: 4013,
    name: "Lego",
    price: 35,
    labels: ["Box game", "Art", "Puzzle"],
    createdAt: "1987-05-06T15:30:57.021Z",
    inStock: false,
  },
  {
    _id: 4014,
    name: "Polly Pocket",
    price: 43,
    labels: ["Box game", "Art", "Baby", "Doll"],
    createdAt: "1972-06-24T17:32:22.853Z",
    inStock: true,
  },
  {
    _id: 4015,
    name: "Slot cars",
    price: 48,
    labels: ["On wheels", "Outdoor"],
    createdAt: "1984-09-23T20:16:47.684Z",
    inStock: false,
  },
  {
    _id: 4016,
    name: "Pin Art",
    price: 2,
    labels: ["Box game", "Art"],
    createdAt: "1997-01-09T05:28:24.007Z",
    inStock: true,
  },
  {
    _id: 4017,
    name: "Twister",
    price: 17,
    labels: ["Box game", "Puzzle", "Outdoor"],
    createdAt: "1980-06-17T21:52:28.112Z",
    inStock: false,
  },
  {
    _id: 4018,
    name: "Battleship",
    price: 90,
    labels: ["Puzzle", "Outdoor", "Box game"],
    createdAt: "1974-12-11T02:48:26.781Z",
    inStock: true,
  },
  {
    _id: 4019,
    name: "Playmobil",
    price: 22,
    labels: ["Box game", "Doll", "Puzzle"],
    createdAt: "1994-04-01T10:29:55.994Z",
    inStock: false,
  },
  {
    _id: 4020,
    name: "Simon",
    price: 50,
    labels: ["Box game", "Outdoor", "Puzzle"],
    createdAt: "1994-06-04T10:04:07.917Z",
    inStock: true,
  },
];
const BASE_URL = "http://localhost:3030/";
const TOY_URL = "api/toy/";
function query(filterBy) {
  // return storageService.query(KEY).then((toys) => {
  //   if (!toys || !toys.length) {
  //     toys = gToys;
  //     utilService.saveToStorage(KEY, gToys);
  //   }
  //   return toys;
  // });
  console.log("filterBy from service", filterBy);
  return axios
    .get(BASE_URL + TOY_URL, { params: filterBy })
    .then((res) => res.data)
    .catch((err) => console.log("error:", err));
}

function getById(id) {
  return storageService.get(KEY, id);
}

function remove(id) {
  return storageService.remove(KEY, id);
}

function save(toy) {
  const toyToSave = JSON.parse(JSON.stringify(toy));
  const savedToy = toyToSave._id
    ? storageService.put(KEY, toy)
    : storageService.post(KEY, toy);
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
