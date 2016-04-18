n numerical analysis, the trapezoidal rule is a technique for approximating the definite integral. The trapezoidal rule works by approximating the region under the graph of the function f(x) as a trapezoid and calculating its area.

For a given polynomial function find the approximate value of definite integral on the given interval.

Example

```
trapezoidalRule(-1, 2, [0, 0, 0, 1]) = 4.5
```

[input] integer l

left bound [input] integer r

right bound, l <= r [input] array.integer p

array of integers which represents a polynomial f(x) = p[0] + p[1] _ x + p[2] _ x2 + ... [output] float

the approximate value of definite integral of f(x) over the interval [l, r]computed by applying the trapezoidal rule on each of the segments [l, l + 1], [l + 1, l + 2], ..., [r - 1, r]
