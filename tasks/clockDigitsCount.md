Given start time and finish time, find how many times each digit appeared on the clock during the period from start time to finish time inclusive.

Example

for startTime = [23, 59, 58], finishTime = [23, 59, 59] output should be [0, 0, 2, 2, 0, 4, 0, 0, 1, 3]

[input] array.integer startTime

[input] array.integer finishTime

Time is represented as follows [hours, minutes, seconds]. Time on the clocks is shown as follows: HH:MM:SS. It is supposed that both time stamps refer to the same day. It's guaranteed that startTime < finishTime (in the terms of time)
[output] array.integer

array i-th element of which contains the number of occurrences of digit i on the clock during the period from startTime to finishTime inclusive
