function ReverseBit(x) {
  //Convert the number into binary string.
  var b = x.toString(2);
  // Reverse binary string.
  b = b.split('').reverse().join('');
  // Convert the reversed binary string back to integer.
  var result = parseInt(b, 2);
  // returning the result
  return result;
}

// A Short form
function ReverseBit(x) {
  return parseInt(x.toString(2).split("").reverse().join(""), 2);
}
// A Shorter form
ReverseBit = x => parseInt(x.toString(2).split("").reverse().join(""), 2)

//I don't know why, but this work too, I've already seen it in someone else solution
}
_run = x => {
    return parseInt(x.toString(2).split("").reverse().join(""), 2)
