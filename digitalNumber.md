## Description

You have a large electronic display that contains infinitely many 7-segment components for displaying digits from 0 to 9 (the components are placed in a line). Each component looks like this:

![image](https://codefightsuserpics.s3.amazonaws.com/tasks/digitalNumber/img/component.png?_tm=1442506853981)
You are allowed to light up only K small segments on all the components. They should be lit in such way that each component either shows a valid digit or doesn't show anything.

What is the largest multiple of 3 that can be obtained by lighting exactly K segments?

Here are representations of the digits:
![representation](https://codefightsuserpics.s3.amazonaws.com/tasks/digitalNumber/img/digits.gif?_tm=1442506854106)

Examples

    digitalNumber(6) = "111"
    digitalNumber(10) = "774"

    [input] integer k

    [output] string
        string representation of maximum obtainable number
