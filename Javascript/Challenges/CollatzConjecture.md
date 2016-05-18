# Description

The Collatz conjecture is a conjecture in mathematics that states that for each integer n the following algorithm turn n into 1:

if n is divided by 2, replace n with n / 2;
if n is not divided by 2, replace it with 3 * n + 1.
Given the number n, apply the algorithm above to it and return all values of n until n becomes 1.

Example

For n = 5, the output should be
CollatzConjecture(n) = "5 16 8 4 2".

Here's how n changes with each step:

5 % 2 ≠ 0, so n becomes 3 * n + 1 = 16;
16 % 2 = 0, so n becomes 16 / 2 = 8;
8 % 2 = 0, so n becomes 8 / 2 = 4;
4 % 2 = 0, so n becomes 4 / 2 = 2;
2 % 2 = 0, so n becomes 2 / 2 = 1.
Input/Output

[input] integer n

1 ≤ n < 108.

[output] string

The values of n separated by a single whitespace character.
