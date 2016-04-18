# Description

Consider a rectangular chess board of a x b squares. For each of the squares imagine a lone queen standing on that square and compute the number of squares under the queen's attack. Add all the numbers you got for each of the a x b possible queen's positions.

## Example

for `a = 2` and `b = 2` the output should be `12`

-   [input] integer a

    positive integer

-   [input] integer b

    positive integer

-   [output] integer

## Solution

```javascript
function chessBoardSquaresUnderQueenAttack(a, b) {
  var go = function (x, y, dx, dy) {
    if (x < 0 || x >= a || y < 0 || y >= b) {
      return 0;
    }
    return go(x + dx, y + dy, dx, dy) + 1;
  };
  var res = 0;
  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
          if (dx || dy) {
            res += go(i + dx, j + dy, dx, dy);
          }
        }
      }
    }
  }
  return res;
}
```
