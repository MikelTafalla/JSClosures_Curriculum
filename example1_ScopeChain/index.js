// Here we are going to show the Closure Scope Chain
// Every closure has three scopes:
/////// Local Scope (Own Scope)
/////// Outer Functions Scope
/////// Global Scope

//Global scope. It refers to the lexical environment
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope. function sum4 has access to all outer functions
      return function sum4(d){
        // local scope. The inner scope of sum4
        return a + b + c + d + e;
      }
    }
  }
}

//With console.dir we can see how values are being stored as closures and how scopes increase. That is going to happen until we reach console.dir(s3). When everything is said and thus everything ceases to exist, so the result of the last console.log and console.dir is the same, the result
var s = sum(1);
console.dir(s)
var s1 = s(2);
console.dir(s1)
var s2 = s1(3);
console.dir(s2)
var s3 = s2(4);
console.dir(s3)
console.log(s3) //log 20