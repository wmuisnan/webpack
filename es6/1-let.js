'use strict';

// for(let i = 0; i < 3; i++){
// 	console.log('inner', i);

// }

// console.log('outer',i);

// 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[1](); // 6


// sumrise
// 1. block scope
// 2. iteration each one is new
// 3. 不存在变量提升


// 不存在变量提升

console.log(foo); // 输出undefined
console.log(bar); // 报错ReferenceError -->没报错

var foo = 2;
let bar = 2;



var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError -->没报错
  let tmp;
}