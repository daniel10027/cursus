function appleBoxes(k) {

  var sum = 0,
    x = 0;
  do {
    if(x % 2 === 0) {
      sum += x * x;
    } else {
      sum -= x * x;
    }
    x++;
  } while (x <= k);

  return sum;
}
