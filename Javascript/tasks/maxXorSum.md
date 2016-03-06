Given a set of integers, find the subset that has the largest possible XOR (exclusive OR) sum. XOR sum refers to successive XOR operations (a^b) on the binary forms of the given integers.

Example

If we wanted to calculate the XOR sum of all the integers from 1 to 4 it would go as follows:

1 = 001,  2 = 010,   3 = 011,   4 = 100,

 1^2          = 1^2  = 001^010 = 011 = 3 (1^2)^3       = 3^3  = 011^011 = 000 = 0 (1^2^3)^4     = 0^4  = 000^100 = 100 = 4 Given the array [1, 2, 3, 4] the subset [3, 4] produces the largest XOR sum, since the XOR sum of 3 = 011 and 4 = 100 is 111 = 7, thus:

maxXorSum([1, 2, 3, 4]) = 7

[input] array.integer a

An array of N distinct positive integers, N < 15. [output] integer

The largest possible XOR sum of a subset.
