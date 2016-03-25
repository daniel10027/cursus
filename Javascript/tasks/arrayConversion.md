# Description
Given an array of 2k integers `(for some integer k)`, perform the following steps until the array contains only one element:
- On the 1st, 3rd, 5th, etc. steps `(1-based)` replace each pair of consecutive elements with their sum.
- On the 2nd, 4th, 6th, etc. steps replace each pair of consecutive elements with their product.

After the algorithm has finished, there will be a single element left in the array. Return that element.

## Example
For `inputArray = [1, 2, 3, 4, 5, 6, 7, 8]`, we have -> `[3, 7, 11, 15] -> [21, 165] -> [186]`, hence :

```javascript
arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) = 186
```

- [input] array.integer inputArray
- [output] integer
