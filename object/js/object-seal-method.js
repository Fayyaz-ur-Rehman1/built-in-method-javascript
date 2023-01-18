var a = {
    aa : 1111111
}
Object.seal(a)
a.aa = 11
a.aa = "fayyaz"
a.fanme = "khilji"
console.log(a)