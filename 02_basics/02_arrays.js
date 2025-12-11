const fruits=["apples","oranges","kiwi"]
const vegetables=["potato","tomato","spinach"]
const drinks=["lemon","papaya"]

// fruits.push(vegetables)
// console.log(fruits);
// console.log(fruits[3]);
// console.log(fruits[3][0]);

// const result=fruits.concat(vegetables,drinks)
// console.log(result);

// const result=[...fruits , ...vegetables , ...drinks]
// console.log(result);

// const arr=[1,2,3,[4,5,6],[44,445],56,78,[577,99]]
// const newArr=arr.flat(Infinity)
// console.log(newArr);

// console.log(Array.isArray("egofever"));
// console.log(Array.from("egofever"));
// console.log(Array.from({name:"Yasmeen"})); //Interesting - It vll return empty array becoz it doesn't understand

//  let score1=100
//  let score2=200
//  let score3=300

//  console.log(Array.of(score1,score2,score3));

 console.log(Array.of(1,2,3,4,5));
console.log(Array.from('123'));

// Key Takeaways

// 1. push() method in array simply add the array as an new single entity in the existing array.
// 2. concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
// 3. Despite push and concat we should use spread operator.
// 4. Intresting methods, isArray(), from() and of()
 
