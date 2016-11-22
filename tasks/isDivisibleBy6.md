# Description

A masked number is a string that consists of digits and one asterisk (`*`) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

Example

For inputString = "1*0", the output should be isDivisibleBy6(inputString) = ["120", "150", "180"].

Input/Output

[time limit] 4000ms (js) [input] string inputString

A masked number.

Constraints: 1 ≤ inputString.length ≤ 105.

[output] array.string

Sorted array of strings representing all non-negative integers that correspond to the given mask and are divisible by 6.
