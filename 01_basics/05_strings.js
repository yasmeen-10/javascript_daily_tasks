const name="Yasmeen"
const repoCount=10

// console.log(name+repoCount+" Value");

console.log(`Hello , My name is ${name} and my repoCount is ${repoCount}`);

const gameName=new String("Cricket-Football-Vollyball")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-7,4)
console.log(anotherString);

const newStringOne="    egofever   "
console.log(newStringOne.trim());

const url="https://ego.com/ego%20fever"
console.log(url.replace('%20','-'));

console.log(url.includes('ego'));

console.log(gameName.split('-'));



