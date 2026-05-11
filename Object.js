// // // // // // const user = {
// // // // // //     name: "Chintan",
// // // // // //     age: 22,
// // // // // //     emailId: "xyz@gmail.com",
// // // // // //     amount: 4500,
// // // // // // }

// // // // // // // console.log(Object.keys(user));
// // // // // // // console.log(Object.values(user));
// // // // // // // console.log(Object.entries(user));

// // // // // // //Object destructuring
// // // // // // // const {name, age} = user;
// // // // // // // console.log(name, age);

// // // // // // // for(let keys of Object.keys(user)) {
// // // // // // //     console.log(keys);
// // // // // // // };

// // // // // // // for(let values of Object.entries(user)) {
// // // // // // //     console.log(values);
// // // // // // // };

// // // // // // // for (let [keys, values] of Object.entries(user)) {
// // // // // // //     console.log(keys, values);
// // // // // // // };

// // // // // // const now = new Date();
// // // // // // console.log(now);

// // // // // // console.log(now.toString());

// // // // // let arr = [10,20,30,40,50];

// // // // // for(let i=0; i< arr.length; i++) {
// // // // //     console.log(arr[i]);
// // // // // };

// // // // const arr = [10,20,40, [40,90,65], 80];

// // // // const a = arr.flat(Infinity);
// // // // console.log(a);

// // // function addNumber(...num) {
// // //     let sum = 0;

// // //     for(let n of num) {
// // //         sum += n;
// // //     };

// // //     console.log(sum);
// // // }

// // // addNumber(10,20,30,40,50);
// // // addNumber(10,20,30);
// // // addNumber(10,20);

// // const arr = [10,20,30,40,50];
// // const arr2 = [100,200];

// // const ans = [...arr, ...arr2];
// // console.log(ans);

// console.log(addNumber(10,20));

// const addNumber = function(num1, num2) {
//     return num1 + num2;
// }

// // console.log(addNumber(10,20));

const greeting = () => ({name: "Chintan", age: 22});
console.log(greeting());