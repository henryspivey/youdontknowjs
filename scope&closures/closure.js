function foo() {
  var a  = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}

var bax = foo(); // closure happens here because it can still access a
bax();



function foo(){
  var a = 2;
  function baz() {
    console.log(a);
  }
  bar(baz)
}

function bar(fn) {
  fn()
}

// iife closure
for(var i=1, i<=5, i++) {
  (function(j){
    // creates new scope per iteration
    setTimeout(function timer(){
      console.log(j)
    }, j*1000)
  })(i);
}

for(let i =1; i<=5, i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000);
}

// modules
function coolModule() {
  var something = "cool";
  var another [ 1, 2, 3]
  function doSomething() {
    console.log(something)
  }
  function doAnother() {
    console.log(another.join("!"))
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}


// singleton module
var foo = (function coolModule{
  var something = "cool";
  var another [ 1, 2, 3]
  function doSomething() {
    console.log(something)
  }
  function doAnother() {
    console.log(another.join("!"))
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})

foo.doSomething()

// change modules
var foo = (function coolModule(id) {
  function change() {
    publicApi.identify= identify2
  }
  function identify1() {
    console.log(id)
  }
  function identify2() {
    console.log(id.toUpperCase())
  }
  var publicApi = {
    change: change,
    identify: identify1
  }
  return publicApi;
})("Henry")

foo.identify()
foo.change()
foo.identify()
