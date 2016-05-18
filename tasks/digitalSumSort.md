# Description

You are given an array of integers. Sort it in such a way that if a comes before b then the sum of digits of a is less than or equal to the sum of digits of b. If two numbers have the same sum of digits, the smaller one (in the regular sense) should come first. For example 4 and 13 have the same sum of digits, however 4 < 13 thus 4 comes before 13 in any digitalSum sorting where both are present.

Example

For a = [13, 20, 7, 4], the output should be
digitalSumSort(a) = [20, 4, 13, 7].

[input] array.integer a

Array of positive integers.

[output] array.integer
