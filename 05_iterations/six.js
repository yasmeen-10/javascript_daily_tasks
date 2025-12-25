// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>5)
// const newNums=myNums.filter((num)=>{
//     return num>8
// })
// console.log(newNums);

//by using forEach
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>9)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const data = [
  { id: 1, name: "Yasmeen", role: "Developer" },
  { id: 2, name: "Rehan", role: "Tester" },
  { id: 3, name: "Yashu", role: "Software" },
  { id: 4, name: "egofever", role: "Tester" },

];

const userData=data.filter((d)=>d.role==='Tester')

console.log(userData);



