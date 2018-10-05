## Description

**You are given a two-digit integer n. Return the sum of its digits.**

## Example

For `n = 29`, the output should be `addTwoDigits(n) = 11`.

- [input] integer year

  A positive two-digit integer.

- [output] integer

  The sum of the first and second digits of the input number.

## Solution

```javascript
// Solution 1
function addTwoDigits(year) {
  return (year % 10) + Math.floor(year / 10);
}

// Solution 1 simplified using ES6
addTwoDigits = n => (n % 10) + Math.floor(n / 10);

// Solution 2 simplified using ES6
addTwoDigits = n => Math.pow(10, n) - 1;
```
