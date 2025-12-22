function sayMyName(){
    console.log("hi");   
}
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(10,10)

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}
const result=addTwoNumbers(10,10)
// console.log("Result : ",result);

function loginUserMsg(username="Yashu"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("egofever"));
// console.log(loginUserMsg("ego"));


//REST PARAMETER
function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,899,666));

const user={
    username:"egofever",
    age:22
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(user)

const myNewArray=[100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([99,77,990]));