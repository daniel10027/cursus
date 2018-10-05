// Solution 1
function addTwoDigits(year) {
  return (year % 10) + Math.floor(year / 10);
}

// Solution 1 simplified using ES6
addTwoDigits = n => (n % 10) + Math.floor(n / 10);

// Solution 2 simplified using ES6
addTwoDigits = n => Math.pow(10, n) - 1;
