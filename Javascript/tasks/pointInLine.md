In computational geometry a line on a plane is usually described as a locus of such points (x, y) that A * x + B * y + C = 0 for specified A, B and C.

Check if the given point belongs to the given line.

##Example

pointInLine([0, 1], [1, 1, 0]) = false
pointInLine([1, -1], [1, 1, 0]) = true

###[input] array.integer point

The coordinates of the point [x, y].

###[input] array.integer line

The line as an array of 3 numbers.

###[output] boolean

true if the point is on the line, false otherwise
