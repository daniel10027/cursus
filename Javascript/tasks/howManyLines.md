Given a set of points on the plane our task is to identify which subsets of these points lie on the same line.

Example

howManyLines([0, 0, 1, 1], [0, 1, 1, 0]) = [6, 0, 0] [input] array.integer X

array of integers denoting the x coordinates of the given set of points [input] array.integer Y

array of integers denoting the y coordinates of the given set of points. It's guaranteed that all the points are unique [output] array.integer

The i-th (0-based) element of the output should be equal to the number of lines which contain exactly i + 2 points from the given set. The length of the output should be equal to X.length - 1
