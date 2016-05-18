# Description

Given a  rectangular matrix of characters, add a border of asterisks(`*`) to it.

## Example

```Javascript
    addBorder(["abc""ded"]) = ["*****",
                               "*abc*",
                               "*ded*",
                               "*****"]
```

#### input

 array.string picture

    A non-empty array of non-empty equal-length strings.

#### output

 array.string

    The same matrix of characters, framed with a border of asterisks of width 1.

## My solution

```Javascript
    function addBorder(picture) {
      var answer = [""];
      for (var i = 0; i < picture[0].length + 2; i++) {
        answer[0] += "*";
      }
      for (var i = 0; i < picture.length; i++) {
        answer.push("*");
        for (var j = 0; j < picture[0].length; j++) {
          answer[i + 1] += picture[i][j];
        }
        answer[i + 1] += "*";
      }
      answer.push(answer[0]);
      return answer;
    }
```
