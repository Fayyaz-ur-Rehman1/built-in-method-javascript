var d = {
 aa : 55,
 fayyaz : 17,
 fayyaz : "khilji",
 khilji : 'fayyaz'
}

const val = Object.freeze(d)
val.fname = 'shanwaz'
console.log(d)

const e = {
    o : 'oye',
    b : 'baby',
    c : 'chocklate',
    k : 'khalo'
}
const c = Object.freeze(e)
c.fname = 'fayyazkhilji'
c.lname = 'urrehman'
console.log(c) 