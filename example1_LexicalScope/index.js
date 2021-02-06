// Last week we saw a little bit about scopes, and if we remember:

//The scope is the space that rules the accessibility of variables.

//But now, for closure the important concept to understand is the lexical scope.

//In a nutshell, the lexical scoping means that inside the inner scope you can access variables of its outer scopes.

//It’s called lexical (or static) because the engine determines (at lexing time) the nesting of scopes just by looking at the JavaScript source code, without executing it.

const globalVar = 0;

function outerScope() {
  const outerVar = 1;
  console.log(globalVar); // logs 0

  function innerOfOurterScope(){
    const innerVar = 2;
    console.log(outerVar, globalVar); // logs 1, 0
    console.dir(innerOfOurterScope)

    function innerOfinner() {
      console.log(innerVar, outerVar, globalVar) // logs 2, 1, 0
      console.dir(innerOfinner)
    }
    innerOfinner()
  }
  innerOfOurterScope()

}
outerScope()

//Ok, so Having seen this about scopes, we can now see closures. Closures happen on functions; functions that can return other functions.

function getGreet() {
  return function() {
      return 'Hi, Mikel!';
  };
}

//So getGreeter returns a function. If you want to be greeted, you neeed to call it twice
console.log( getGreet() )
console.log( getGreet()() )

//So now let's make it dynamic

function getGreeter(name) {
  return function(){
    return `Hi, ${name}!`;
  }
}

const greetMikel = getGreeter('Mikel');
const greetJulissa = getGreeter('Julissa');

console.log( greetMikel() ); // Hi, Mikel!
console.log( greetJulissa() ); // Hi, Julissa!

//We Used a Closure
//The outer function takes name, but the inner function uses it later. This is the power of closures.

//When a function returns, its lifecycle is complete. It can no longer perform any work, and its local variables are cleaned up.

//Unless it returns another function. If that happens, then the returned function still has access to those outer variables, even after the parent passes on.

console.dir( greetJulissa ); // Hi, Julissa!


