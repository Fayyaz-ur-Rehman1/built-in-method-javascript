const person = {
    isHuman: false,
    printIntroduction: function() {
      document.write(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  const me = Object.create(person);
  me.name = 'fayyaz'; 
me.isHuman = true;

me.printIntroduction();