const os = require("os");
const a = 1024;
var gb = a * a * a;
const func = (mem) => (mem / gb).toFixed(2) + "gb";
console.log("free memory " + func(os.freemem()));
console.log("total memory " + func(os.totalmem()));
// console.log("version", os.version());
// console.log("processor", os.cpus());
