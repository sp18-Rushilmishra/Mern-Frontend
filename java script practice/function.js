// function myFunction(a,b) {
// return a * b;
// }\

// const myFunction = new Function("a" , "b" , "return a * b");
// let x = myFunction(4,21);
// console.log(x);

// It can be also written as

// const myFunction = function(a,b) {
//     return a * b;
// }
// let x = myFunction(2,3);
// console.log(x);

// Hoisting of function

// sayhi()
// function sayhi(){
//     console.log("Hi rushil")
// };/


// function show(a,b) {
//     console.log(arguments.length);
//  }

// show (10,4);

// function dhakka (a,b) {
//     console.log(a*b)
// }
// let text = dhakka.toString();

// function sum (...args) {
//     let sum =0 ;
//     for(let args of args ) sum += arg;
//     console.log(sum);
// }

// const myobj = {
//     firstname : "john",
//     lastname : "mishra",
//     fullname : function (){
//         console.log(this);
//     }
// }
// myobj.fullname();

const person = {
    fullname : function (){
        return this.firstname + " " + this.lastname ;
    }
}

const person1 = {
    firstname : "rushil",
    lastname : "Mishra"
}

const person2 = {
    firstname : "pankaj",
    lastname : "mishra"
}

// person.fullname.call(person2);

person.fullname.apply(person1 , ["sanjay" , "Mishra"]);