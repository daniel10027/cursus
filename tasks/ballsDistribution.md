# Description
You have a set of balls that are colored in such a way that there is an equal number of balls of each color. The balls are split into groups based on color and the groups are placed next to each other in some order.

You also have an infinite number of boxes of the same max capacity placed next to each other in some order.

You distribute the balls among the boxes as follows:

first you fill up the first box, then the second, etc. first you use all of the balls of the first color, then all of the balls of the second color, etc. Find the number of colors for which there is more than one box that contains a ball of that color.

## Example
For `colors = 3`, `ballsPerColor = 5` and `boxSize = 6`, the output should be `ballsDistribution(colors, ballsPerColor, boxSize) = 2`.
- [input] integer colors

  The number of colors as a positive integer.

- [input] integer ballsPerColor

  The number of balls of each color as a positive integer.

- [input] integer boxSize

  The max capacity of the boxes as a positive integer.

- [output]  integer
