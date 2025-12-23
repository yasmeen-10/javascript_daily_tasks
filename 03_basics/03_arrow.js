const user={
    username:"egofever",
    price:999,
    welcomeMessage:function(){
        // console.log(`${this.username} , Welcome to website`);   
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="Yashu"
// user.welcomeMessage()

//console.log(this); //{} ->empty object in node environment
//console.log(this); //Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …} 
// ->window object in console (browser)
//browser ke andar jo global object hai wo window object hai

// function chai(){
//     let username="ego"
//     console.log(this.username); //undefined  -> username is a local variable, not a property of the global object,
//     // so this.username is undefined.
//     console.log(this);  //global object
// }
// chai()

//NOTE: Local variables are not attached to this, and in a regular function this points to the global object.

// const chai=function(){
//     let username="ego"
//     console.log(this.username);
    
// }
// chai() //undefined

// const chai=()=>{
//     let username="ego"
//     console.log(this.username); //undefined
//     console.log(this); //{}
      
// }
// chai()
//Regular functions have their own this, arrow functions inherit this from their surrounding scope.
// Regular function: this refers to the context from where it’s called (like an object or global scope).
// Arrow function: this doesn’t change based on how it’s called—it uses the this from the surrounding scope.

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,2))

// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)

const addTwo=(num1,num2)=>({username:"Yashu"})
console.log(addTwo(2,12))