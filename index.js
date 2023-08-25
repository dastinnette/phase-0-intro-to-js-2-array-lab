const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat) {
    cats.push(cat)
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}

function destructivelyRemoveLastCat(cat) {
    cats.pop(cat)
}

function destructivelyRemoveFirstCat(cat) {
    cats.shift(cat)
}

function appendCat(cat) {
    let newCats = cats.slice()
    newCats.push(cat)
    return newCats
}

function prependCat(cat) {
    let newCats = cats.slice()
    newCats.unshift(cat)
    return newCats 
}

function removeLastCat() {
    let newCats = cats.slice(0, cats.length - 1)
    return newCats
}

function removeFirstCat() {
    let newCats = cats.slice(1, cats.length) 
    console.log(newCats)
    return newCats 
}