function isAdmissibleOverpayment(prices, notes, x) {
  var sum = 0;
  for (var i = 0; i < notes.length; i++) {
    var y = prices[i];
    var p = parseFloat(notes[i].split(" ")[0]);
    var op = notes[i].split(" ")[1];
    if (op === "higher") {
      sum += y - (y * 100 / (100 + p));
    } else if (op === "lower") {
      sum -= (y * 100 / (100 - p)) - y;
    }
  }
  return sum <= x;
}