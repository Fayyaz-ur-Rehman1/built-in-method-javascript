var a = {
    aa : 1000
}
Object.freeze(a)
a.aa = 55
console.log(a);