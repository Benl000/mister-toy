import { storageService } from "./async-storage-service.js";
import { utilService } from "./util-service.js";

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

const gToys = [
  {
    _id: 4001,
    name: "nec tortor",
    price: 84,
    type: "Adult",
    createdAt: "1993-09-21T15:23:03.274Z",
    inStock: true,
  },
  {
    _id: 4002,
    name: "nec porttitor",
    price: 33,
    type: "Adult",
    createdAt: "1984-02-11T18:32:57.096Z",
    inStock: false,
  },
  {
    _id: 4003,
    name: "pharetra rutrum",
    price: 1,
    type: "Educational",
    createdAt: "1970-11-02T22:17:40.311Z",
    inStock: false,
  },
  {
    _id: 4004,
    name: "sed elit",
    price: 62,
    type: "Adult",
    createdAt: "1996-03-20T02:18:47.524Z",
    inStock: true,
  },
  {
    _id: 4005,
    name: "egestas nullam",
    price: 70,
    type: "Educational",
    createdAt: "1979-09-17T17:11:19.294Z",
    inStock: false,
  },
  {
    _id: 4006,
    name: "rutrum sollicitudin",
    price: 81,
    type: "Educational",
    createdAt: "1983-12-23T01:49:42.926Z",
    inStock: false,
  },
  {
    _id: 4007,
    name: "dolor sed",
    price: 2,
    type: "Adult",
    createdAt: "1979-08-28T21:26:15.625Z",
    inStock: false,
  },
  {
    _id: 4008,
    name: "pulvinar sagittis",
    price: 44,
    type: "Adult",
    createdAt: "1973-01-03T01:26:27.384Z",
    inStock: true,
  },
  {
    _id: 4009,
    name: "et eget",
    price: 30,
    type: "Adult",
    createdAt: "1996-11-10T16:18:19.316Z",
    inStock: true,
  },
  {
    _id: 4010,
    name: "molestie sit",
    price: 84,
    type: "Educational",
    createdAt: "1991-10-19T03:18:21.612Z",
    inStock: false,
  },
  {
    _id: 4011,
    name: "tortor odio",
    price: 71,
    type: "Funny",
    createdAt: "1997-05-31T05:51:45.125Z",
    inStock: false,
  },
  {
    _id: 4012,
    name: "amet elit",
    price: 70,
    type: "Educational",
    createdAt: "1971-08-22T04:29:02.523Z",
    inStock: true,
  },
  {
    _id: 4013,
    name: "porttitor et",
    price: 35,
    type: "Adult",
    createdAt: "1987-05-06T15:30:57.021Z",
    inStock: false,
  },
  {
    _id: 4014,
    name: "vestibulum augue",
    price: 43,
    type: "Adult",
    createdAt: "1972-06-24T17:32:22.853Z",
    inStock: true,
  },
  {
    _id: 4015,
    name: "dolor pulvinar",
    price: 48,
    type: "Funny",
    createdAt: "1984-09-23T20:16:47.684Z",
    inStock: false,
  },
  {
    _id: 4016,
    name: "pretium pulvinar",
    price: 2,
    type: "Funny",
    createdAt: "1997-01-09T05:28:24.007Z",
    inStock: true,
  },
  {
    _id: 4017,
    name: "morbi vitae",
    price: 17,
    type: "Funny",
    createdAt: "1980-06-17T21:52:28.112Z",
    inStock: false,
  },
  {
    _id: 4018,
    name: "sit tempor",
    price: 90,
    type: "Educational",
    createdAt: "1974-12-11T02:48:26.781Z",
    inStock: true,
  },
  {
    _id: 4019,
    name: "adipiscing amet",
    price: 22,
    type: "Educational",
    createdAt: "1994-04-01T10:29:55.994Z",
    inStock: false,
  },
  {
    _id: 4020,
    name: "mi elit",
    price: 50,
    type: "Funny",
    createdAt: "1994-06-04T10:04:07.917Z",
    inStock: true,
  },
];

function query() {
  return storageService.query(KEY).then((toys) => {
    if (!toys || !toys.length) {
      toys = gToys;
      utilService.saveToStorage(KEY, gToys);
    }
    return toys;
  });
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
