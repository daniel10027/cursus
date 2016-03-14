# Description

Consider the following operation on a string containing digits from 1 to 9:

-   if one of two digits on the sides of the string is divisible by 3, remove that digit from the string;
-   if sum of two digits on the sides of the string is divisible by 3, remove both digits from the string;

This operation is applied sequentially until the string is empty or neither of the two given conditions is met.

For a given string find the result of applying the given algorithm to it.

## Example

For a string `"312248"` the answer is `"2"`.

-   [input] string s

-   [output] string
