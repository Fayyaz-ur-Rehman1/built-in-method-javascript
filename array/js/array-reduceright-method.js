var a = [[1,2],[3,4],[5,6]]
var b = a.reverse()
var fay = a.reduceRight((b,c) => b.concat(c));
console.log(fay)