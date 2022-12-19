var a = 'fayyaz'
var b = 'fayyaz'
document.write(a.length === b.length)

var aa = a.normalize('NFD')
var bb = a.normalize('NFD')
document.write(aa.length === bb.length)