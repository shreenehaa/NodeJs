arr.map((x, i) => x * 2);

var arr = [1, 2, 3];
function demo(fn, arr) {
  let final_ans = [];
  for (var i in arr) {
    let mul_ans = fn(arr[i], i);
    final_ans.push(mul_ans);
  }
  return final_ans;
}

demo((x, i) => x * 2, arr);
arr.map((x, i) => x * 2);

// console.log(arr1.filter((data) => data < 5).map((ans) => ans * 5));
// map
arr1 = [2, 4, 6, 8];
function mapReduce(fn, arr1) {
  return arr1.reduce((acc, curr, i) => {
    acc.push(fn(curr, i));
    return acc;
  }, []);
}

console.log(mapReduce((x, i) => x * 2 * i, arr1));

// filter
var arr1 = [2, 4, 6, 8];
function filterReduce(fn, arr1) {
  return arr1.reduce((acc, curr) => {
    if (curr < 5) {
      acc.push(fn(curr));
    }
    return acc;
  }, []);
}

console.log(filterReduce((x) => x * 5, arr1));
// use reduce to build own filter and map;
