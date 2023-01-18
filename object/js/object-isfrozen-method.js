var a = {
    aa : 12345
}
Object.freeze(a)
console.log(Object.isFrozen(a))

var b = {
    bb : 'khilji'
}
Object.freeze(b)
console.log(Object.isFrozen(b))

var c = {
    cc : 'fayyaz',
}
console.log(Object.isFrozen(c))