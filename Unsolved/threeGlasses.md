

Given three glasses with some capacities, it is possible to:

    pour all water from one glass away;
    pour some water from one glass to another until the first one is empty or the second one is full.

Initially all glasses are full. How many different positive volumes of all the water in glasses is it possible to get with the described actions?

Example

For capacities (16, 5, 3) it is possible to get volume 13 with the following actions:

(16, 5, 3)->(16, 5, 0)->(16, 2, 3)->(16, 2, 0)->
    ->(16, 0, 2)->(11, 5, 2)->(11, 0, 2)

    [input] array.integer cap
        capacities of glasses - three positive integers

    [output] integer
        number of different positive volumes
