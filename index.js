let cats = ["Milo", "Otis", "Garfield"]

// function addCats() {
//     const catsArray = [...cats]
//     catsArray.unshift("Garfield")
//     catsArray.unshift("Otis")
//     catsArray.unshift("Milo")
//     return catsArray
// }

// function addCatsWithPush() {
//      cats.push("Milo", "Otis", "Garfield")
//     return cats

// }

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    let newArr = [...cats]
    newArr.push(name)
    return newArr
}

function prependCat(name) {
    let newArr = [...cats]
    newArr.unshift(name)
    return newArr
}

function removeLastCat() {
    let newArr = [...cats]
    newArr.pop()
    return newArr
}

function removeFirstCat() {
    let newArr = [...cats]
    newArr.shift()
    return newArr
}