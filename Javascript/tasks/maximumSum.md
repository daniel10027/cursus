# Description

You are given an array of integers A. Range sum query is defined by a pair of non-negative integers L and R (L <= R). An output to a range sum query on the given array is the sum of all elements of A with indices from L to R inclusive.

Find an algorithm that given a list of range sum queries can rearrange the array A in such a way that the total sum of all of the query outputs is maximized.

Example

For A = [2, 1, 2] and Q = [[0, 1]], the output should be
maximumSum(A, Q) = 4.

[input] array.integer A

An initial array.

[input] array.array.integer Q

Array of range sum queries, each query is an array of two non-negative integers.

[output] integer

Maximum possible total sum of the given range sum query outputs.
