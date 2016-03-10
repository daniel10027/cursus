We have k square apple boxes full of apples. If a box has a side length (aka size) of m then it contains m x m apples. You notice two interesting properties about the boxes:

The boxes form a full set, i.e. the smallest box has size 1, the next one has size 2,..., all the way up to size k. Boxes that have an odd size contain only yellow apples. Boxes that have an even size only contain red apples. Your task is to calculate the difference between the number of red apples and the number of yellow apples.

Example

For k = 5, there will be 1 + 3 _ 3 + 5 _ 5 = 35 yellow apples and 2 _ 2 + 4 _ 4 = 20 red apples, thus the answer would be

20 - 35 = -15.

[input] integer k

A positive integer. [output] integer

The difference between the two types of apples.
