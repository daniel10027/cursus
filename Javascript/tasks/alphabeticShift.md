# Description
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

## Example
given the string `'crazy'`, the output will be `'dsbaz'`
- [input] string inputString

  non-empty string consisting of lowercase English characters

- [output] string

  the result string after replacing all of its characters

### Solution
1. Code Writing
2. function alphabeticShift(inputString) {
var a = [],
    r = [];
for (var i = 0; i < 26; i++) {
    a.push(String.fromCharCode('a'.charCodeAt() + i));
}
for (var i = 0; i < inputString.length; i++) {
    r[i] = a[(a.indexOf(inputString[i]) + 1) % a.length];
}
return r.join("");
}
3. BugFix
4. function alphabeticShift(inputString) {
 var chars = inputString.split("");
 for (var i = 0; i < chars.length; i++) {
     var number = chars[i].charCodeAt() - 'a'.charCodeAt();
     number = (number + 1) % 26; // It was number = number + 1;
     chars[i] = String.fromCharCode(number + 'a'.charCodeAt());
 }
 return chars.join("");
}
