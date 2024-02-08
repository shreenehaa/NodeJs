## nodejs

place to run js

## what browser cannot do

- cant access file system
- cant access hardware details
- cont copy files

## virus-

    - love virus
    - worm virus
    - randsomeware virus

## usage

- data streaming
- chat bot
- web scraping--> get data from other websites and use it in your database

- v8 engine becaues it is fastest js engine
- node js buildings(node api)
- blocking operation in call stack

## node js doen not have

- document.,window. instead it have global.setTimeout,global.setInterval

## old module

module.exports.log=log

## package

- os - how much memory - ram
  const os=require("os")
  os.freemem()
  os.totalmem()//total ram
  os.version()
- fs- access filea - create file

```js
const fs = require("fs");
var data = "live more worry less";
var [, , num] = process.argv;
const file = (num) => {
  if (num <= 50) {
    for (var i = 1; i <= num; i++) {
      fs.writeFile(`./backup/text-${i}.html`, data, (err) => {
        console.log("completed");
      });
    }
  } else {
    console.log("cant create more than 50 files");
  }
};
file(num);
```

- read file

```js
fs.readFile("./cool.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
```

## appendFile

```js
fs.appendFile("./cool.txt", data, (err) => {
  if (err) {
    console.log(err);
  }
});
```

## readdir

```js
fs.readdir("./backup", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});
```

## 1.delete files in folder

```js
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
```

## 2.version front ^,~

- (^) - willing to accept any version of Express that is backward-compatible with the specified version.
- it will allow installing any version from 4.18.2 up to, but not including, 5.0.0.

## express

- are framework -to create api

## object relational chaining

- can talk to multiple data
- change of connection string is enough

- gives -methods
