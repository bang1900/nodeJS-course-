//Exercise 1
// Question:
// Write a program that defines a number (e.g., const num = 123). The program checks and prints the following for the given number:
// a. If the number is divisible by 2, 3, or 5 (only one of them) – print 1.
// b. If the number is divisible by exactly two of these numbers (2 and 3, 3 and 5, or 2 and 5) – print 2.
// c. If the number is divisible by 2, 3, and 5 – print 3.
// Do not use if statements or any control structures. You must use logical operations as required. Logical operations return boolean values.
// Convert boolean values to numbers using Number(boolean). Check what Number(true) and Number(false) return.
// Print only one result.

// Solution:
const num = 123;

// Check divisibility and convert the result to numbers (0 for false, 1 for true)
const isDivisibleBy2 = Number(num % 2 === 0);
const isDivisibleBy3 = Number(num % 3 === 0);
const isDivisibleBy5 = Number(num % 5 === 0);

// Calculate the total number of divisors
const totalDivisors = isDivisibleBy2 + isDivisibleBy3 + isDivisibleBy5;

// Print the result (1, 2, or 3)
console.log(totalDivisors);
