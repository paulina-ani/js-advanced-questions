// What's the output?
// 1.
/*function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}*/
//sayHi();
// Output: undefinded and Reference Error

// 2. Which output is the last?
/*setTimeout(function() {
  console.log("first");
}, 0);
console.log("second");
console.log("third");
console.log("fourth");
/*Output: second
          third
          fourth
          first  

function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7));

// 3.
for (var i = 0; i <= 3; i++) {
  setTimeout(() => console.log("var:", i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 1);
}

for (let i = 0; i < 3; ++i) {
  setTimeout(() => console.log("let2:", i), 1);
}

/* Output: 3 3 3
           0 1 2 
*/
/*
const s = new Date().getSeconds();

// 4.
setTimeout(function() {
  // zwraca "2", co oznacza, że callback nie zostaje wywołany bezpośrednio po upływie 500 millisekund.
  console.log(
    "Uruchomiono po upływie " + (new Date().getSeconds() - s) + " sekund"
  );
}, 1000);

while (true) {
  if (new Date().getSeconds() - s >= 6) {
    console.log("Ok, zapętlono na 2 sekundy");
    break;
  }
}

// 5.
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    return Math.PI * this.radius;
  }
};

console.log(shape.diameter());
console.log(shape.perimeter());
/* Output: 20
           NaN


// 6.
const shape2 = {
  radius: 10,
  diameter() {
    return this;
  },
  perimeter: () => {
    return this;
  }
};

console.log(shape2.diameter());
console.log(shape2.perimeter());*/
/* Output: {radius: 10, diameter: ƒ, perimeter: ƒ}
           Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …} 


// 7.
/*var object = {
  id: 10,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

object.counter();*/
// Output: 10

// 8.
/*var object2 = {
  id: 10,
  counter: function counter() {
    setTimeout(
      function() {
      console.log(this.id);
    }, 1000); // zmiana kontekstu this
  }
};
object2.counter();*/
// Output: undefined

//9.
/*var object3 = {
  id: 10,
  counter: function counter() {
    setTimeout(
      function() {
        console.log(this.id);
      }.bind(this),
      1000
    );
  }
};
object3.counter();*/
// Output: 10

// 10.
console.log(+true); // 1
console.log(!"Lydia"); // false

// 11.
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
//console.log(mouse.bird.size); // typeError
console.log(mouse[bird.size]); // true
console.log(mouse[`${bird.size}`]); // true
console.log(bird["size"]);
console.log(typeof bird["size"]);
console.log(mouse[bird["size"]]); // true
console.log(mouse.name); // Mickey
console.log(mouse["small"]); // true
console.log(mouse.size); //undefined

// 12a.
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log("c:", d.greeting); // Output: "Hello"
console.log("d:", c.greeting); // Output: "Hello"

// 12b.
let e = 2;
let f;

f = e;
e = 3;
console.log("e", e); // 3
console.log("f", f); // 2

// 12c.
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log("");
console.log(typeof symbol1); // symbol
console.log(typeof symbol2); // symbol
console.log(typeof symbol3); // symbol
console.log(symbol1); // SYmbol()
console.log(symbol2); // Symbol(42)
console.log(symbol3); // Symbol(foo)
console.log(Symbol("foo") === Symbol("foo")); // false

// 12d.
const re = new RegExp("\\w+");
console.log(re); // /\w+/

const re2 = new RegExp("a+b", "i");
console.log(re2); // /a+b/i/

const re3 = new RegExp("\\a+b", "i");
console.log(re3); // /a+b/i/

// 13.
let aa = 3;
let bb = new Number(3);
let cc = 3;
let dd = Number(3);

console.log("aa == bb", aa == bb); // true
console.log("aa === bb", aa === bb); // false
console.log("bb === cc", bb === cc); // false
console.log("aa === cc", aa === cc); // true
console.log("aa == dd", aa == dd); // true
console.log("aa === dd", aa === dd); // true

// 14.
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
//console.log(freddie.colorChange("orange")); //TypeError

// 15.
class Chameleon2 {
  changeColor(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const zoya = new Chameleon2({ newColor: "purple" });
console.log(zoya.changeColor("orange")); // orange

// 16.
let greeting;
grettign = {}; // Typo!
// console.log(greetign); //ReferenceError: greetign is not defined
console.log(greeting);

// 17.
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
console.log(bark.animal); //dog

// 18.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// console.log(member.getFullName()); // TypeError

// 19.
function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member2 = new Person2("Lydia", "Hallie");
Person2.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
console.log(member2);
/* Person2 {
  firstName: "Lydia",
  lastName: "Hallie
}*/

console.log(member2.getFullName()); // Lydia Hallie

// 20.
let o = {
  a: 2,
  m: function(b) {
    return this.a + 1;
  }
};
console.log(o.m()); // 3

let p = Object.create(o);

p.a = 12;
console.log(p.m()); // 13

// 21
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const lydia = new Person3("Lydia", "Hallie");
/* Person3 {
  firstName: "Lydia",
  lastName: "Hallie",
} */
const sarah = Person3("Sarah", "Smith"); // undefined

console.log(lydia);
console.log(sarah);

/* 22. What are the three phases of event propagation? 

Answer: Capturing > Target > Bubbling
*/

/* 23. All object have prototypes

Answer: false
*/

//24.
function sum(a, b) {
  return a + b;
}

console.log(sum(1, "2")); //"12"

// 25.
let number = 0;
console.log("number:", number); // 0
console.log("number++:", number++); // 0
console.log("++number:", ++number); // 2
console.log("number:", number); // 2
console.log("");

let number2 = 0;
console.log("number2:", number2); // 0
console.log("number2++:", number2++); // 0
console.log("number2:", number2); // 1
console.log("");

let number3 = 0;
console.log("number3:", number3); // 0
console.log("number3++:", ++number3); // 1
console.log("number3:", number3); // 1
console.log("");

let number4 = 0;
console.log("number4:", number4); // 0
console.log("number4++:", ++number4); // 1
console.log("++number4:", ++number4); // 2
console.log("number4:", number4); // 2
console.log("");

let number5 = 0;
console.log("number5:", number5); // 0
console.log("number5++:", number5++); // 0
console.log("++number5:", number5++); // 1
console.log("number5:", number5); // 2
console.log("");
