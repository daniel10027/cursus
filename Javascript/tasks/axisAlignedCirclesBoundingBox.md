# Description

Given a set of circles find the area of the axis-aligned minimum bounding box of the set of points which belong to at least one of the given circles.

Example

For x = [1, 0, 4], y = [-1, 2, 2] and r = [3, 5, 4], the output should be axisAlignedCirclesBoundingBox(x, y, r) = 143.

[input] array.integer x

Non-empty array of integers representing X coordinates of the centers of the circles on the plane.

[input] array.integer y

Array of integers of the same length as x representing Y coordinates of the circle centers.

[input] array.integer r

Array of positive integers of the same length as x representing circle radii. ith elements of x, y and r correspond to a single circle.

[output] integer

Area of axis-aligned minimum bounding box for the above-mentioned set of points.
