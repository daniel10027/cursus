# Description
For a given positive integer n determine if it can be represented as a sum of two Fibonacci numbers (possibly equal).

## Example
For `n = 1`, the output should be

```javascript
fibonacciSimpleSum(n) = true;
```

**Explanation**: `1 = 0 + 1 = F0 + F1`.

For `n = 10`, the output should be

```javascript
fibonacciSimpleSum(n) = true;
```

**Explanation**: `10 = 5 + 5 = F5 + F5`.

For `n = 11`, the output should be

```javascript
fibonacciSimpleSum(n) = true;
```

**Explanation**: `11 = 3 + 8 = F4 + F6`.

For `n = 12`, the output should be

```javascript
fibonacciSimpleSum(n) = false.
```

**Explanation**: There is no correct representation.
- [input] integer n

  A positive integer.

- [output] boolean

  true if n can be represented as Fi + Fj, false otherwise.
