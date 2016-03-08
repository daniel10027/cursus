

A rectangle with sides parallel to the axes can be written as a pair of opposing vertices' coordinates of this rectangle.

Find the area of the intersection of two rectangles given in the described format.

Example

rectanglesIntersection([0, 0], [2, 2], [1, 1], [3, 3]) = 1

    [input] array.integer a
        array of two integers - coordinates of the first rectangle's first vertex

    [input] array.integer b
        array of two integers - coordinates of the first rectangle's second vertex

    [input] array.integer c
        array of two integers - coordinates of the second rectangle's first vertex

    [input] array.integer d
        array of two integers - coordinates of the second rectangle's second vertex

    [output] integer
        area of the intersection of rectangles (0 if they don't intersect)
