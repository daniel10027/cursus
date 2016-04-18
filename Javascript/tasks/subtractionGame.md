# Description
Two players compete with each other.
Initially they have some positive integer N. They make moves in turn. The first move is made by the 1st player, the 2nd by the second player, the 3rd - by the first one once again, etc. On the i-th move a player should decrease N by some integer from 1 to i, inclusive. The one, after whose move the value of N becomes a non-positive integer, loses.

Which player wins the game with a given N?

## Example

```
subtractionGame(1) = false
subtractionGame(2) = true
subtractionGame(3) = false
[input] integer n

initial positive integer
[output] boolean

true if the first player wins in the game with a given N assuming both players perform optimally, false otherwise
```
