# Description
Given a point and a circle, determine if the point lies strictly inside the circle.

## Example
For `xa = 0`, `ya = 0`, `xc = 0`, `yc = 0` and `rc = 1`, the output should be :

```javascript
isTheInsideTheCircle(xa, ya, xc, yc, rc) = true
```

For `xa = -1`, `ya = -1`, `xc = 0`, `yc = 0` and `rc = 1`, the output should be :

```javascript
isTheInsideTheCircle(xa, ya, xc, yc, rc) = false
```

- [input] integer xa

  x coordinate of the given point.

- [input] integer ya

  y coordinate of the given point.

- [input] integer xc

  x coordinate of the center of the circle.

- [input] integer yc

  y coordinate of the center of the circle.

- [input] integer rc

  The radius of the circle.

- [output] boolean

  true, if the point (xa, ya) lies inside the circle (xc, yc, rc), false otherwise.
