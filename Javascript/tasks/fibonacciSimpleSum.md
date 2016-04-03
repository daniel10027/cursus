# Description
Fibonacci numbers Fn are defined as follows:

```
F0 = F1 = 1;
Fk = Fk - 1 + Fk - 2, k > 1.
```

For a given positive integer n determine if it can be represented as a sum of two Fibonacci numbers (possibly equal).

## Example

```
n = 1: false;
n = 10: true (10 = 5 + 5 = F4 + F4);
n = 11: true (11 = 3 + 8 = F3 + F5);
n = 12: false.
```

- [input] integer n
- [output] boolean
-   true if n can be represented as Fi + Fj, false otherwise.
