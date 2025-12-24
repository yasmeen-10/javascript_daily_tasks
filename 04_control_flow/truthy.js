// const userEmail="egofever@gmail.com"


// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

//falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//truthy values
// "0" , 'false' , " " , [] , {} , function(){}

// const userEmail=[]
// if(userEmail.length===0){
//     console.log("Array is empty");
    
// }

// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

// console.log(false==0); //true
// console.log(false==''); //true
// console.log(0==''); //true

//Nullish Coalescing Operator (??): null undefined
let val1;
// val1=5??10 ->5
// val1=null??10
// val1=undefined??15

val1=null??10??20
console.log(val1);

//ternary operator
// condition?true:false

const teaPrice=100
teaPrice<=80?console.log("Less than 80"):console.log("More than 80")


// Short difference:

// Ternary operator (condition ? a : b)
// Works on any condition. If the condition is true → a, else → b.

// Nullish coalescing operator (??)
// Works only when the value is null or undefined.

// Why we use ?? (Nullish coalescing):

// To give a default value only when data is missing (null/undefined)

// It does NOT treat 0, false, or empty string as missing (unlike ||)

// Use case (example):

// let age = 0;
// let result = age ?? 18;  // result = 0 (correct)


// 👉 We use ?? to avoid accidentally replacing valid values like 0 or false.

// Nullish coalescing operator (??)

// It checks ONLY:

// null

// undefined

// If value is null or undefined, it gives a default value.

// Example:

// let name = null;
// let userName = name ?? "Guest";


// 👉 Output: "Guest"
