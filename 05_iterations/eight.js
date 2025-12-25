const myNums=[1,2,3,4,5]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0)

// console.log(myTotal);

// const myTotal=myNums.reduce((acc,cur)=>{
//     return acc+cur
// },0)

// const myTotal=myNums.reduce((acc,cur)=>acc+cur,0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js",
        price:888
    },
    {
        itemName:"java",
        price:999
    },
    {
        itemName:"ruby",
        price:877
    },
    {
        itemName:"cpp",
        price:664
    }
]

const total=shoppingCart.reduce((acc,cur)=>acc+cur.price,0)
console.log(total);


