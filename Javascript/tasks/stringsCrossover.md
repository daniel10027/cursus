Define crossover operation over two equal-length strings A and B as follows:

the result of that operation is a string of the same length as the input strings
result[i] is chosen at random between A[i] and B[i]
Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice.

Example

for inputArray = ['abc','aaa','aba','bab'], result='bbb' the output should be 2

[input] array.string inputArray

A non-empty array of equal-length strings.
[input] string result

A string of the same length as each of the inputArray elements.
[output] integer
