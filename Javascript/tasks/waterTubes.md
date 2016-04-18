You are given some water tubes. For each i where i is the tube index, it is known that the ith tube contains wateri liters of liquid, but each minute flowPerMinutei liters flows out of it. Your task is to calculate the amount of time it will take for the tubes to become empty.

Example

waterTubes([1, 2, 5], [1, 1, 2]) = 3
waterTubes([1, 2, 3], [1, 1, 2]) = 2
[input] array.integer water

Array of positive integers.
[input] array.integer flowPerMinute

Array of positive integers, len(water) = len(flowPerMinute).
[output] integer

The amount of time it will take for the tubes to become empty.
