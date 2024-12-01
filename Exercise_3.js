//benyamin geerts 48/6
// /Exercise 3
/// Question:
// Write a program that defines an array of integers and calculates the number of zeros in the array
// using a conditional expression (without using if).

// Solution:
const numbers = [0, 1, 2, 0, 3, 0, 4, 5, 0]; // Example array

// Use filter to create a new array containing only zeros, and calculate its length
const zeroCount = numbers.filter((num) => num === 0).length;

console.log(zeroCount); // Output: 4
