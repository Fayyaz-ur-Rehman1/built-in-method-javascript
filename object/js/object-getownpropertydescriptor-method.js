var a = {
    name : "fayyaz",
    writable : false
}
a.name = 'shanwaz'
var b = Object.getOwnPropertyDescriptor(a,"name")
console.log(a)