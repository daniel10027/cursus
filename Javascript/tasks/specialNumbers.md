# Description

A number is considered special, if it remains the same (and continues being a valid number) when rotated by `180` degrees. For example, number `986` is special, but `11` or `9` aren't, because 1 ceases to be a digit after the rotation and `9` becomes `6` after the rotation.

Determine the number of special integers between `l` and `r`, `inclusive`.

## Example

```javascript
specialNumbers(8, 8) = 1
```

```javascript
specialNumbers(66, 96) = 3
```

-   [input] integer l

      positive integer

-   [input] integer r

      positive integer, l \<= r

-   [output] integer
