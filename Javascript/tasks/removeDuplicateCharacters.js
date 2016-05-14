function removeDuplicateCharacters(str) {
  var arr = str.split("");
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) === str.lastIndexOf(arr[i]))
      result.push(arr[i]);
    }

  return result.join("");
}
