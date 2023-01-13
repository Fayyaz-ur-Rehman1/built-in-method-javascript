var a = 'fayyaz'
var b = 'fayaz'
document.write(a.length === b.length)
document.write("<br>")
var aa = a.normalize('NFD')
var bb = a.normalize('NFD')
document.write(aa.length === bb.length)
document.write("<br>")
var c = a.normalize("NFKC")
var d = a.normalize("NFKC")
document.write(c.length=== d.length)