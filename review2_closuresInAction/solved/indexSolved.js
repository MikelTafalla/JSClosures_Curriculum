//Professor walks through what is happening

function outer() {
  const a = 10;
  let b = 100;
  
  //inner has access to the outer function values and it will keep them until everything is processed
  function inner() {
    let c = 20;
    console.log(`a=${a}, b=${b}, c=${c}`);
    b++;
    c++;
  }

  return inner;
}

// outer() invoked the first time
// fnFirst is now a function inner and not a value.

const fnFirst = outer();
// console.log( typeof fnFirst)
// console.log(fnFirst)
// outer() invoked the second time but assigned to different variable
const fnSecond = outer(); 
// console.log(fnSecond).  So far everything, both variables, are the same

// we can inspect the console and verify Scopes Closure
console.dir(fnFirst);

fnFirst(); // fnFirst invoked for the first time - only "b" is incremented -> a=10, b=100, c=20
fnFirst(); // fnFirst invoked for the second time - only "b" is incremented -> a=10, b=101, c=20
fnFirst(); // fnFirst invoked for the third time - only "b" is incremented -> a=10, b=102, c=20
fnSecond(); // fnSecond invoked for the FIRST time - only "b" is incremented -> a=10, b=100, c=20


// link to blog explaining case on detail https://igorluczko.medium.com/closures-in-javascript-in-simple-terms-and-real-life-examples-b997c4acdc4b
