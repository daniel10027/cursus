# Description
Programmer John was studying Lisp programming language, when he suddenly realized that he still does not have a calculator written by himself. Every respected programmer should have one! That is why he decided to write a classic calculator that accepts expressions in Polish notation.

Examples

For tokens = ["+", "3", "7"], the output should be polishNotation(tokens) = 10; For tokens = ["_", "-", "5", "6", "7"], the output should be polishNotation(tokens) = -7; For tokens = ["-", "5", "_", "6", "7"], the output should be polishNotation(tokens) = -37. Examples in conventional notation

3 + 7 = 10; (5 - 6) _ 7 = -7; 5 - (6 _ 7) = -37. [input] array.string tokens

Tokens of some expression in Polish notation. The tokens can be:

'+' - addition; '*' - multiplication; '-' - subtraction; 'n' - integer number. It is guaranteed that the array is not empty and that the given expression is valid.

[output] integer

A result of the expression given in Polish notation.
