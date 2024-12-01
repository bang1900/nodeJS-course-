//Exercise 2
// Question:
// Write code that prints all prime numbers less than the number 237.

// Solution:
function isPrime(num) {
    // A prime number is greater than 1 and divisible only by 1 and itself
    if (num < 2) return false;
  
    // Check divisibility from 2 to num - 1
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Iterate through numbers from 2 to 236 and print prime numbers
  for (let i = 2; i < 237; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }