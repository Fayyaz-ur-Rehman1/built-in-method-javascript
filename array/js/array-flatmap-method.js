var a = [3,2,[3,4],5,[6,7],8,[9,10]]
var b =  a.flatMap(fayyaz)

function fayyaz(a){
    return a > 2
}
console.log(b)