//PRIMITIVE --> Call By Value

//7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt

// There are 2 types of datatype
// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=3456789999986678997346n


//Reference (Non Primitive)

//Array , Objects , Functions

const heroes=["Sohail","Mr.busy"]

let myObj={
    name:"Egofever",
    age:23
}

const myFunction=function(){
    console.log("Hello World");
    
}

// console.log(typeof outsideTemp);

//MEMORIES
//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.

let name="Yasmeen"
let myName=name
myName="egofever"

// console.log(name);
// console.log(myName);

let userOne={
    email:"yasmeen@gmail.com",
    age:22
}

let userTwo=userOne

userTwo.email="egofever@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);



