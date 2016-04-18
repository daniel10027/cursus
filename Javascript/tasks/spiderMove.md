A spider is standing at the origin (0, 0) of a Cartesian plane and wants to move to the point (X,Y). At each step, the spider can only move one square in two of the four directions: U(up), D(down,), L(left), R(right), depending on where it is heading:

```
if X ≥ 0, Y ≥ 0. The spider can only go U or R.
if X ≥ 0, Y ≤ 0. The spider can only go D or R.
if X ≤ 0, Y ≥ 0. The spider can only go U or L.
if X ≤ 0, Y ≤ 0. The spider can only go D or L.
Find the number of ways for the spider to get to the given point (X, Y).
```

Example

```
With (X, Y) = (2, -2), there are only 6 ways:

RRDD
RDRD
RDDR
DRRD
DRDR
DDRR


With (X,Y) = (-3, 0), there is only one way: LLL
For (0, 0), the answer is defined to be 1.

[input] integer X

[input] integer Y

[output] integer
```
