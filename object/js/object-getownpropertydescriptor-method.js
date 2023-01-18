var a = {
    fayyaz : "fayyaz",
    country : 'india'
}
var b = Object.getOwnPropertyDescriptor(a,"fayyaz",)
console.log(b.configurable)

var d = {
    khilji : 'danish',
    country : 'america'
}
var e = Object.getOwnPropertyDescriptor(d,'khilji',)
console.log(e.configurable)

var f = {
    fname : 'fayyaz',
    lname : 'khilji',
}
var g = Object.getOwnPropertyDescriptor(d,"firstname",)
console.log(g.configurable)