# Description

You are given 2 sorted arrays of integers A and B. You are allowed to select at most k elements in total from both arrays in order to maximize the following expression: (Sum of selected elements of A) \* (Sum of selected elements of B).

If no elements are chosen from an array, the sum is considered to be 0.

## Example

```javascript
maxSumProduct(
    [-10, 10, 20, 90],
    [-1, 2, 3, 4, 5],
    5) = (20 + 90) * (3 + 4 + 5) = 1320
```

-   [input] array.integer a

  An array sorted in ascending order.

-   [input] array.integer b

  An array sorted in ascending order

-   [input] integer k

  The maximum number of elements that can be selected.

-   [output] integer

  The maximum possible value of the expression.
