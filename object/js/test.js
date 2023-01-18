var a = {
    fname : 'fayyaz',
    lname : 'urrehman',
    age : '19',
    favepisode : ['Osman','ertugrul','sultan alluoddin'],
    salary : function(){
        return 100000;
    },
fullname : function(){
    return this.fname + ' ' + this.lname
},
living : {
    city : 'jodphur',
    country : 'india',
}
}
document.write(a.age + "<br>")
document.write(a.favepisode[1] +"<br>")
document.write(a.salary()+ '<br>')
document.write(a.fullname() + "<br>")
document.write(a.living.country + "<br>")

document.write("<hr>")

var b = new Object();
b.firstname = 'fayyaz';
b.lastname = 'khilji';
b.age = 19;
console.log(b)
document.write(b.firstname +"<br>")
document.write(b.lastname + "<br>")
document.write(b.age)

document.write("<hr>")

var c = [
    {myname : 'fayyaz', age : 19},
    {myfriendname : 'danish', age : 17},
    {mysecondfriendname : 'uzair', age : 18},
]
console.log(c)
for(var d = 0 ; d < c.length ; a++){
    document.write(c[d].myname + " ")
}

