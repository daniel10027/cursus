# Description

You are given a sequence of integers.

Return its largest subsequence such that all the numbers of the subsequence have the same sum of their first and last digits. Of all such subsequences choose the one with the largest sum of two digits.

> A subsequence is a sequence that can be derived from another sequence by deleting some elements (possibly, none) without changing the order of the remaining elements.

## Example

For `sequence = [66, 38, 369, 99, 21, 48]`, the output should be :

```javascript
largestSubsequence(sequence) = [66, 369, 48]
```

The sum of the first and the last digits of each element in the answer equals 12.

- **[input]** array.integer sequence

  A non-empty array of positive integers. All elements of the sequence have at least two digits.

- **[output]** array.integer
