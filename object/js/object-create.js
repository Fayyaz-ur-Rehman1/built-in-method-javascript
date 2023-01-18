const person = {
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman} ${this.study}`); // temporate literals
    }
  };
  const me = Object.create(person);
  me.name = 'fayyaz'; 
me.isHuman = true;
me.study = "i am study in class 11th"

me.printIntroduction();

var a = {
  a : 'fayyaz',
  b: 'khilji'
}
var c = Object.create(a)
c.class = '11th'
c.school = 'molana'
c.sub = 'commerce'

console.log(c)