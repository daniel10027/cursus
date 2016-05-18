# Description

Given a set of points on the plane, find the area of its axis-aligned minimum bounding box.

> The axis-aligned minimum bounding box for a given point set is its minimum bounding box with edges parallel to the (Cartesian) coordinate axes.

## Example

For `x = [1, 0, 4]` and `y = [-1, 2, 2]`, the output should be :

```javascript
axisAlignedBoundingBox(x, y) = 12
```

- [input] array.integer x

Non -empty array of integers representing the X coordinates of the points on the plane.

- [input] array.integer y

  Array of integers of the same length as x representing the Y coordinates of the points. ith elements of both x and y correspond to a single point.

- [output] integer

  The desired area.
