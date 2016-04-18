# Description
You are playing a number guessing game with your friend. Your friend thought of some integer `x` from `1` to `n`. In order to guess the number, you can ask questions of the form `x <= a or x >= a`. If the answer to your question is `"yes"`, you will need to pay `$2` to your friend, otherwise `$1`.

Find the `minimal` amount of money you will need in order to guess any number from `1 to n`.

## Example

```javascript
numberGuessingNaive(3) = 3
```

- [input] integer n

  A positive integer.

- [output] integer
