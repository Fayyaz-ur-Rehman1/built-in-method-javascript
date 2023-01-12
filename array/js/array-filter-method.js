var a = [1,20,3,4,50,6,70,8,9,10];
var b = a.filter(fay);
function fay(a){
  return a > 7
}
document.write(b)

document.write("<br>")

var d = [10,20,30,40,50,60,70,80,90]
var c = d.filter(function(a){
  return a > 34
}) 
document.write(c)