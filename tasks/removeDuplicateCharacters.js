function removeDuplicateCharacters(str) {
  var arr = str.split("");
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) === str.lastIndexOf(arr[i]))
      result.push(arr[i]);
    }

  return result.join("");
}

function removeDuplicateCharacters(str) {
  var char,
      charCount = {},
      newStr = [];
  for(var i = 0; i < str.length; i++) {
    char = str[i];
    if(charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 0;
    }
  }
  for(var i = 0; i < str.length; i++) {
    if(charCount[str[i]] == 0) {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");
}
