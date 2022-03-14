
import {storageService} from './storage.service.js'
import {utilService} from './util.service.js'

const KEY = 'toysDB';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

var gToys = _createToys()

function query() {
    const toys = JSON.parse(JSON.stringify(gToys))
    return toys;
}

function getById(id) {
    return gToys.find(toy => toy._id === id)
}

function remove(id) {
    const idx = gToys.findIndex(toy => toy._id === id)
    gToys.splice(idx, 1)
    storageService.store(KEY, gToys)
}

function save(toy) {
    const toyToSave = JSON.parse(JSON.stringify(toy))
    const savedToy = (toyToSave._id) ? _update(toyToSave) : _add(toyToSave)

    storageService.store(KEY, gToys)
    return savedToy;
}


function _add(toy) {
    toy._id = utilService.makeId()
    gToys.push(toy)
    return toy
}

function _update(toy) {
    const idx = gToys.findIndex(currToy => currToy._id === toy._id)
    gToys.splice(idx, 1, toy)
    return toy
}

function getEmptyToy(name = '',price = '',labels = [],inStock = true) {
    return {
        _id: '',
        name: '',
        price: 100,
        labels: [],
        createdAt: + new Date(),
        inStock: true
    }
}

function _createToys() {
    var toys = storageService.load(KEY)
    if (!toys || !toys.length) {
        toys = [getEmptyToy('Talking Doll',120,["Doll", "Battery Powered", "Baby"]), getEmptyToy('Barbie',200,["Doll", "Baby"])]
        storageService.store(KEY, toys)
    }
    return toys;
}
