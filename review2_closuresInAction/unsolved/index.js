//What is this snippet referred to?
//Walk me through what is happening
//What will be the output in the console?

//function outer
function outer() {
  const a = 10;
  let b = 100;
  
  function inner() {
    let c = 20;
    console.log(`a=${a}, b=${b}, c=${c}`);
    b++;
    c++;
  }

  return inner;
}

const fnFirst = outer();
console.log( typeof fnFirst)
console.log(fnFirst)

const fnSecond = outer(); 
console.log(fnSecond)

// we can inspect the console and verify Scopes Closure
console.dir(fnFirst);

fnFirst(); 
fnFirst(); 
fnFirst(); 
fnSecond();

