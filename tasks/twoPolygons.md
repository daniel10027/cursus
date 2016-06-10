# Description

You are given two convex polygons in the plane. Your task is to check whether it is possible to cut the first polygon into the pieces from which the second polygon can be put together. You can cut the polygon and join parts as you wish, but all pieces should be used and they shouldn't overlap.

## Example

For p1 = [[0, 0], [1, 0], [1, 1], [0, 1]] and p2 = [[0, 0], [2, 0], [1, 1]], the output should be twoPolygons(p1, p2) = true.

![Example](http://codefightsuserpics.s3.amazonaws.com/tasks/twoPolygons/img/twoPolygons.png?_tm=1463852193576)

For p1 = [[0, 0], [1, 0], [0, 2]] and p2 = [[2, 0], [2, 2], [0, 2]], the output should be twoPolygons(p1, p2) = false.

Input/Output

[time limit] 3000ms (java) [input] array.array.integer p1

The first polygon given as an array of points. Each point is represented by an array of two integers - [x, y]. The points are given in counterclockwise order. No two points coincide and no three points lie on the same line.

Constraints: 3 ≤ p1.length ≤ 10, -15 ≤ p1[i][j] ≤ 15.

[input] array.array.integer p2

The second polygon in the same format.

Constraints: 3 ≤ p2.length ≤ 10, -15 ≤ p2[i][j] ≤ 15.

[output] boolean
