# Description
Given a string which represents a valid arithmetic expression, find the index of the character in the given expression corresponding to the arithmetic operation which needs to be computed first.

Note that several operations of the same type with equal priority are computed from left to right.

## Example
For expr = `"(2 + 2) * 2"`, the output should be

```javascript
firstOperationCharacter(expr) = 3;
```

For expr = `"2 + 2 * 2"`, the output should be

```javascript
firstOperationCharacter(expr) = 6.
```

- [input] string expr

  A string consisting of digits, parentheses, addition and multiplication signs (pluses and asterisks). It is guaranteed that there is, at least, one arithmetic sign in it.

- [output] integer
