function minimalNumberOfCoins(coins, price) {
  var s = 0;
  for (var i = coins.length - 1; i >= 0; i--) {
    var tmp = Math.floor(price / coins[i]);
    s += tmp;
    price -= tmp * coins[i];
  }
  return s;
}