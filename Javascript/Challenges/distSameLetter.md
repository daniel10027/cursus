# Description

Given a string s of lowercase Latin letters `('a' - 'z')`, get the maximum distance between two same letters, and return this distance along with the letter that formed it.

If there is more than one letter with the same maximum distance, return the one that appears in s first.

## Example:

For `s = "fffffahhhhhhaaahhhhbhhahhhhabxx"` the answer should be `distSameLetter(s) = "a23"`.

The maximum distance is formed by the character 'a' from index 5 to index 27 (0-based). Therefore, the answer is "a23".

-   [input] string s

      A string of lowercase Latin letters, where at least one letter appears twice.

-   [output] string

      The letter that formed the maximum distance and the distance itself.

## Solutions

#### My Solution

Here's the big not optimized Solution

```javascript
function distSameLetter(s) {
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) === -1)
      arr.push(s[i]);
    }
  var max = s.lastIndexOf(arr[0]) - s.indexOf(arr[0]);
  var element = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var tmp = s.lastIndexOf(arr[i]) - s.indexOf(arr[i]);
    if (tmp > max) {
      max = tmp;
      element = arr[i];
    }
  }
  return element + (max + 1);
}
```
