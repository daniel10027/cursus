# Description

You are given a set of points on the Cartesian plane. Consider the distance between two points as the maximum difference of their coordinates. For example, the distance between points (1, 2) and (4, 6) is equal to max(|4 - 1|, |6 - 2|) = 4.

Given a set of points, find the pair with the largest distance and return the value of their distance.

Example

For A = [7, 6, 6, 8, 1, 2, 8, 6], the output should be
largestDistance(A) = 7.
Input/Output

[time limit] 4000ms (js)
[input] array.integer A

Points are given in one array A, where A[2 * i] is the x coordinate of the ith point, and A[2 * i + 1] is the y coordinate of the ith point. All coordinates are positive. The number of points is less than 1000. The points are not necessarily distinct.

Constraints:
4 ≤ A.length ≤ 10,
0 ≤ A[i] ≤ 50.

[output] integer

The maximum distance between two points from the input set.
