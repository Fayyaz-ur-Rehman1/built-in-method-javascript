var a = [1,2,3,4,5,6,7,8,9,10]
var b = a.map( fayyaz);
var c = a.map(function (eachVal ){
    return eachVal + 1
});
var d = a.map((eachVal) => {
    return eachVal +3
})
document.write(b)
document.write("<br>")

function fayyaz(a){
    return a * 3
}
// function khan(a){

// }
// khan(1)

var a = {
    b : "khilji",
    c: () => {
        console.log('hello');
    } 
}

a.c();


var a = [1,2,3,4,5,6,7,8,9,10]
var c = a.map(function (eachVal ){
    return eachVal + 1
});
document.write(c)