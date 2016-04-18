# Description

There are ``N`` points placed on a circle with equal distances between each pair of neighboring ones. All points are colored green or red. What is the largest size of of a regular (with equal sides) polygon that can be constructed using only green points as its vertices? The polygon must have at least three vertices.

## Example

For ``a = [0, 1, 0, 1, 0, 1]``, the output should be:
```javascript
regularPolygon(a) = 3
```

-   [input] array.integer a

  Array of integers with colors of points (0 means red, 1 means green), in the same clockwise order they appear on the circle starting from some random point.

- [output] integer

  Number of sides of the largest regular polygon or -1 if such a polygon cannot be constructed.
