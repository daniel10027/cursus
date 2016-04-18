# Description

In mathematics, the Farey sequence of order n is the sequence of completely reduced fractions between `0` and `1` with denominators less than or equal to `n`, arranged in the order of increasing value. Each Farey sequence starts with the value `0`, denoted by the fraction `0b1`, and ends with the value `1`, denoted by the fraction `1b1`. For example, the Farey sequence of order `n = 5` is:

`{0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1}`.

Given two positive integers `n` and `m` determine the `mth (1-based)` fraction of the Farey sequence of order `n`.

## Example

```javascript
n = 1 m = 1 : "0/1"
n = 1 m = 2 : "1/1"
n = 5 m = 7 : "3/5"
```

-   [input] integer n
      A positive integer

-   [input] integer m
      A positive integer, not exceeding the number of elements in the Farey sequence of order n

-   [output] string
