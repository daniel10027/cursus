function areSimilarNumbers(a, b, divisor) {
  if(a % divisor === 0 && b % divisor === 0 || a % divisor !== 0 && b % divisor !==
    0) {
    return true;
  }
  return false;
}
