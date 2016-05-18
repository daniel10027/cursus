function strangeCode(s, e) {
  var result = [],
    counter = 0;
  while (s++ < --e) {
    if (counter++ % 2 == 0) {
      result.push('a');
    } else result.push("b");
  }
  return result.join("");
}