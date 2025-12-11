//Arrays
const myArr=[0,1,2,3,4,5]
const fruits=["apples","kiwi"]

// const myArr2=new Array(1,2,3,4)
// console.log(myArr2[1]);

//Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(0));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);


//SLICE & SPLICE

//SLICE
// const a=[1,2,3,4,5]
// console.log("original array before slicing",a);

// const sa=a.slice(0,3)
// console.log("sliced array",sa);
// console.log("original array after slicing",a);

//SPLICE

const oa=[11,12,13,14,15]
console.log("original array before splicing",oa);

const sa=oa.splice(1,3)
console.log("spliced array",sa);
console.log("original array after splicing",oa);


















// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.




// ************IMP***********/ 
//Interveiw ques: diff btw slice and splice method of array
/*
SLICE: extracts a section of array and returns new array. doesn't modify original array , Syntax: arr.slice(start, end) 
SPLICE: modifies original array by adding, removing or replacing elments. returnsan array containing the elements that were removed ,Syntax: array.splice(start, deleteCount, item1, item2, ...) where item1, item2, ... (optional) are added after start */

// let slicedarr= arr1.slice(1,3); //end index is not included
// console.log("sliced array : ", slicedarr); //[ 2, 3 ]
// console.log("original array : ", arr1); //[ 1, 2, 3, 4, 5 ]

// let splicedarr=arr2.splice(2,3,-3,-2,-1);
// console.log("spliced array : ", splicedarr); //[ 2, 3, 4 ]
// console.log("original array : ", arr2); //[ 1, -3, -2, -1, 5 ]



