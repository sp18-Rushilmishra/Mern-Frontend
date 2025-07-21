// //console.log("Hello world !");
// // let a = 5;
// // let b = "2";


// // console.log("a * b = " , ); 
// // console.log("a / b = " ,  );
// // console.log("a ** b =" , a ** b);
// // let y = a === a;

// // console.log(y);

// // let a = 6;
// // let b = 4;
// // // htg

// // // a /= 5;
// // // console.log(a);

// // console.log("cond1 || cond2 = " , a < b || a === 6);
// // console.log("cond1 || cond2 = " , ! (a === 6));

// // if statement

// //let age = 25;

// // let age = 16;

// // if (age >= 18) {
// //     console.log("you can vote");
// // }

// // if(age < 18) {
// //     console.log("you CANNOT vote");
// // }

// // let mode = "light" ;
// // let color;

// // if(mode== "dark"){
// //     color = "black";
// // }else {
// //     color = "white";
// // }
// // console.log(color);

// // let age = 25;

// // if(age >= 18){
// //     console.log("Vote");
// // }else {
// //     console.log("Not vote");
// // }

// // let num = 10 ;

// // if(num % 2 === 0){
// //     console.log("even");
// // }else{
// //     console.log("odd");
// // }

// // else-if statement

// // let mode = "dark";
// // let color;

// // if(mode === "dark"){
// //     color = "black";
// // }
// // else if (mode === "blue"){
// //     color = "blue";
// // }
// // else if(mode === "pink"){
// //     color = "pink";
// // }else{
// //     color = "white";
// // }
// // console.log(color);

// // Ternary operators

// // let age = 5;

// // let result = age >= 18 ? "adult" : "not adult";
// // console.log(result);
 
// // let num = prompt("enter a number");

// // if(num % 5 === 0) {
// //     console.log(num , "is a multiple of 5");
// // }else {
// //     console.log(num , "is NOT a multiple of 5");
// // }   

// // let score = 75;
// // let grade;

// // if(score >= 90 && score <= 100){
// //     grade = "A";
// // }else if (score>= 70 && score <= 89) {
// //     grade = "B";
// // }else if (score >= 60 && score <= 69){
// //     grade = "C";
// // }else if(score >=50 && score <= 59 ){
// //     grade = "D";
// // }else if (score >= 0 && score <= 49){
// //     grade = "F";
// // }

// // console.log(grade);

// console.log("rushil");

//for loop;

// for(let count = 1; count<= 5 ; count++) {
//     console.log("Apna college"); //5
// }

// let sum = 0;
// for(let i = 1 ; i<= 5 ; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// let i = 1;
// while(i<= 5) {
//     console.log("i=" , i);
//     i++;
// }

// let i = 20 ;

// do{
//     console.log("Apna college");
//     i++;
// }while(i <= 10);

// for of loop

// let str = "apnacollege";

// for(let i of str ) {
//     console.log(i); 
// }


// const cars = ["rushil" , "mishra" , "volvo"];
// // // let car = cars[cars.length - 1];
// // cars.forEach(myFunction);
// // cars.push("bmv");
// cars[5] = "mercedes";

// function a() {
//     function c(){
//         console.log(b);
//     }
// }
// var b = 10;
// a();

const counter = {
    count : 0,
    start :() => {
    setTimeout(() => {
        this.count++;
        console.log(this.count);
    }, 2000)
    
}
}

counter.start();
