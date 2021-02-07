const add = function(x) {
    //we nest function Y, which due to its lexical scope has access to X even though after return. Thanks closures
    return function(y) {
        //we can add X + Y
        return x + y;

    }
}

const add10 = add(10); // 10 within brackets is referring to the x value, always fixed in this case

console.log( add10(10) ); //we called the function add10, which calls add function with value x=10. Between brackets we transfer the value of Y. Logs 20

console.log( add10(20) ) // logs 30
console.log( add10(30) ) // logs 40
