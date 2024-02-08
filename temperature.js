var [, , temp] = process.argv;
const conversion = (temp) => {
  return `${(temp * 9) / 5 + 32} °F`;
};
console.log(conversion(temp));
