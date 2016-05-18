Let's define a bitwise AND of a set of integers A = {a1, a2, ..., ak} as a consequent bitwise AND of all its elements: AND(A) = a1 & a2 & ... & ak, where & is a standard bitwise AND of two integers. Bitwise AND of a single element is equal to the same element.

Find the largest (by the number of elements) subset of the given set of integers, such that a bitwise AND of this subset is not less than some given bound.

Return the size of this subset.

It is guaranteed that in the set there is at least one element not less than bound.

Example

For an array [4, 3, 4, 5, 7] and bound = 3 the answer will be 5 (for the subset [4, 4, 5, 7]).

[input] array.integer a

An array of non-negative integers. [input] integer bound

A non-negative integer. [output] integer
