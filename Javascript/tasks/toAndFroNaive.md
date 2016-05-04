# Description

A person is moving along a straight line. Initially he is at point A. He goes to point B from A with speed equal to 1 meter per second. Immediately after reaching B he turns around and heads to A from B with the same speed. After reaching point A he turns around once again and heads to B. etc. We need an algorithm that identified the location of the person at any given moment in time.

It's guaranteed that A and B are two different points.

## Example

For `a = 2, b = 4` and `t = 3`, the output should be

```javascript
toAndFroNaive(a, b, t) = 3.
```

- [input] integer a

  Coordinate of point A (in meters).

- [input] integer b

  Coordinate of point B (in meters).

- [input] integer t

  Positive integer representing time (in seconds).

- [output] integer

  Coordinate of the person t seconds after he left A.
