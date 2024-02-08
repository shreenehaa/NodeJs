console.log("hello world");

// console.log(document); // will not work
// console.log(window); // will not work

// global is where all setTimeout ,setInterval are present
// console.log(global);

var [, , n] = process.argv;
const dbl = (n) => n * 2;
console.log(dbl(n));
