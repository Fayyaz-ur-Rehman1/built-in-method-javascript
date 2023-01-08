 var a = [1,2,3,4,5];
 document.write(a.reduce(fayyaz))

 function fayyaz(a,b){
    return a * b
 }
 document.write("<br>")
 
 var c = [1,2,3,4,5];
 document.write(c.reduce(khilji))

 function khilji(c,d){
    return c + d
 }

 document.write("<br>")

 var a = [1,2,3,43,5,46]
 var b = a.reduce(function(a,b){
   return a * b
 })
 document.write(b)

document.write("<br>")

 var a = [10.5,3.4,1.1,6.7];
 var b = a.reduce(function(a,b){
   return a + b
 })
 document.write(b)