// What will the following code output? Why? Any ideas on how to fix it?

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

//Answer 1:
// Index: 4, element: undefined(printed 4 times) after 3 seconds.
//The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.arr[4] does not exist, which is why you get undefined.

// Answer Fix:
// Pass needed parameters into inner function

const arr1 = [10, 12, 15, 21];
for (var i = 0; i < arr1.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

//Read whole article https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703