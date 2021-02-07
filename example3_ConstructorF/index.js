// Remember the difference between global and local scope

// Let's see the first example through a constructor function

function Hamburger(kind) {
    this.kind = kind;
}

//At this point, this.kind is undefined
console.log("this.kind = " + this.kind)

//Now let's create a new burger. Uncomment lines 13 and 15
// var cheeseburger = new Hamburger("Cheeseburger")

// console.log(cheeseburger.kind)

// Now comment the code above and let's see what happens if we change the class definition into a variable. Uncomment from line 19 to 23

// function Hamburger(kind) {
//     var kind = kind
// }
// //At this point, kind is undefined
// // console.log("kind = " + kind)

// // //Now let's create a new burger and comment out the console.log on line 23 and uncomment line 26 to 31
// var cheeseburger = new Hamburger("Cheeseburger")

// // We can see that we have created a Hamburger object but it is empty
// console.log(cheeseburger)
// // Let's try --- why is it undefine? Scopes??
// console.log(cheeseburger.kind)


//So at this point closures come into action. So having a closure is to have some way to access that variable even when the variable has ceased to exist. For that, we can have an inner function that references the variable, so it keeps it alive.

//comment out all the previous code. Uncomment the rest.

// function Hamburger(kind) {
//     var kind = kind;

//     this.getHamburger = function(){
//         return kind;
//     }
// }

// var cheeseburger = new Hamburger("Cheeseburger")
// console.log(cheeseburger)
// console.log(cheeseburger.getHamburger())

// //Doing console.dir we can see that we have 2 scopes and how through the closure, the kind attribute lives.
// console.dir(cheeseburger)

