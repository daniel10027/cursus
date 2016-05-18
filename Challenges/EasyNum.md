A three-digit number is called an Easy Number if its first digit raised to the power of its second digit and divided by its third digit is divisible by its first digit.

More formally, if n = 100 * a + 10 * b + c where 1 ≤ a ≤ 9 and 0 ≤ b, c ≤ 9, and ab / c % a == 0, then n is an Easy Number.

Determine if the given number n is easy or not.

Example:

EasyNum(321) = true
Because:

32 = 9;
9 / 1 = 9;
9 is divisible by 3.
EasyNum(635) = false
Because:

63 = 216;
216 / 5 = 43.2;
43.2 is not divisible by 6.
[input] integer n

99 < Input number < 1000
[output] boolean

Whether EasyNum or not
