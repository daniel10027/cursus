function mirrorBits(a) {
  return parseInt(a.toString(2).split("").reverse().join(""), 2);
}
