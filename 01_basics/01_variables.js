const accountId=222
let accountEmail="yasmeen@gmail.com"
var accountPassword="y123"
accountCity="Hyderabad"
let accountState;

//accountId=2 //not allowed
accountEmail="yashu@gmail.com"
accountPassword="6767"
accountCity="Hyd"

/*
Prefer not to use var
becoz of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

