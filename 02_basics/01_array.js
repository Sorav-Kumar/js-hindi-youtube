// // Array
// let myArr=["sorav","kumar",true,["fname","lname","mname"],1234];
// for(let i=0;i<myArr.length;i++)
//     {
//     console.log(myArr[i]);
//     }
//         console.log("length of myArr "+myArr.length);
// myArr.push("raja");

// for(let i=0;i<myArr.length;i++)
//     {
//     console.log(myArr[i]);
//     }
//         console.log("length of myArr "+myArr.length);

// myArr.pop();

// for(let i=0;i<myArr.length;i++)
//     {
//     console.log(myArr[i]);
//     }
//         console.log("length of myArr "+myArr.length);

// myArr.shift();

// for(let i=0;i<myArr.length;i++)
//     {
//     console.log(myArr[i]);
//     }
//         console.log("length of myArr "+myArr.length);

// myArr.unshift(13);

// for(let i=0;i<myArr.length;i++)
//     {
//     console.log(myArr[i]);
//     }
//         console.log("length of myArr "+myArr.length);

let myArr=["sorav","kumar",true,["fname","lname","mname"],1234];
// // console.log(myArr.includes("sorav"));
// // console.log(myArr.indexOf(1234));


// const newArr=myArr.join();
// console.log(newArr);
// console.log("sorac"+myArr);
// console.log("type of newArr:"+typeof(newArr));
// console.log("type of myArr:"+typeof(myArr));


//slice,splice


console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("c",myArr);

