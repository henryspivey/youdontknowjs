// Scope 1
function foo(a) {
  // Scope 2
  var b= a*2;
  function bar(c) {
    // Scope 3
    console.log(a,b,c);
  }
  bar(b*3);
}
foo(2);


// Cheating lexical scope
// use eval, takes a string as an argument and treats the contents of the string like code
function foo(str, a){
  eval(str); // cheating lexical scope
  console.log(a, b);
}
var b = 2;
foo("var b = 3;", 1);

// using strict
function foo(str) {
  "use strict";
  eval(str);
  console.log(a)
}
foo("var a = 2");
