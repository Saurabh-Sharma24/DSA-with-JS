// console.log("Om");
// // q.1 print a matrix having rows and column
// const printPattern = function (rows, col) {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < col; j++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// };

// console.log(printPattern(31, 41));

// // q.2 print right angle or pyramid
// for (let i = 1; i <= 4; i++) {
//   for (let j = 0; j < i; j++) process.stdout.write("*");
//   console.log();
// }

// q.3 print
/*1
  12
  123
  1234*/

// const a = function numPattern(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) process.stdout.write(`${j + 1}`);
//     console.log();
//   }
// };

// q.4 print
/*1
22
333
4444*/
// const a = function numPattern(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) process.stdout.write(`${i + 1}`);
//     console.log();
//   }
// };

// console.log(a(4));
// // q.5 print *****
//              ****
//              ***
//              **
//              *
// const a = function (n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = n - i; j > 0; j--) process.stdout.write("*");
//     console.log();
//   }
// };
// console.log(a(5));
// q.5 print 12345
// 1234
// 123
// 12
// 1
// const a = function (n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j < n - i + 1; j++) process.stdout.write(`${j}`);
//     console.log();
//   }
// };
// console.log(a(5));
// q.6 print
//    *
//   ***
//  *****
// *******

// const starPattern = function (n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) process.stdout.write(" "); // loop for left spaces
//     for (let k = 0; k < 2 * i + 1; k++) process.stdout.write("*");
//     for (let j = 0; j < n - i - 1; j++) process.stdout.write(" "); // loop for right spaces
//     console.log();
//   }
// };

// // Call the function with the desired number of rows
// starPattern(5);

// q.7 reverse of q.6
const starPattern = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = n; j < n - i - 1; j++) process.stdout.write(" "); // loop for left spaces
    for (let k = 0; k < 2 * i + 1; k++) process.stdout.write("*");
    for (let j = 0; j < n - i - 1; j++) process.stdout.write(" "); // loop for right spaces
    console.log();
  }
};

// Call the function with the desired number of rows
starPattern(5);
