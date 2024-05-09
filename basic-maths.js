// count no of digits
// let n = 1657;
// let count = 0;

// while (n !== 0) {
//   count++;
//   n = Math.floor(n / 10);
// }

// console.log(count);

// reversing the given number

// let n = 25372387;
// let reverseNum = 0;
// while (n > 0) {
//   let lastDigit = n % 10;
//   reverseNum = reverseNum * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(reverseNum);

// checking palindrome number
// let n = 1234321;
// let dup = n;
// let reverseNumber = 0;
// while (n > 0) {
//   lastdigit = n % 10;
//   reverseNumber = reverseNumber * 10 + lastdigit;
//   n = Math.floor(n / 10);
// }
// if (reverseNumber === dup) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
// armstrong number

// let n = 1634;
// let dup = n;
// let temp = n;
// let count = 0;
// let sum = 0;
// while (temp > 0) {
//   count++; // capturing total no of digits
//   temp = Math.floor(temp / 10);
// }
// while (n > 0) {
//   lastDigit = n % 10;
//   sum += Math.pow(lastDigit, count); // raising last digits to the power of total digits(ie; count)
//   n = Math.floor(n / 10);
// }
// if (sum === dup) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// count all divisors of a number
// let num = 1242;
// let x = 1;
// let count = 0;
// while (x <= num) {
//   if (num % x === 0) {
//     count++;
//   }
//   x++;
// }
// console.log(count);

// check for prime

// let n = 1;
// let x = 1;
// let numOfFactors = 0;
// while (x <= n) {
//   if (n % x === 0) {
//     numOfFactors++;
//   }
//   x++;
// }
// if (numOfFactors === 2) {
//   console.log("Yes, its prime");
// } else {
//   console.log("its not a prime");
// }

// gcd/hcf

// const n1 = 123;
// const n2 = 246;
// let x = 1;
// let temp = 0;

// while (x < Math.max(n1, n2)) {
//   if (n1 % x === 0 && n2 % x == 0) {
//     temp = x;
//   }
//   x++;
// }
// console.log(temp);
