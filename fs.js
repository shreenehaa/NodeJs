const fs = require("fs");
var data = "live more worry less ,but there is more to worry ";
// var [, , num] = process.argv;
// const file = (num) => {
//   if (num <= 50) {
//     for (var i = 1; i <= num; i++) {
//       fs.writeFile(`./backup/text-${i}.html`, data, (err) => {
//         console.log("completed");
//       });
//     }
//   } else {
//     console.log("cant create more than 50 files");
//   }
// };
// file(num);

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// fs.appendFile("./cool.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
fs.readdir("./backup", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      fs.unlink(`./backup/${file}`, (err) => {
        console.log(err);
      });
    });
  }
});

// fs.unlink("./backup/index-1.html", (err) => {
//   console.log(err);
// });
