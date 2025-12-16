//Singleton
//Object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"egofever",
    "full name":"Mohammed Yasmeen",
    [mySym]:"mykey1",
    age:19,
    location:"Hyderabad",
    email:"egofever@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Sunday","Monday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email="yasmeen@gmail.com"
console.log(JsUser.email);
// Object.freeze("yasmeen420@gmail.com")
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS Users");   
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS User , ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());









