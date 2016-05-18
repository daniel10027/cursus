Given array of integers inputArray, construct an array of arrays of integers answer such that

```
answer is of the same length as inputArray;
for each valid i the ith element of answer is an array of exactly two integers;
0 <= answer[i][j] < length of inputArray;
answer[i][0] <= i <= answer[i][1];
inputArray[i] is the minimum value among all the elements of inputArray at positions from answer[i][0] up to answer[i][1], inclusive;
for each valid i, answer[i][1] - answer[i][0] has the maximum possible value.
```

Example

```
neighborhoodForMinimum([3, -2, 1, -2, -4]) = [[0, 0],
                                              [0, 3],
                                              [2, 2],
                                              [0, 3],
                                              [0, 4]]
```

[input] array.integer inputArray

[output] array.array.integer
