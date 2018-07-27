// values and types
var a;
typeof a; // undefined

a = "hello world";
typeof a; // string

a= null
typeof a // object
// typeof asks for the type of value in a


var obj = {
  a: "hello world",
  b: 42
}

var b = "a";
console.log(obj[b]);
console.log(obj["b"]);


// functions
function foo() {
  return 42;
}

foo.bar = "hello henry";

console.log(foo); // function
console.log(foo()); // number

// toUpperCase
// Uses String native to pair with string primitive

// Coercion
// Explicit coercion means that you can see from the code that a conversion will occur
var a = "42";
var b = Number(a);
console.log(a,b);

// Implicit means the conversion is not obvious
var a = "42";
var b = a * 1;

console.log(a,b);

// truthy vs falsy

// The specific list of “falsy” values in JavaScript is as follows:

// "" (empty string)

// 0, -0, NaN (invalid number)

// null, undefined

// false

// Any value that’s not on this “falsy” list is “truthy.” Here are some examples of those:

// "hello"

// 42

// true

// [ ], [ 1, "2", 3 ] (arrays)

// { }, { a: 42 } (objects)

// function foo() { .. } (functions)

// Equality
// == checks for value equality with coercion allowed
// === checks for value equality with coercion not allowed

var a = "42";
var b = 42;

console.log(a == b);
console.log(a === b);


// Scopes
var a = 2;
foo(); // works because foo() is hoisted

function foo() {
  a = 3;
  console.log(a);
  var a;
}

console.log(a)

// Nested Scopes
function foo() {
  var a = 1;
  function bar() {
    var b = 2;
    function baz() {
      var c = 3;
      console.log(a,b,c);
    }
    baz();
    console.log(a,b);
  }
  bar();
  console.log(a);
}
foo();

// using let
function foo() {
  var a = 1;
  if(a >= 1) {
    let b = 2; // b belongs to the if statement
    while(b < 5) {
      let c = b*2; // c belongs to the while loop
      b++;
      console.log(a+c);
    }
  }
}


foo();


// switch statements
switch(a) {
  case 2:
    // stuff
    break;
  case 3:
  case 4:
    // stuff
    break
  default:

}

// Closure
function makeAdder(x) {
  // x is an inner variable
  // inner function add() uses x
  function add(y) {
    return y+x;
  };
  return add;
}


var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(3));
console.log(plusOne(41));
console.log(plusTen(30));


// Modules
function User() {
  var username, password;
  function doLogin(user,pw) {
    username = user;
    password = pw;
    // stuff
  }
  var publicApi = {
    login: doLogin
  };
  return publicApi;
}

var fred = User();
fred.login('fred', 'testing');

// this keyword
function foo() {
  console.log(this.bar);
}

var bar = "global";
var obj1 = {
  bar: "obj1",
  foo: foo
};
var obj2 = {
  bar: "obj2"
};

console.log(foo());
console.log(obj1.foo());
console.log(foo.call(obj2));
console.log(new foo());


// Prototypes
// used when referencing a property on an object.  If the reference isn't found,
// JS will automatically use that object's internal prototype reference to find another object to look
// for the property
var foo = {
  a : 42
};

var bar = Object.create(foo);
bar.b = "hello world";
console.log(bar.b);
console.log(bar.a);


// Strict Mode
function foo() {
  "use strict";
  // in strict mode
  function bar() {
    // in strict mode
  }
}
