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
    setTimeout(function() {
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

// 12.
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Output: "Hello"
console.log(c.greeting); // Output: "Hello"

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
