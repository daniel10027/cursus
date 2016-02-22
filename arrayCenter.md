Consider an array of integers A. Let minA be its minimal element, and let avgA be its mean.

Define the center for the array A as the array B such that:

B is formed from A by erasing some of its elements.
For each i, |B[i] - avgA| < minA.
B has the maximal number of elements among all the arrays satisfying the above requirements.
Given an array of integers, return its center.

Example

For [8, 3, 4, 5, 2, 8], the output should be [4, 5] (since minA = 2, avgA = 5).
For [1, 3, 2, 1], the output should be [1, 2, 1] (since minA = 1, avgA = 1.75).
[input] array.integer A

Unsorted non-empty array of integers.
[output] array.integer
