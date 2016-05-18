You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1. A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

Example

boxesPacking([1, 3, 2], [1, 3, 2], [1, 3, 2]) = true

boxesPacking([1, 1], [1, 1], [1, 1]) = false

boxesPacking([3, 1, 2], [3, 1, 2], [3, 2, 1]) = false 

```
[input] array.integer length
Array of positive integers. [input] array.integer width

Array of positive integers. [input] array.integer height

Array of positive integers. All three arrays have the same length n (1 ≤ n ≤ 20).

[output] boolean

true if it is possible to put all boxes into one, false otherwise.
```
