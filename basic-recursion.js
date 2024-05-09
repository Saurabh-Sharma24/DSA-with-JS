// let c = 0;

// a = function () {
//   console.log("Hi");
//   c++;
//   if (c == 5) {
//     return;
//   }
//   a();
// };

// console.log(a());

// print the name N times

// print 1 linerly 1 to N

// const printNum = function (i, n) {
//   if (i > n) return;
//   console.log(i);
//   printNum(i + 1, n);
// };
// printNum(1, 100);

// printing 1 to N in reverse order

// const printRev = function (i, n) {
//   if (i < n) return;
//   console.log(i);
//   printRev(i - 1, n);
// };
// printRev(100, 1);

// printing 1 to N using backtracking

// const print = function (i, n) {
//   if (i < n) return;
//   printRev(i - 1, n);
//   console.log(i);
// };
// print(100, 1);

// printing N to 1 using backtracking

// const printRev = function (i, n) {
//   if (i > n) return;
//   printRev(i + 1, n);
//   console.log(i);
// };
// printRev(1, 100);

// sum of first N numbers
// let sum = 0;
// const a = function (i, n) {
//   if (i > n) return;
//   sum += i;
//   a(i + 1, n);
// };

// a(1, 3);
// console.log(sum);

// sum of first N numbers using parameterized way

// const a = function (i, sum) {
//   if (i < 1) {
//     console.log(sum);
//     return;
//   }
//   a(i - 1, sum + i);
// };
// a(10, 0);

// functional way of summing upto N

// const sum = function (n) {
//   if (n == 0) return 0;
//   return n + sum(n - 1);
// };

// console.log(sum(3001239));

// factorial of N
// const factorial = function (n) {
//   if (n == 1) return 1;
//   return n * factorial(n - 1);
// };
// console.log(factorial(5));

// reversing an array
// const swap = function (a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   console.log(a, b);
// };

// let arr = [1, 2, 3, 4];
// const revArray = function (i, n) {
//   if (i >= n) return;
//   swap(arr[i], arr[n]);
//   revArray(i + 1, n - i - 1);
// };

// console.log(revArray(0,  revArray.length - 1));
const arr = [1, 2, 3, 4];
let temp = [];
const revArray = function (array, i) {
  if (arr === null) return;
  temp[i] = arr.length - i - 1;
  return revArray(arr, i + 1);
};
console.log(revArray(arr, 0));
