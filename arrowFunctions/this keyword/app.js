class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      // doesn't redefine 'this' on where the function is called. 
      console.log('Arrow: ' + this.name);
    }, 100)
  }

  printNameFunction() {
    setTimeout(function() {
      // define 'this' base on where the function is called. (mostly on global) // this mean it will log nothing
      console.log('Function: ' + this.name);
    })
  }
}

let person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();
console.log(this.name);