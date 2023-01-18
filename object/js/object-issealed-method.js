var a = {
    aa : 11223
}
Object.seal(a)
a.aa = "fayyaz"
console.log(Object.isSealed(a))