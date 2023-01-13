var a = /t(e)(st(\d?))/g
var b = 'test1test2test3test4test5';
var c = [...b.matchAll(a)]
document.write(c[3])