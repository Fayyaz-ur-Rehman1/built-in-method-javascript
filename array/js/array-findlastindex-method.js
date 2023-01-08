// var a = [10,20,30,40,50,60,70,80,90,100]
// document.write(a+ "<br>")
// var b = a.findLastIndex(fayyaz)
// function fayyaz(a){
//     return  a <= 50
// }
// document.write(b)

var a = [10,20,30,40,50,60,70,80,90,100]
document.write(a+ "<br>")
var b = a.findLast(fayyaz)
function fayyaz(a){
    return  a < 12
}
console.log(b)