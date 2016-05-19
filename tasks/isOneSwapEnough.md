# Description

Given a string, check if a palindrome can be obtained from it by at most one swap of some pair of characters.

## Example

For `inputString = "aabaa"`, the output should be :

```javascript
isOneSwapEnough(inputString) = true
```

It is already a palindrome.

For `inputString = "abab"`, the output should be :

```javascript
isOneSwapEnough(inputString) = true
```

For example, one can swap the leftmost 'a' with the leftmost 'b'.

For `inputString = "abc"`, the output should be :

```javascript
isOneSwapEnough(inputString) = false
```

- **[input]** string inputString

  A non-empty string consisting of lowercase characters.

- **[output]** boolean
