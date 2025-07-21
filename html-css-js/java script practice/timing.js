// alert("Hello")

// let a = setTimeout(function() {
//     alert("I am rushil")
// }, 5000);

// let b = prompt ("do you want to run the settimeout?")
// if("n" == b){
//     clearTimeout(a)
// }

// clearTimeout(a)

const sum = (a,b) => {
    console.log("yea i am running" + (a+b))
    a + b
}
setTimeout(sum , 1000 , 1 , 2 )


let n = setInterval(function() {
    alert("rushil")
} , 3000)

clearInterval(n);

