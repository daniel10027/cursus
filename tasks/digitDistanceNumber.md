# Description
- Let the integer n be represented by digits a1, a2, ..., ak (the digits are listed from left to right in the order they appear in the decimal representation of n).
- Define bi = |ai + 1 - ai|.
- Construct the number from the digits b1, b2, ..., bk - 1 (in that order). Let's call the resulting value a digit distance number for n.

## Example

```
digitDistanceNumber(2744) = 530

b1 = |a2 - a1| = |7 - 2| = 5
b2 = |a3 - a2| = |4 - 7| = 3
b3 = |a4 - a3| = |4 - 4| = 0

  digitDistanceNumber(330) = 3 (formally, it is 03 but leading zeroes should be removed)

    digitDistanceNumber(333) = 0
```

- [input] integer n

  A positive integer consisting of at least two digits.

- [output] integer

  The digit distance number for n.
