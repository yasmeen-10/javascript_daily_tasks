// const tinderUser=new Object() //Singleton Object
const tinderUser={} //Non Singleton Object

tinderUser.id="123abc",
tinderUser.name="John",
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"ego",
            lastName:"fever"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]
// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


// SUMMARY : 

// 1.To declare singleton object => new Object( );
// 2. To merge object use spread operartor. {...Obj1, ...Obj2 } or 
// Object.assign( { }, obj1,obj2 ):
// 3. To return keys from object => Object.keys(object name);
// 4.To return values from object => Object.values(object name);
// 5.To check property of object => Object.hasOwnProperty(key/value name);


const course={
    courseName:"Js in hindi",
    coursePrice:"999",
    courseInstructor:"Hitesh"
}

// console.log(course.courseName);
const {courseName,coursePrice,courseInstructor:instructor}=course
console.log(courseName);
console.log(instructor);

// {
//     "name":"yasmeen",
//     "coursename":"JS",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

// SUMMARRY :

// 1. To extract value from object => const {keyname} = object name;
// 2. To rename keyname for using more times => const {keyname: new name } = object name;
// 3. JSON is a collection of key-value pairs just like object and a JSON array is an ordered list of value.






