var [, , a, b] = process.argv;
const sum = (a, b) => a + b;

console.log(sum(+a, +b));
