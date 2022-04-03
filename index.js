// console.log("hello");


// var arr = [1, 3, 4, 6, 8];


// function triple(x){
//     return x-87 ;
// }

// var Output = arr.map(triple);
// console.log(Output);



// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }  

// var bg = persons.map(getFullName);
// console.log(bg);



// ---->
//filter


// const num = [1, ,6,23,43,29 ,3, 5, 21, 10, 8];

// function isGreater(x){
//     return x >= 21;
// }

// const bg = num.filter(isGreater);
// console.log(bg);


// reduce

// const numbers = [32, 5];

// function myFunc(total, num) {
//   return total - num;
// } 

// var bg = numbers.reduce(myFunc);
// console.log(bg);


// const numbers = [15.5, 2.3, 1.1, 4.7];

// function getSum(total, num) {
//   return total + Math.round(num);
// }

// var bbg = numbers.reduce(getSum, 0);
// console.log(bbg);

// console.log("hello");
// let arr = [64, 49, 36, 25, 16];

// let newArr = arr.map((curElem) =>  Math.sqrt(curElem))
// console.log(newArr);

// let newArr = arr.map((curElem) => {
//     return Math.sqrt(curElem);
// })
// console.log(newArr);


// let arr = [64, 49, 36, 25, 16];


// function sqRoot(x){
//     return Math.sqrt(x) ;
// }

// var Output = arr.map(sqRoot);
// console.log(Output);



// let arr = [64, 49, 36, 25, 16];


// function sqRoot(x){
//     return x*2 ;
// }

// var Output = arr.map(sqRoot);
// // var Outputt = arr.filter(sqRoot);
    
// console.log(Output);


let arr = [64, 49, 36, 25, 16];

let newArr = arr.map((curElem) =>  {
    return curElem*2;
}).filter((curElm)=>{
    return curElm > 50;
}).reduce((acc, curelem)=>{
    return acc += curelem;
});
console.log(newArr);


























