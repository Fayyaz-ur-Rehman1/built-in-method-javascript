const aaa = {
    fname : 'fayyaz'
}
Object.preventExtensions(aaa)
Object.defineProperty(aaa,'lastname',{
    value : 'KHILJI'
})
console.log(aaa.lastname)

const bb = {
    lname : 'khilji'
}
Object.preventExtensions(bb)
Object.defineProperty(bb,"fayyaz",{
    value : "urrehman"
})
console.log(bb)