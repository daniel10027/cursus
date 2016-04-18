# Description
Given an array of line segments on the number line, find the number of segments such that after deleting any of them the length of the union of all segments will decrease.

## Example
For `left = [4, 1, 1]` and `right = [7, 3, 6]`, the output should be

```javascript
     segmentDeletionSlow(left, right) = 2.
```

- [input] array.integer left

  A non-empty array of integers representing the left-end coordinates of the segments.

- [input] array.integer right

  An array of integers of the same length as left representing the right-end coordinates of the segments. The i<sup>th</sup> elements of left and right correspond to a single segment.

  The segments have positive lengths.

- [output] integer
